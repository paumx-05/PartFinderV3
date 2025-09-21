// components/PartsList.tsx
'use client';
import React from 'react';
import { Part } from '@/lib/types/parts';
import { ShoppingCart, Star, Package, FileText } from 'lucide-react';
import { useBudget } from '@/lib/contexts/BudgetContext';

interface PartsListProps {
  parts: Part[];
  onAddToCart?: (part: Part) => void;
}

export default function PartsList({ parts, onAddToCart }: PartsListProps) {
  const { addItem: addToBudget } = useBudget();
  if (parts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No se encontraron recambios</p>
        <p className="text-gray-500 text-sm mt-2">Intenta ajustar los filtros de búsqueda</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 sm:space-y-3 md:space-y-4">
      {parts.map((part) => (
        <div
          key={part.id}
          className="bg-gray-700 rounded-lg p-2 sm:p-3 md:p-4 hover:bg-gray-600 transition-colors duration-200 group overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={part.image}
                alt={part.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/96x96/374151/9CA3AF?text=Sin+Imagen';
                }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-base sm:text-lg group-hover:text-red-400 transition-colors truncate">
                    {part.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mt-1">
                    <span className="font-medium">{part.brand}</span>
                  </p>
                  
                  <p className="text-gray-300 text-sm mt-2 line-clamp-2 break-words">
                    {part.description}
                  </p>

                  {/* Compatibility */}
                  <div className="flex items-center space-x-1 mt-2 text-sm text-gray-400">
                    <Package className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Compatible: {part.compatibility.join(', ')}</span>
                  </div>

                  {/* Rating */}
                  {part.rating && (
                    <div className="flex items-center space-x-1 mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{part.rating}</span>
                    </div>
                  )}
                </div>

                {/* Price and Actions */}
                <div className="flex flex-col items-end space-y-2 mt-4 md:mt-0 flex-shrink-0">
                  <div className="text-xl sm:text-2xl font-bold text-red-400">
                    €{part.price.toFixed(2)}
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    {!part.inStock && (
                      <span className="text-red-400 text-sm text-center">Agotado</span>
                    )}
                    
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                      <button
                        onClick={() => addToBudget(part)}
                        disabled={!part.inStock}
                        className={`flex items-center justify-center space-x-1 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto ${
                          part.inStock
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        title="Añadir a presupuesto"
                      >
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Presupuesto</span>
                      </button>
                      
                      <button
                        onClick={() => onAddToCart?.(part)}
                        disabled={!part.inStock}
                        className={`flex items-center justify-center space-x-1 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto ${
                          part.inStock
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        title="Añadir al carrito"
                      >
                        <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Carrito</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
