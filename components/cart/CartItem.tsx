// components/cart/CartItem.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/types/cart';
import { useCart } from '@/lib/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { part, quantity } = item;

  const handleIncrement = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(item.id, quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const subtotal = part.price * quantity;

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
      {/* Imagen del producto */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src={part.image}
          alt={part.name}
          fill
          className="object-cover rounded-lg"
          sizes="64px"
        />
      </div>

      {/* Información del producto */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-white truncate">
          {part.name}
        </h3>
        <p className="text-xs text-gray-400 truncate">
          {part.brand}
        </p>
        <p className="text-sm text-red-400 font-semibold">
          €{part.price.toFixed(2)}
        </p>
      </div>

      {/* Controles de cantidad */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrement}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          aria-label="Disminuir cantidad"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="w-8 text-center text-white font-medium">
          {quantity}
        </span>
        
        <button
          onClick={handleIncrement}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          aria-label="Aumentar cantidad"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-right">
        <p className="text-sm font-semibold text-white">
          €{subtotal.toFixed(2)}
        </p>
      </div>

      {/* Botón eliminar */}
      <button
        onClick={handleRemove}
        className="w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
        aria-label="Eliminar del carrito"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
