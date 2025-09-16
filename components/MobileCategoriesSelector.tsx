// components/MobileCategoriesSelector.tsx
'use client';
import React from 'react';
import { Category } from '@/lib/types/parts';
import { 
  Wrench, 
  CircleStop, 
  Navigation, 
  Settings, 
  Filter, 
  Thermometer, 
  Wind, 
  Zap, 
  Cog,
  Fuel,
  Droplets,
  Gauge
} from 'lucide-react';

interface MobileCategoriesSelectorProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const iconMap = {
  Wrench,
  CircleStop,
  Navigation,
  Settings,
  Filter,
  Thermometer,
  Wind,
  Zap,
  Cog,
  Fuel,
  Droplets,
  Gauge,
};

export default function MobileCategoriesSelector({ categories, activeCategory, onCategoryChange }: MobileCategoriesSelectorProps) {
  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-3 border-l-4 border-red-600">
      <h3 className="text-sm font-bold text-red-600 mb-3">Categorías</h3>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 text-center ${
                isActive
                  ? 'bg-red-600 bg-opacity-20 border border-red-600 text-red-400'
                  : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <div className="text-xs font-medium leading-tight">
                {category.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
