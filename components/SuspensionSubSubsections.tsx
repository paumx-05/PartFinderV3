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
}

export default function SuspensionSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory
}: SuspensionSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('steering-joint');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
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

  const breadcrumbs = [
    { label: 'Mantenimientos básicos', onClick: onBackToSubcategory },
    { label: 'Dirección' },
    { label: currentSubSubcategory?.name || '' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <SubSubsectionHeader 
        title={currentSubSubcategory?.name || ''}
        description={currentSubSubcategory?.description || ''}
        icon={currentSubSubcategory?.icon || 'Car'}
        breadcrumbs={breadcrumbs}
      />

      {/* Navigation */}
      <SubSubCategoriesNavigation
        subSubcategories={suspensionSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={setActiveSubSubcategory}
        vehicleData={vehicleData}
      />

      {/* Toolbar */}
      <PartsToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        resultsCount={filteredParts.length}
        cartItemsCount={cartItemsCount}
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
