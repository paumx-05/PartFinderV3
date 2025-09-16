// components/PartsContentArea.tsx
'use client';
import React from 'react';
import { Category, ViewMode, Part } from '@/lib/types/parts';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import CategoriesSidebar from './CategoriesSidebar';
import MobileCategoriesSelector from './MobileCategoriesSelector';
import MaintenanceSubsections from './MaintenanceSubsections';
import MainFiltersSubsections from './MainFiltersSubsections';
import ClutchSubsections from './ClutchSubsections';
import BrakesSubSubsections from './BrakesSubSubsections';
import SteeringSubSubsections from './SteeringSubSubsections';
import CoolingSubSubsections from './CoolingSubSubsections';
import ExhaustSubSubsections from './ExhaustSubSubsections';
import BeltTransmissionSubSubsections from './BeltTransmissionSubSubsections';
import AxleTransmissionSubSubsections from './AxleTransmissionSubSubsections';
import SuspensionAxlesSubSubsections from './SuspensionAxlesSubSubsections';
import FuelSystemSubSubsections from './FuelSystemSubSubsections';
import AirSystemSubSubsections from './AirSystemSubSubsections';

interface PartsContentAreaProps {
  category: Category | undefined;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  vehicleData: {
    vin: string;
    brand: string;
    model: string;
    year: string;
  };
  onAddToCart?: (part: Part) => void;
  cartItemsCount?: number;
  categories?: Category[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  onBackToHome?: () => void;
}

export default function PartsContentArea({ 
  category, 
  viewMode, 
  onViewModeChange, 
  searchQuery, 
  onSearchQueryChange,
  vehicleData,
  onAddToCart,
  cartItemsCount = 0,
  categories,
  activeCategory,
  onCategoryChange,
  onBackToHome
}: PartsContentAreaProps) {
  if (!category) {
    return (
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-8 text-center">
        <p className="text-gray-400">Selecciona una categoría para ver los recambios disponibles</p>
      </div>
    );
  }

  // Special handling for maintenance category with subsections
  if (category.id === 'maintenance') {
    return (
      <MaintenanceSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToCategory={() => onCategoryChange?.('maintenance')}
        onBackToHome={onBackToHome}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for filters category with subsections
  if (category.id === 'filters') {
    return (
      <MainFiltersSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for clutch category with subsections
  if (category.id === 'clutch') {
    return (
      <ClutchSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for brakes category with subsections
  if (category.id === 'braking') {
    return (
      <BrakesSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for steering category with subsections
  if (category.id === 'steering') {
    return (
      <SteeringSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for cooling category with subsections
  if (category.id === 'cooling') {
    return (
      <CoolingSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for exhaust category with subsections
  if (category.id === 'exhaust') {
    return (
      <ExhaustSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for belt-transmission category with subsections
  if (category.id === 'belt-transmission') {
    return (
      <BeltTransmissionSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for axle-transmission category with subsections
  if (category.id === 'axle-transmission') {
    return (
      <AxleTransmissionSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for suspension-axles category with subsections
  if (category.id === 'suspension-axles') {
    return (
      <SuspensionAxlesSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for fuel-system category with subsections
  if (category.id === 'fuel-system') {
    return (
      <FuelSystemSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }

  // Special handling for air-system category with subsections
  if (category.id === 'air-system') {
    return (
      <AirSystemSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onCategoryChange={onCategoryChange}
      />
    );
  }


  const filteredParts = category.parts.filter(part =>
    part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    part.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Mobile Categories Selector */}
      {categories && activeCategory && onCategoryChange && (
        <div className="lg:hidden">
          <MobileCategoriesSelector
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      )}

      <PartsToolbar
        category={category}
        viewMode={viewMode}
        onViewModeChange={onViewModeChange}
        searchQuery={searchQuery}
        onSearchQueryChange={onSearchQueryChange}
        vehicleData={vehicleData}
        partsCount={filteredParts.length}
        cartItemsCount={cartItemsCount}
      />
      
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 sm:p-6 overflow-hidden">
        {viewMode === 'grid' ? (
          <PartsGrid parts={filteredParts} onAddToCart={onAddToCart} />
        ) : (
          <PartsList parts={filteredParts} onAddToCart={onAddToCart} />
        )}
      </div>
    </div>
  );
}
