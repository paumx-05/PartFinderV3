// components/cart/CartSummary.tsx
'use client';
import React from 'react';
import { CartState } from '@/lib/types/cart';
import { useClient } from '@/lib/contexts/ClientContext';

interface CartSummaryProps {
  cartState: CartState;
  onCheckout?: () => void;
}

export default function CartSummary({ cartState, onCheckout }: CartSummaryProps) {
  const { totalItems, totalPrice } = cartState;
  const { selectedClient } = useClient();

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">Resumen del Pedido</h3>
      
      {/* Cliente seleccionado */}
      {selectedClient && (
        <div className="mb-4 p-3 bg-red-900 bg-opacity-30 rounded-lg border border-red-600">
          <div className="text-sm text-red-400 font-medium mb-1">Cliente:</div>
          <div className="text-white font-medium">{selectedClient.name}</div>
          <div className="text-xs text-gray-400">{selectedClient.email}</div>
        </div>
      )}
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Productos ({totalItems})</span>
          <span className="text-white">€{totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Envío</span>
          <span className="text-green-400">Gratis</span>
        </div>
        
        <div className="border-t border-gray-600 pt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-white">Total</span>
            <span className="text-red-400">€{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
        disabled={totalItems === 0}
      >
        Proceder al Pago
      </button>
      
      <p className="text-xs text-gray-400 text-center mt-3">
        * Los precios incluyen IVA
      </p>
    </div>
  );
}
