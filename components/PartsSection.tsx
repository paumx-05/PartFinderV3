// components/PartsSection.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CategoriesSidebar from './CategoriesSidebar';
import PartsContentArea from './PartsContentArea';
import { categories } from '@/lib/mocks/parts';
import { ViewMode, Part } from '@/lib/types/parts';
import { useCart } from '@/lib/contexts/CartContext';

interface PartsSectionProps {
  vehicleData: {
    vin: string;
    brand: string;
    model: string;
    year: string;
  };
}

export default function PartsSection({ vehicleData }: PartsSectionProps) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('maintenance');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const { state, addItem } = useCart();

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  const handleAddToCart = (part: Part) => {
    addItem(part);
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Sidebar - Hidden on mobile, shown on desktop with independent scroll */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-20 sm:top-8">
              <div className="max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 scrollbar-dark">
                <CategoriesSidebar
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>
            </div>
          </div>
          
          {/* Content Area - scrolls with page, optimized for mobile */}
          <div className="lg:col-span-3">
            <div className="space-y-4 sm:space-y-6">
              <PartsContentArea
                category={currentCategory}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                vehicleData={vehicleData}
                onAddToCart={handleAddToCart}
                cartItemsCount={state.totalItems}
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onBackToHome={handleBackToHome}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
