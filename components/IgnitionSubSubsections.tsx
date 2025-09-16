// components/IgnitionSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import IgnitionFilters from './IgnitionFilters';
import { ignitionSubSubsections } from '@/lib/mocks/ignitionSubSubsections';

interface IgnitionSubSubsectionsProps {
  vehicleData: {
    vin: string;
    brand: string;
    model: string;
    year: string;
  };
  onAddToCart?: (part: any) => void;
  cartItemsCount?: number;
  onBackToSubcategory?: () => void;
  onBackToCategory?: () => void;
  onBackToHome?: () => void;
}

export default function IgnitionSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory,
  onBackToCategory,
  onBackToHome
}: IgnitionSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('battery');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [technologyFilter, setTechnologyFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const currentSubSubcategory = ignitionSubSubsections.find(sub => sub.id === activeSubSubcategory);

  const filteredParts = currentSubSubcategory?.parts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTechnology = !technologyFilter || 
      part.description.toLowerCase().includes(technologyFilter.toLowerCase()) ||
      part.name.toLowerCase().includes(technologyFilter.toLowerCase());
    
    const matchesType = !typeFilter || 
      part.description.toLowerCase().includes(typeFilter.toLowerCase()) ||
      part.name.toLowerCase().includes(typeFilter.toLowerCase());
    
    return matchesSearch && matchesTechnology && matchesType;
  }) || [];

  const handleClearFilters = () => {
    setTechnologyFilter('');
    setTypeFilter('');
  };

  if (!currentSubSubcategory) {
    return (
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-8 text-center">
        <p className="text-gray-400">No se encontró la subsección seleccionada</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* SubSubsection Header with Breadcrumbs */}
      <SubSubsectionHeader
        categoryName="Mantenimientos básicos"
        subcategoryName="Sistema de Encendido"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />

      {/* SubSubcategories Navigation */}
      <SubSubCategoriesNavigation
        subsubcategories={ignitionSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={setActiveSubSubcategory}
      />

      {/* Ignition Specific Filters */}
      <IgnitionFilters
        onTechnologyFilter={setTechnologyFilter}
        onTypeFilter={setTypeFilter}
        onClearFilters={handleClearFilters}
        activeTechnology={technologyFilter}
        activeType={typeFilter}
      />

      {/* Toolbar */}
      <PartsToolbar
        category={{
          id: 'ignition',
          name: currentSubSubcategory.name,
          icon: 'Zap',
          description: currentSubSubcategory.description,
          parts: currentSubSubcategory.parts
        }}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        vehicleData={vehicleData}
        partsCount={filteredParts.length}
        cartItemsCount={cartItemsCount}
      />

      {/* Products Display */}
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
        {viewMode === 'grid' ? (
          <PartsGrid parts={filteredParts} onAddToCart={onAddToCart} />
        ) : (
          <PartsList parts={filteredParts} onAddToCart={onAddToCart} />
        )}
      </div>
    </div>
  );
}
