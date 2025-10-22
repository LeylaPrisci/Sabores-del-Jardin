"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  cantidad: number;
}

export type CheckoutStep = 'cart' | 'payment' | 'processing' | 'success' | 'error';

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'credit' | 'debit' | 'digital' | 'cash';
  icon: string;
  installments?: number[];
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'cantidad'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, cantidad: number) => void;
  clearCart: () => void;
  processPurchase: (paymentMethod: PaymentMethod, installments?: number) => Promise<boolean>;
  currentStep: CheckoutStep;
  setCurrentStep: (step: CheckoutStep) => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('cart');

  // Cargar datos del localStorage al montar el componente
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem('sabores-del-jardin-cart');
      if (savedItems) {
        const parsedItems = JSON.parse(savedItems);
        setItems(parsedItems);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Guardar en localStorage cada vez que cambien los items
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('sabores-del-jardin-cart', JSON.stringify(items));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [items, isLoaded]);

  const addItem = (newItem: Omit<CartItem, 'cantidad'>) => {
    setItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((item: CartItem) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item: CartItem) =>
          item.id === newItem.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, cantidad: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setItems((prevItems: CartItem[]) => prevItems.filter((item: CartItem) => item.id !== id));
  };

  const updateQuantity = (id: number, cantidad: number) => {
    if (cantidad <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems: CartItem[]) =>
      prevItems.map((item: CartItem) =>
        item.id === id ? { ...item, cantidad } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    try {
      localStorage.removeItem('sabores-del-jardin-cart');
    } catch (error) {
      console.error('Error clearing cart from localStorage:', error);
    }
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const processPurchase = async (paymentMethod: PaymentMethod, installments?: number): Promise<boolean> => {
    return new Promise((resolve) => {
      // Paso 1: Procesando pago
      setCurrentStep('processing');
      
      setTimeout(() => {
        // Simular validación de datos de pago
        const success = Math.random() > 0.1; // 90% de éxito
        
        if (success) {
          setCurrentStep('success');
          // Limpiar carrito después de compra exitosa
          setTimeout(() => {
            clearCart();
            setCurrentStep('cart');
            closeCart();
          }, 4000); // Mostrar éxito por 4 segundos
        } else {
          setCurrentStep('error');
          // Volver al paso de pago después del error
          setTimeout(() => {
            setCurrentStep('payment');
          }, 3000);
        }
        
        resolve(success);
      }, 3000); // 3 segundos de procesamiento realista
    });
  };

  const totalItems = items.reduce((sum: number, item: CartItem) => sum + item.cantidad, 0);
  const totalPrice = items.reduce((sum: number, item: CartItem) => sum + (item.precio * item.cantidad), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        processPurchase,
        currentStep,
        setCurrentStep,
        totalItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};