// components/budget/BudgetItem.tsx
'use client';
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { BudgetItem as BudgetItemType } from '@/lib/types/budget';

interface BudgetItemProps {
  item: BudgetItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function BudgetItem({ item, onUpdateQuantity, onRemove }: BudgetItemProps) {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex items-start space-x-3">
        {/* Imagen del producto */}
        <div className="flex-shrink-0">
          <img
            src={item.part.image}
            alt={item.part.name}
            className="w-16 h-16 object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/64x64/374151/9CA3AF?text=Sin+Imagen';
            }}
          />
        </div>

        {/* Información del producto */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white text-sm line-clamp-2 mb-1">
            {item.part.name}
          </h3>
          <p className="text-gray-400 text-xs mb-2">
            {item.part.brand}
          </p>
          <p className="text-red-400 font-semibold text-sm">
            €{item.part.price.toFixed(2)}
          </p>
        </div>

        {/* Controles de cantidad */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            aria-label="Reducir cantidad"
          >
            <Minus className="w-4 h-4" />
          </button>
          
          <span className="w-8 text-center text-white font-medium">
            {item.quantity}
          </span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            aria-label="Aumentar cantidad"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Botón eliminar */}
        <button
          onClick={handleRemove}
          className="w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex-shrink-0"
          aria-label="Eliminar producto"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Total del item */}
      <div className="mt-3 pt-3 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Total:</span>
          <span className="text-white font-semibold">
            €{(item.part.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
