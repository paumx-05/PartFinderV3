// components/ClutchSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import ClutchFilters from './ClutchFilters';
import ClutchActuationSubSubsections from './ClutchActuationSubSubsections';
import { clutchSubSubsections } from '@/lib/mocks/clutchSubSubsections';

interface ClutchSubsectionsProps {
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

export default function ClutchSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory
}: ClutchSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('clutch-kit');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showActuationSubsections, setShowActuationSubsections] = useState(false);

  const currentSubSubcategory = clutchSubSubsections.find(subsub => subsub.id === activeSubSubcategory);

  const filteredParts = currentSubSubcategory?.parts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBrand = !brandFilter ||
      part.brand.toLowerCase().includes(brandFilter.toLowerCase());

    const matchesType = !typeFilter ||
      part.description.toLowerCase().includes(typeFilter.toLowerCase());

    return matchesSearch && matchesBrand && matchesType;
  }) || [];

  const handleClearFilters = () => {
    setBrandFilter('');
    setTypeFilter('');
  };

  const handleSubSubcategoryChange = (subsubcategoryId: string) => {
    setActiveSubSubcategory(subsubcategoryId);
    
    // Si se selecciona "Accionamiento del Embrague", mostrar las subsecciones específicas
    if (subsubcategoryId === 'clutch-actuation') {
      setShowActuationSubsections(true);
    } else {
      setShowActuationSubsections(false);
    }
  };

  const handleBackToActuation = () => {
    setShowActuationSubsections(false);
  };

  // Si se muestran las subsecciones de accionamiento, renderizar ese componente
  if (showActuationSubsections) {
    return (
      <ClutchActuationSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToActuation}
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
        categoryName="Embrague"
        subcategoryName="Embrague"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
      />

      {/* Navegación de subsubcategorías */}
      <SubSubCategoriesNavigation
        subsubcategories={clutchSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={handleSubSubcategoryChange}
      />

      {/* Filtros específicos para embrague */}
      <ClutchFilters
        onBrandFilter={setBrandFilter}
        onTypeFilter={setTypeFilter}
        onClearFilters={handleClearFilters}
        activeBrand={brandFilter}
        activeType={typeFilter}
      />

      {/* Toolbar con búsqueda, vista y carrito */}
      <PartsToolbar
        category={{
          id: 'clutch',
          name: 'Embrague',
          icon: 'CircleStop',
          description: 'Kit de embrague, cojinete, accionamiento y volante motor',
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
              {searchQuery || brandFilter || typeFilter
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
