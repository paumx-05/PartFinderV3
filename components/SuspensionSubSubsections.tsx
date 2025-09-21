// components/SuspensionSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import SuspensionFilters from './SuspensionFilters';
import { suspensionSubSubsections } from '@/lib/mocks/suspensionSubSubsections';

interface SuspensionSubSubsectionsProps {
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

export default function SuspensionSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory,
  onBackToCategory,
  onBackToHome
}: SuspensionSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('steering-joint');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');

  const currentSubSubcategory = suspensionSubSubsections.find(sub => sub.id === activeSubSubcategory);

  const filteredParts = currentSubSubcategory?.parts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = !typeFilter || 
      part.description.toLowerCase().includes(typeFilter.toLowerCase()) ||
      part.name.toLowerCase().includes(typeFilter.toLowerCase());
    
    const matchesMaterial = !materialFilter || 
      part.description.toLowerCase().includes(materialFilter.toLowerCase()) ||
      part.name.toLowerCase().includes(materialFilter.toLowerCase());

    return matchesSearch && matchesType && matchesMaterial;
  }) || [];

  if (!currentSubSubcategory) {
    return (
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 text-center">
        <p className="text-gray-400">No se encontró la subcategoría seleccionada.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <SubSubsectionHeader 
        categoryName="Mantenimientos básicos"
        subcategoryName="Dirección"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />

      {/* Navigation */}
      <SubSubCategoriesNavigation
        subsubcategories={suspensionSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={setActiveSubSubcategory}
      />

      {/* Toolbar */}
      <PartsToolbar
        category={{
          id: 'suspension',
          name: 'Dirección',
          description: 'Sistema de dirección',
          icon: 'Car',
          parts: [],
          subcategories: []
        }}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        partsCount={filteredParts.length}
        cartItemsCount={cartItemsCount}
        vehicleData={vehicleData}
      />

      {/* Filters */}
      <SuspensionFilters
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        materialFilter={materialFilter}
        onMaterialFilterChange={setMaterialFilter}
      />

      {/* Parts Display */}
      {filteredParts.length > 0 ? (
        viewMode === 'grid' ? (
          <PartsGrid parts={filteredParts} onAddToCart={onAddToCart} />
        ) : (
          <PartsList parts={filteredParts} onAddToCart={onAddToCart} />
        )
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            No se encontraron productos para los filtros seleccionados
          </div>
          <div className="text-gray-400 text-sm mt-2">
            Intenta ajustar los filtros o realizar una búsqueda diferente
          </div>
        </div>
      )}
    </div>
  );
}
