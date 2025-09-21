// components/SteeringSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import SteeringFilters from './SteeringFilters';
import { steeringSubSubsections } from '@/lib/mocks/steeringSubSubsections';
import CategoriesSidebar from './CategoriesSidebar';
import { categories } from '@/lib/mocks/parts';

interface SteeringSubSubsectionsProps {
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
  onCategoryChange?: (categoryId: string) => void;
}

export default function SteeringSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory,
  onBackToCategory,
  onBackToHome,
  onCategoryChange
}: SteeringSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('steering-ball-joints');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');

  const currentSubSubcategory = steeringSubSubsections.find(subsub => subsub.id === activeSubSubcategory);

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
      {/* Mobile Categories Selector - Show general categories for navigation */}
      {onCategoryChange && (
        <div className="lg:hidden">
          <CategoriesSidebar
            categories={categories}
            activeCategory="steering"
            onCategoryChange={onCategoryChange}
          />
        </div>
      )}

      {/* Header con breadcrumbs */}
      <SubSubsectionHeader
        categoryName="Dirección"
        subcategoryName="Dirección"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />

      {/* Navegación de subsubcategorías */}
      <SubSubCategoriesNavigation
        subsubcategories={steeringSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={handleSubSubcategoryChange}
      />

      {/* Filtros específicos para dirección */}
      <SteeringFilters
        onBrandFilter={setBrandFilter}
        onMaterialFilter={setMaterialFilter}
        onClearFilters={handleClearFilters}
        activeBrand={brandFilter}
        activeMaterial={materialFilter}
      />

      {/* Toolbar con búsqueda, vista y carrito */}
      <PartsToolbar
        category={{
          id: 'steering',
          name: 'Dirección',
          icon: 'Navigation',
          description: 'Rótulas, columnas, cremalleras, bombas, fuelles y volantes',
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