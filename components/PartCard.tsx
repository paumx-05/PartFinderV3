// components/PartCard.tsx
'use client';
import React from 'react';
import { Part } from '@/lib/types/parts';
import { ShoppingCart, Star, Package } from 'lucide-react';

interface PartCardProps {
  part: Part;
  onAddToCart?: (part: Part) => void;
}

export function PartCard({ part, onAddToCart }: PartCardProps) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(part);
    }
  };

  return (
    <div className="bg-gray-700 rounded-lg p-3 sm:p-4 hover:bg-gray-600 transition-colors duration-200 group overflow-hidden">
      {/* Image */}
      <div className="relative mb-3 sm:mb-4">
        <img
          src={part.image}
          alt={part.name}
          className="w-full h-40 sm:h-48 object-cover rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/300x200/374151/9CA3AF?text=Sin+Imagen';
          }}
        />
        {!part.inStock && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex-shrink-0">
            Agotado
          </div>
        )}
        {part.rating && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-1 rounded flex items-center space-x-1 flex-shrink-0">
            <Star className="w-3 h-3 fill-current flex-shrink-0" />
            <span className="truncate">{part.rating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2 min-w-0">
        <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-red-400 transition-colors break-words min-w-0">
          {part.name}
        </h3>
        
        <p className="text-gray-400 text-xs min-w-0">
          <span className="font-medium truncate min-w-0">{part.brand}</span>
        </p>
        
        <p className="text-gray-300 text-xs line-clamp-2 break-words min-w-0">
          {part.description}
        </p>

        {/* Compatibility */}
        <div className="text-xs text-gray-400 min-w-0">
          <div className="flex items-center space-x-1">
            <Package className="w-3 h-3 flex-shrink-0" />
            <span className="truncate min-w-0">Compatible: {part.compatibility[0]}</span>
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-2 min-w-0">
          <div className="text-base sm:text-lg font-bold text-red-400 truncate min-w-0">
            €{part.price.toFixed(2)}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!part.inStock}
            className={`flex items-center space-x-1 px-2 sm:px-3 py-1 rounded text-xs font-medium transition-colors flex-shrink-0 ${
              part.inStock
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-3 h-3 flex-shrink-0" />
            <span className="hidden sm:inline truncate min-w-0">{part.inStock ? 'Añadir' : 'Agotado'}</span>
            <span className="sm:hidden flex-shrink-0">{part.inStock ? '+' : '✕'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
