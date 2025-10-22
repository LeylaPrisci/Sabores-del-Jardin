"use client";
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { PaymentMethod } from '../context/CartContext';
import Button from './Button';

const CartDrawer: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, isCartOpen, closeCart, processPurchase, currentStep, setCurrentStep } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [selectedInstallments, setSelectedInstallments] = useState<number>(1);

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'visa',
      name: 'Visa',
      type: 'credit',
      icon: '💳',
      installments: [1, 3, 6, 12, 18]
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      type: 'credit',
      icon: '💳',
      installments: [1, 3, 6, 12, 18]
    },
    {
      id: 'mercadopago',
      name: 'Mercado Pago',
      type: 'digital',
      icon: '💰',
      installments: [1]
    },
    {
      id: 'debit',
      name: 'Tarjeta de Débito',
      type: 'debit',
      icon: '💰',
      installments: [1]
    },
    {
      id: 'cash',
      name: 'Efectivo en punto de retiro',
      type: 'cash',
      icon: '💵',
      installments: [1]
    }
  ];

  const handleFinalizePurchase = async () => {
    if (!selectedPayment) return;
    
    await processPurchase(selectedPayment, selectedInstallments);
  };

  const calculateInstallmentPrice = (installments: number) => {
    if (installments === 1) return totalPrice;
    // Simular interés del 10% por cuota adicional
    const interest = 1 + (installments - 1) * 0.1;
    return totalPrice * interest;
  };

  const goToPayment = () => {
    setCurrentStep('payment');
  };

  const goBackToCart = () => {
    setCurrentStep('cart');
    setSelectedPayment(null);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {isCartOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeCart}
        />
      )}
      
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#009D71] to-[#00805a]">
          <div>
            <h2 className="text-lg font-bold text-white">
              Mi Carrito
            </h2>
            <p className="text-white/80 text-xs">
              {items.length} {items.length === 1 ? 'producto' : 'productos'}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="p-1 text-white hover:text-white/70 transition-colors rounded-full hover:bg-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full bg-white">
          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4">
            {currentStep === 'success' ? (
              <div className="text-center py-8">
                <div className="text-green-500 mb-4">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-3">¡Listo! Ya podés retirar tu compra</h3>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-green-800 font-semibold mb-2">Número de operación: #MP-{Math.floor(Math.random() * 1000000)}</p>
                  <p className="text-green-700 text-sm">Total pagado: ${totalPrice.toFixed(2)}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">Te enviamos los detalles por email</p>
                <p className="text-sm text-gray-500">Gracias por confiar en Sabores del Jardín</p>
              </div>
            ) : currentStep === 'error' ? (
              <div className="text-center py-8">
                <div className="text-red-500 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">No pudimos procesar el pago</h3>
                <p className="text-gray-600 text-sm mb-4">Puede ser un problema temporal</p>
                <p className="text-sm text-gray-500">Probá con otro medio de pago o intentá más tarde</p>
              </div>
            ) : currentStep === 'processing' ? (
              <div className="text-center py-8">
                <div className="text-[#009D71] mb-4">
                  <svg className="animate-spin h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Estamos procesando el pago</h3>
                <p className="text-gray-600 text-sm mb-2">No cierres esta ventana</p>
                <p className="text-sm text-gray-500">Esto puede tardar unos segundos</p>
              </div>
            ) : currentStep === 'payment' ? (
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Elegí cómo pagar</h3>
                  <p className="text-sm text-gray-600">Total: <span className="font-bold text-[#009D71]">${totalPrice.toFixed(2)}</span></p>
                </div>
                
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="border rounded-lg p-3">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPayment?.id === method.id}
                          onChange={() => setSelectedPayment(method)}
                          className="mr-3 text-[#009D71] focus:ring-[#009D71]"
                        />
                        <span className="text-lg mr-2">{method.icon}</span>
                        <span className="font-medium">{method.name}</span>
                      </label>
                      
                      {selectedPayment?.id === method.id && method.installments && method.installments.length > 1 && (
                        <div className="mt-3 ml-8">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Cuotas:</label>
                          <select
                            value={selectedInstallments}
                            onChange={(e) => setSelectedInstallments(Number(e.target.value))}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-[#009D71] focus:border-[#009D71]"
                          >
                            {method.installments.map((installment) => (
                              <option key={installment} value={installment}>
                                {installment === 1 
                                  ? `1 pago de $${totalPrice.toFixed(2)}`
                                  : `${installment} cuotas de $${(calculateInstallmentPrice(installment) / installment).toFixed(2)}`
                                }
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 4L7 13h10m-10 0a2 2 0 002 2c1.11 0 2-.89 2-2m-2 0a2 2 0 00-2 2m0 0h4m-2 0a2 2 0 002-2m0 0a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Carrito vacío</h3>
                <p className="text-gray-500 text-sm mb-4">Agrega productos para comenzar</p>
                <button
                  onClick={() => {
                    closeCart();
                    window.location.href = '/productos';
                  }}
                  className="bg-[#009D71] text-white px-4 py-2 rounded-lg hover:bg-[#00805a] transition-colors text-sm font-medium"
                >
                  Explorar Productos
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{item.nombre}</h4>
                      <p className="text-xs text-gray-500 mb-1">{item.categoria}</p>
                      <p className="text-[#009D71] font-semibold text-sm">${item.precio.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-1 bg-gray-100 rounded px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                          className="w-6 h-6 flex items-center justify-center text-gray-600 text-sm hover:bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.cantidad}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                          className="w-6 h-6 flex items-center justify-center text-gray-600 text-sm hover:bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-xs hover:text-red-700 font-medium"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {currentStep === 'cart' && items.length > 0 && (
            <div className="border-t border-gray-200 bg-white px-4 pt-4 pb-8 space-y-4 flex-shrink-0">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-[#009D71] text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-[#009D71] text-white hover:bg-[#00805a] py-3 text-sm font-semibold rounded-lg"
                  onClick={goToPayment}
                >
                  Continuar Compra
                </Button>
                <button
                  onClick={clearCart}
                  className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm mb-2"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          )}

          {currentStep === 'payment' && (
            <div className="border-t border-gray-200 bg-white px-4 pt-4 pb-8 space-y-4 flex-shrink-0">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">Total a pagar:</span>
                <span className="font-bold text-[#009D71] text-lg">
                  ${selectedPayment && selectedInstallments > 1 
                    ? calculateInstallmentPrice(selectedInstallments).toFixed(2)
                    : totalPrice.toFixed(2)
                  }
                </span>
              </div>
              
              {selectedPayment && selectedInstallments > 1 && (
                <p className="text-xs text-gray-500 text-center">
                  {selectedInstallments} cuotas de ${(calculateInstallmentPrice(selectedInstallments) / selectedInstallments).toFixed(2)}
                </p>
              )}
              
              <div className="space-y-3">
                <Button 
                  className={`w-full py-3 text-sm font-semibold rounded-lg ${
                    selectedPayment 
                      ? 'bg-[#009D71] text-white hover:bg-[#00805a]' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  onClick={handleFinalizePurchase}
                  disabled={!selectedPayment}
                >
                  Pagar ${selectedPayment && selectedInstallments > 1 
                    ? calculateInstallmentPrice(selectedInstallments).toFixed(2)
                    : totalPrice.toFixed(2)
                  }
                </Button>
                <button
                  onClick={goBackToCart}
                  className="w-full text-gray-500 hover:text-gray-700 py-2 text-sm"
                >
                  Volver al carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;