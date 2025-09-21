// components/WaterPumpSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import WaterPumpFilters from './WaterPumpFilters';
import { waterPumpSubSubsections } from '@/lib/mocks/waterPumpSubSubsections';

interface WaterPumpSubSubsectionsProps {
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

export default function WaterPumpSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory
}: WaterPumpSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('water-pump-complete');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');

  const currentSubSubcategory = waterPumpSubSubsections.find(subsub => subsub.id === activeSubSubcategory);

  const filteredParts = currentSubSubcategory?.parts.filter(part => {
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
      {/* Header con breadcrumbs */}
      <SubSubsectionHeader
        categoryName="Refrigeración"
        subcategoryName="Bomba de agua"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
      />

      {/* Navegación de subsubcategorías */}
      <SubSubCategoriesNavigation
        subsubcategories={waterPumpSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={handleSubSubcategoryChange}
      />

      {/* Filtros específicos para bomba de agua */}
      <WaterPumpFilters
        onBrandFilter={setBrandFilter}
        onMaterialFilter={setMaterialFilter}
        onClearFilters={handleClearFilters}
        activeBrand={brandFilter}
        activeMaterial={materialFilter}
      />

      {/* Toolbar con búsqueda, vista y carrito */}
      <PartsToolbar
        category={{
          id: 'water-pump',
          name: 'Bomba de agua',
          icon: 'Droplets',
          description: 'Bombas de agua, kits de reparación, poleas, correas, juntas',
          parts: []
        }}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        vehicleData={vehicleData}
        partsCount={filteredParts.length}
        cartItemsCount={cartItemsCount}
      />

      {/* Contenido de productos */}
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
        {filteredParts.length > 0 ? (
          viewMode === 'grid' ? (
            <PartsGrid parts={filteredParts} onAddToCart={onAddToCart} />
          ) : (
            <PartsList parts={filteredParts} onAddToCart={onAddToCart} />
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-2">No se encontraron productos</p>
            <p className="text-gray-500 text-sm">
              {searchQuery || brandFilter || materialFilter
                ? 'Intenta ajustar los filtros de búsqueda'
                : 'No hay productos disponibles en esta categoría'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
