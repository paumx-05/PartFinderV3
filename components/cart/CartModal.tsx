// components/cart/CartModal.tsx
'use client';
import React, { useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/contexts/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import CartEmpty from './CartEmpty';

export default function CartModal() {
  const { state, setCartOpen, clearCart } = useCart();
  const { isOpen, items, totalItems } = state;

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setCartOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setCartOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setCartOpen(false);
    }
  };

  const handleCheckout = () => {
    // TODO: Implementar checkout
    alert('Funcionalidad de checkout en desarrollo');
  };

  const handleClearCart = () => {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clearCart();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] mx-2 sm:mx-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
              Carrito ({totalItems})
            </h2>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            {items.length > 0 && (
              <button
                onClick={handleClearCart}
                className="text-xs sm:text-sm text-gray-400 hover:text-red-400 transition-colors hidden sm:block"
              >
                Vaciar carrito
              </button>
            )}
            
            <button
              onClick={() => setCartOpen(false)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex-shrink-0"
              aria-label="Cerrar carrito"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <CartEmpty onClose={() => setCartOpen(false)} />
            </div>
          ) : (
            <>
              {/* Lista de items */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Resumen */}
              <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-700 p-3 sm:p-6">
                <CartSummary 
                  cartState={state} 
                  onCheckout={handleCheckout}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
