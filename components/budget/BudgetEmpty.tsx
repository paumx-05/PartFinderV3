// components/budget/BudgetEmpty.tsx
'use client';
import React from 'react';
import { FileText, ShoppingCart } from 'lucide-react';

interface BudgetEmptyProps {
  onClose: () => void;
}

export function BudgetEmpty({ onClose }: BudgetEmptyProps) {
  return (
    <div className="text-center py-8 px-4">
      <div className="mb-6">
        <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          Presupuesto Vacío
        </h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          No hay productos en tu presupuesto. Agrega productos desde el catálogo 
          para crear un presupuesto personalizado.
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={onClose}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
        >
          Cerrar Presupuesto
        </button>
        
        <p className="text-xs text-gray-500">
          Los productos se agregan al presupuesto usando el botón "Añadir a Presupuesto" 
          en cada producto del catálogo.
        </p>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
          <ShoppingCart className="w-4 h-4" />
          <span>El presupuesto es independiente del carrito de compras</span>
        </div>
      </div>
    </div>
  );
}
