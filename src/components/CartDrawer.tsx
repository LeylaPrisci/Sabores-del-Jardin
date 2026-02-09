"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Button from './Button';

const CartDrawer: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, isCartOpen, closeCart } = useCart();

  // El modal solo muestra el carrito y redirige a /checkout

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
        <div className="flex flex-col h-full bg-white">
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
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
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      width={48}
                      height={48}
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
          {items.length > 0 && (
            <div className="border-t border-gray-200 bg-white px-4 pt-4 pb-8 space-y-4 flex-shrink-0">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-[#009D71] text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="space-y-3">
                <Button
                  className="w-full bg-[#009D71] text-white hover:bg-[#00805a] py-3 text-sm font-semibold rounded-lg"
                  onClick={() => {
                    // Guardar carrito y total en localStorage antes de redirigir
                    localStorage.setItem('checkout_items', JSON.stringify(items));
                    localStorage.setItem('checkout_total', JSON.stringify(totalPrice));
                    closeCart();
                    window.location.href = '/checkout';
                  }}
                >
                  Finalizar Compra
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
        </div>
      </div>
    </>
  );
};

export default CartDrawer;