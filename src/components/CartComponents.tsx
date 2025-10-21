"use client";
import React from 'react';
import { useCart } from '../context/CartContext';

// Componente para el botón del carrito que se puede usar en cualquier parte
export const CartButton: React.FC<{ 
  className?: string;
  showBadge?: boolean;
  children?: React.ReactNode;
}> = ({ 
  className = "relative rounded-full p-2 text-gray-400 hover:text-white transition-colors", 
  showBadge = true,
  children 
}) => {
  const { openCart, totalItems } = useCart();

  return (
    <button
      onClick={openCart}
      className={className}
    >
      {children || (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
          <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
          <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
        </svg>
      )}
      {showBadge && totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};

// Hook para agregar productos al carrito con feedback visual
export const useAddToCart = () => {
  const { addItem, openCart } = useCart();

  const addToCartWithFeedback = (item: Parameters<typeof addItem>[0], openCartAfter = false) => {
    addItem(item);
    
    if (openCartAfter) {
      // Pequeño delay para mostrar la animación del badge
      setTimeout(() => {
        openCart();
      }, 100);
    }
  };

  return { addToCartWithFeedback, addItem, openCart };
};

// Componente de contador de items del carrito (para mostrar en cualquier lugar)
export const CartCounter: React.FC<{ 
  className?: string;
  showZero?: boolean;
}> = ({ 
  className = "text-sm font-medium", 
  showZero = false 
}) => {
  const { totalItems } = useCart();

  if (!showZero && totalItems === 0) return null;

  return (
    <span className={className}>
      {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
    </span>
  );
};

// Componente de total del carrito
export const CartTotal: React.FC<{ 
  className?: string;
  showCurrency?: boolean;
}> = ({ 
  className = "text-lg font-bold text-green-600",
  showCurrency = true 
}) => {
  const { totalPrice } = useCart();

  return (
    <span className={className}>
      {showCurrency && '$'}{totalPrice.toFixed(2)}
    </span>
  );
};