// components/cart/CartEmpty.tsx
'use client';
import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface CartEmptyProps {
  onClose: () => void;
}

export default function CartEmpty({ onClose }: CartEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-6">
        <ShoppingCart className="w-12 h-12 text-gray-400" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">
        Tu carrito está vacío
      </h3>
      
      <p className="text-gray-400 mb-6 max-w-sm">
        Agrega algunas piezas de repuesto para comenzar tu pedido
      </p>
      
      <button
        onClick={onClose}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Continuar Comprando
      </button>
    </div>
  );
}