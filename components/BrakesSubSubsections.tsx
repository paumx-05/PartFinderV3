// components/BrakesSubSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubSubCategory, ViewMode } from '@/lib/types/parts';
import SubSubCategoriesNavigation from './SubSubCategoriesNavigation';
import SubSubsectionHeader from './SubSubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import BrakesFilters from './BrakesFilters';
import BrakeDiscSubSubsections from './BrakeDiscSubSubsections';
import BrakeDrumSubSubsections from './BrakeDrumSubSubsections';

interface BrakesSubSubsectionsProps {
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

// Datos temporales para las 6 subsecciones del sistema de frenado
const brakesSubSubsections: SubSubCategory[] = [
  {
    id: 'brake-disc',
    name: 'Freno de disco',
    description: 'Pastillas de freno de disco, discos de freno, sensores de desgaste, clips y muelles',
    icon: 'Disc',
    parts: [] // Se llenarán con datos mock cuando estén disponibles
  },
  {
    id: 'brake-drum',
    name: 'Freno de tambor',
    description: 'Zapatas de freno, tambores de freno, bombines, kits de reparación',
    icon: 'Circle',
    parts: []
  },
  {
    id: 'master-cylinder',
    name: 'Cilindro principal de freno',
    description: 'Cilindros maestros, bombas de freno, depósitos de líquido',
    icon: 'Zap',
    parts: []
  },
  {
    id: 'hand-brake',
    name: 'Freno de Mano',
    description: 'Cables de freno de mano, palancas, mecanismos de freno de estacionamiento',
    icon: 'ParkingCircle',
    parts: []
  },
  {
    id: 'brake-booster',
    name: 'Servofreno',
    description: 'Servofrenos de vacío, bombas de vacío, válvulas de vacío',
    icon: 'Wind',
    parts: []
  },
  {
    id: 'brake-lines',
    name: 'Latiguillos de Freno',
    description: 'Latiguillos flexibles, tubos rígidos, conexiones y abrazaderas',
    icon: 'Minus',
    parts: []
  }
];

export default function BrakesSubSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToSubcategory
}: BrakesSubSubsectionsProps) {
  const [activeSubSubcategory, setActiveSubSubcategory] = useState('brake-disc');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState('');
  const [showBrakeDiscSubsections, setShowBrakeDiscSubsections] = useState(false);
  const [showBrakeDrumSubsections, setShowBrakeDrumSubsections] = useState(false);

  const currentSubSubcategory = brakesSubSubsections.find(subsub => subsub.id === activeSubSubcategory);

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
    
    // Si se selecciona "Freno de disco", mostrar las subsecciones específicas
    if (subsubcategoryId === 'brake-disc') {
      setShowBrakeDiscSubsections(true);
      setShowBrakeDrumSubsections(false);
    } else if (subsubcategoryId === 'brake-drum') {
      setShowBrakeDrumSubsections(true);
      setShowBrakeDiscSubsections(false);
    } else {
      setShowBrakeDiscSubsections(false);
      setShowBrakeDrumSubsections(false);
    }
  };

  const handleBackToBrakeDisc = () => {
    setShowBrakeDiscSubsections(false);
  };

  const handleBackToBrakeDrum = () => {
    setShowBrakeDrumSubsections(false);
  };

  // Si se muestran las subsecciones de freno de disco, renderizar ese componente
  if (showBrakeDiscSubsections) {
    return (
      <BrakeDiscSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToBrakeDisc}
      />
    );
  }

  // Si se muestran las subsecciones de freno de tambor, renderizar ese componente
  if (showBrakeDrumSubsections) {
    return (
      <BrakeDrumSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToBrakeDrum}
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
        categoryName="Sistema de Frenado"
        subcategoryName="Sistema de Frenado"
        subsubcategory={currentSubSubcategory}
        onBackToSubcategory={onBackToSubcategory}
      />

      {/* Navegación de subsubcategorías */}
      <SubSubCategoriesNavigation
        subsubcategories={brakesSubSubsections}
        activeSubSubcategory={activeSubSubcategory}
        onSubSubcategoryChange={handleSubSubcategoryChange}
      />

      {/* Filtros específicos para sistema de frenado */}
      <BrakesFilters
        onBrandFilter={setBrandFilter}
        onMaterialFilter={setMaterialFilter}
        onClearFilters={handleClearFilters}
        activeBrand={brandFilter}
        activeMaterial={materialFilter}
      />

      {/* Toolbar con búsqueda, vista y carrito */}
      <PartsToolbar
        category={{
          id: 'braking',
          name: 'Sistema de Frenado',
          icon: 'CircleStop',
          description: 'Freno de disco, tambor, cilindro principal, freno de mano, servofreno y latiguillos',
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
                : 'Los datos mock aún no están disponibles para esta subsección'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}