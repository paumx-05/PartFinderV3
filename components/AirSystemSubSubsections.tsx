// components/AirSystemSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import AirSystemFilters from './AirSystemFilters';
import SuperchargingSubSubsections from './SuperchargingSubSubsections';
import { airSystemSubSubsections } from '@/lib/mocks/airSystemSubSubsections';

interface AirSystemSubSubsectionsProps {
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

export default function AirSystemSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory
}: AirSystemSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('air-filter');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');

  const currentSubSubcategory = airSystemSubSubsections.find(subsub => subsub.id === activeSubSubcategory);

  const filteredParts = currentSubSubcategory?.parts.filter((part: any) => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBrand = !brandFilter ||
      part.brand.toLowerCase().includes(brandFilter.toLowerCase());

    const matchesMaterial = !materialFilter ||
      part.description.toLowerCase().includes(materialFilter.toLowerCase());

    return matchesSearch && matchesBrand && matchesMaterial;
  }) || [];

  const handleClearFilters = () => {
    setBrandFilter('');
    setMaterialFilter('');
  };

  const handleSubSubcategoryChange = (subsubcategoryId: string) => {
    setActiveSubSubcategory(subsubcategoryId);
  };

  // Si la subsección activa es 'supercharging', renderizar el componente específico
  if (activeSubSubcategory === 'supercharging') {
    return (
      <SuperchargingSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={() => setActiveSubSubcategory('air-filter')}
      />
    );
  }

  if (!currentSubSubcategory) {
    return (
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 text-center">
        <p className="text-gray-400">No se encontró la subcategoría seleccionada.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header con breadcrumbs */}
      <SubSubsectionHeader
        categoryName="Alimentación de aire"
        subcategoryName="Alimentación de aire"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
      />

      {/* Navegación de subsubcategorías */}
      <SubSubCategoriesNavigation
        subsubcategories={airSystemSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={handleSubSubcategoryChange}
      />

      {/* Filtros específicos para sistema de aire */}
      <AirSystemFilters
        onBrandFilter={setBrandFilter}
        onMaterialFilter={setMaterialFilter}
        onClearFilters={handleClearFilters}
        activeBrand={brandFilter}
        activeMaterial={materialFilter}
      />

      {/* Toolbar con búsqueda, vista y carrito */}
      <PartsToolbar
        category={{
          id: 'air-system',
          name: 'Alimentación de aire',
          icon: 'Wind',
          description: 'Filtros de aire, colectores, admisión y turbo',
          parts: []
        }}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        vehicleData={vehicleData}
        partsCount={filteredParts.length}
        cartItemsCount={cartItemsCount}
      />

      {/* Contenido de productos */}
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
        {filteredParts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <h3 className="text-lg font-medium mb-2">No se encontraron productos</h3>
              <p className="text-sm">
                Intenta ajustar los filtros o la búsqueda para encontrar más productos.
              </p>
            </div>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <PartsGrid parts={filteredParts} onAddToCart={onAddToCart} />
            ) : (
              <PartsList parts={filteredParts} onAddToCart={onAddToCart} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
