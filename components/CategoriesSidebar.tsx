// components/CategoriesSidebar.tsx
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

interface CategoriesSidebarProps {
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

export default function CategoriesSidebar({ categories, activeCategory, onCategoryChange }: CategoriesSidebarProps) {
  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-lg p-3 sm:p-4 border-l-4 border-red-600">
      <h3 className="text-base sm:text-lg font-bold text-red-600 mb-3 sm:mb-4">Categorías de Recambios</h3>
      <nav className="space-y-1 sm:space-y-2">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg transition-all duration-200 text-left ${
                isActive
                  ? 'bg-red-600 bg-opacity-20 border-l-4 border-red-600 text-red-400'
                  : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="font-medium text-xs sm:text-sm truncate">{category.name}</div>
                <div className="text-xs text-gray-400 truncate leading-tight mt-0.5 sm:mt-1 max-w-full">
                  {category.description}
                </div>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
