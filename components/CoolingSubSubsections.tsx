// components/CoolingSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import CoolingFilters from './CoolingFilters';
import OilRadiatorSubSubsections from './OilRadiatorSubSubsections';
import WaterPumpSubSubsections from './WaterPumpSubSubsections';
import ThermostatSubSubsections from './ThermostatSubSubsections';
import PipesClampsSubSubsections from './PipesClampsSubSubsections';
import { coolingSubSubsections } from '@/lib/mocks/coolingSubSubsections';

interface CoolingSubSubsectionsProps {
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

export default function CoolingSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory
}: CoolingSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('water-pump');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');
  const [showOilRadiatorSubsections, setShowOilRadiatorSubsections] = useState(false);
  const [showWaterPumpSubsections, setShowWaterPumpSubsections] = useState(false);
  const [showThermostatSubsections, setShowThermostatSubsections] = useState(false);
  const [showPipesClampsSubsections, setShowPipesClampsSubsections] = useState(false);

  const currentSubSubcategory = coolingSubSubsections.find(subsub => subsub.id === activeSubSubcategory);

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

    // Si se selecciona "Radiador de Aceite", mostrar las subsecciones específicas
    if (subsubcategoryId === 'oil-radiator') {
      setShowOilRadiatorSubsections(true);
      setShowWaterPumpSubsections(false);
      setShowThermostatSubsections(false);
      setShowPipesClampsSubsections(false);
    } else if (subsubcategoryId === 'water-pump') {
      setShowWaterPumpSubsections(true);
      setShowOilRadiatorSubsections(false);
      setShowThermostatSubsections(false);
      setShowPipesClampsSubsections(false);
    } else if (subsubcategoryId === 'thermostat') {
      setShowThermostatSubsections(true);
      setShowOilRadiatorSubsections(false);
      setShowWaterPumpSubsections(false);
      setShowPipesClampsSubsections(false);
    } else if (subsubcategoryId === 'pipes-clamps') {
      setShowPipesClampsSubsections(true);
      setShowOilRadiatorSubsections(false);
      setShowWaterPumpSubsections(false);
      setShowThermostatSubsections(false);
    } else {
      setShowOilRadiatorSubsections(false);
      setShowWaterPumpSubsections(false);
      setShowThermostatSubsections(false);
      setShowPipesClampsSubsections(false);
    }
  };

  const handleBackToOilRadiator = () => {
    setShowOilRadiatorSubsections(false);
  };

  const handleBackToWaterPump = () => {
    setShowWaterPumpSubsections(false);
  };

  const handleBackToThermostat = () => {
    setShowThermostatSubsections(false);
  };

  const handleBackToPipesClamps = () => {
    setShowPipesClampsSubsections(false);
  };

  // Si se muestran las subsecciones de radiador de aceite, renderizar ese componente
  if (showOilRadiatorSubsections) {
    return (
      <OilRadiatorSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToOilRadiator}
      />
    );
  }

  // Si se muestran las subsecciones de bomba de agua, renderizar ese componente
  if (showWaterPumpSubsections) {
    return (
      <WaterPumpSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToWaterPump}
      />
    );
  }

  // Si se muestran las subsecciones de termostato, renderizar ese componente
  if (showThermostatSubsections) {
    return (
      <ThermostatSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToThermostat}
      />
    );
  }

  // Si se muestran las subsecciones de tubería y sujección, renderizar ese componente
  if (showPipesClampsSubsections) {
    return (
      <PipesClampsSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToPipesClamps}
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
        categoryName="Refrigeración"
        subcategoryName="Refrigeración"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
      />

      {/* Navegación de subsubcategorías */}
      <SubSubCategoriesNavigation
        subsubcategories={coolingSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={handleSubSubcategoryChange}
      />

      {/* Filtros específicos para refrigeración */}
      <CoolingFilters
        onBrandFilter={setBrandFilter}
        onMaterialFilter={setMaterialFilter}
        onClearFilters={handleClearFilters}
        activeBrand={brandFilter}
        activeMaterial={materialFilter}
      />

      {/* Toolbar con búsqueda, vista y carrito */}
      <PartsToolbar
        category={{
          id: 'cooling',
          name: 'Refrigeración',
          icon: 'Thermometer',
          description: 'Bombas de agua, radiadores, ventiladores, termostatos, tuberías',
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
