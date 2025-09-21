// components/FuelSystemSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import FuelSystemFilters from './FuelSystemFilters';
import { fuelSystemSubSubsections } from '@/lib/mocks/fuelSystemSubSubsections';
import CategoriesSidebar from './CategoriesSidebar';
import { categories } from '@/lib/mocks/parts';

interface FuelSystemSubSubsectionsProps {
  vehicleData: {
    vin: string;
    brand: string;
    model: string;
    year: string;
  };
  onAddToCart?: (part: any) => void;
  cartItemsCount?: number;
  onBackToSubcategory?: () => void;
  onCategoryChange?: (categoryId: string) => void;
}

export default function FuelSystemSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory,
  onCategoryChange
}: FuelSystemSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('fuel-filter');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');

  const currentSubSubcategory = fuelSystemSubSubsections.find(subsub => subsub.id === activeSubSubcategory);

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

  if (!currentSubSubcategory) {
    return (
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 text-center">
        <p className="text-gray-400">No se encontró la subcategoría seleccionada.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Mobile Categories Selector - Show general categories for navigation */}
      {onCategoryChange && (
        <div className="lg:hidden">
          <CategoriesSidebar
            categories={categories}
            activeCategory="fuel-system"
            onCategoryChange={onCategoryChange}
          />
        </div>
      )}

      {/* Header con breadcrumbs */}
      <SubSubsectionHeader
        categoryName="Alimentación de combustible"
        subcategoryName="Alimentación de combustible"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
      />

      {/* Navegación de subsubcategorías */}
      <SubSubCategoriesNavigation
        subsubcategories={fuelSystemSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={handleSubSubcategoryChange}
      />

      {/* Filtros específicos para sistema de combustible */}
      <FuelSystemFilters
        onBrandFilter={setBrandFilter}
        onMaterialFilter={setMaterialFilter}
        onClearFilters={handleClearFilters}
        activeBrand={brandFilter}
        activeMaterial={materialFilter}
      />

      {/* Toolbar con búsqueda, vista y carrito */}
      <PartsToolbar
        category={{
          id: 'fuel-system',
          name: 'Alimentación de combustible',
          icon: 'Fuel',
          description: 'Bomba de combustible, inyectores, filtros y reguladores',
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
