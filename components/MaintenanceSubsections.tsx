// components/MaintenanceSubsections.tsx
'use client';
import React, { useState } from 'react';
import { SubCategory, ViewMode, Part } from '@/lib/types/parts';
import { SubCategoriesNavigation } from './SubCategoriesNavigation';
import { SubsectionHeader } from './SubsectionHeader';
import PartsToolbar from './PartsToolbar';
import PartsGrid from './PartsGrid';
import PartsList from './PartsList';
import OilsSubSubsections from './OilsSubSubsections';
import FiltrosSubSubsections from './FiltrosSubSubsections';
import BrakesSubSubsections from './BrakesSubSubsections';
import IgnitionSubSubsections from './IgnitionSubSubsections';
import SuspensionSubSubsections from './SuspensionSubSubsections';
import SteeringSubSubsections from './SteeringSubSubsections';
import BeltSubSubsections from './BeltSubSubsections';
import WipersSubSubsections from './WipersSubSubsections';
import { maintenanceSubsections } from '@/lib/mocks/maintenanceSubsections';
import { oilsSubSubsections } from '@/lib/mocks/oilsSubSubsections';
import { filtersSubSubsections } from '@/lib/mocks/filtersSubSubsections';
import { brakesSubSubsections } from '@/lib/mocks/brakesSubSubsections';
import { ignitionSubSubsections } from '@/lib/mocks/ignitionSubSubsections';
import { suspensionSubSubsections } from '@/lib/mocks/suspensionSubSubsections';
import { steeringSubSubsections } from '@/lib/mocks/steeringSubSubsections';
import { beltSubSubsections } from '@/lib/mocks/beltSubSubsections';
import { wipersSubSubsections } from '@/lib/mocks/wipersSubSubsections';
import CategoriesSidebar from './CategoriesSidebar';
import { categories } from '@/lib/mocks/parts';

interface MaintenanceSubsectionsProps {
  vehicleData: {
    vin: string;
    brand: string;
    model: string;
    year: string;
  };
  onAddToCart?: (part: any) => void;
  cartItemsCount?: number;
  onBackToCategory?: () => void;
  onBackToHome?: () => void;
  onCategoryChange?: (categoryId: string) => void;
}

export default function MaintenanceSubsections({ 
  vehicleData, 
  onAddToCart, 
  cartItemsCount = 0,
  onBackToCategory,
  onBackToHome,
  onCategoryChange
}: MaintenanceSubsectionsProps) {
  const [activeSubcategory, setActiveSubcategory] = useState('oils');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSubSubsections, setShowSubSubsections] = useState(false);
  const [activeOilType, setActiveOilType] = useState('engine-oil');
  const [activeFilterType, setActiveFilterType] = useState('oil-filter');
  const [activeBrakeType, setActiveBrakeType] = useState('disc-brake');
  const [activeIgnitionType, setActiveIgnitionType] = useState('battery');
  const [activeSuspensionType, setActiveSuspensionType] = useState('steering-joint');
  const [activeSteeringType, setActiveSteeringType] = useState('suspension-joints');
  const [activeBeltType, setActiveBeltType] = useState('belts');
  const [activeWipersType, setActiveWipersType] = useState('washer-fluids');

  const currentSubcategory = maintenanceSubsections.find(sub => sub.id === activeSubcategory);

  // Filter parts based on search query and type if in oils or filters subcategory
  let filteredParts: Part[] = [];
  
  if (activeSubcategory === 'oils' && !showSubSubsections) {
    // For oils subcategory, get products from the selected oil type
    const oilType = oilsSubSubsections.find(type => type.id === activeOilType);
    if (oilType) {
      filteredParts = oilType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else if (activeSubcategory === 'filters' && !showSubSubsections) {
    // For filters subcategory, get products from the selected filter type
    const filterType = filtersSubSubsections.find(type => type.id === activeFilterType);
    if (filterType) {
      filteredParts = filterType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else if (activeSubcategory === 'brakes' && !showSubSubsections) {
    // For brakes subcategory, get products from the selected brake type
    const brakeType = brakesSubSubsections.find(type => type.id === activeBrakeType);
    if (brakeType) {
      filteredParts = brakeType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else if (activeSubcategory === 'ignition' && !showSubSubsections) {
    // For ignition subcategory, get products from the selected ignition type
    const ignitionType = ignitionSubSubsections.find(type => type.id === activeIgnitionType);
    if (ignitionType) {
      filteredParts = ignitionType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else if (activeSubcategory === 'suspension' && !showSubSubsections) {
    // For suspension subcategory, get products from the selected suspension type
    const suspensionType = suspensionSubSubsections.find(type => type.id === activeSuspensionType);
    if (suspensionType) {
      filteredParts = suspensionType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else if (activeSubcategory === 'steering' && !showSubSubsections) {
    // For steering subcategory, get products from the selected steering type
    const steeringType = steeringSubSubsections.find(type => type.id === activeSteeringType);
    if (steeringType) {
      filteredParts = steeringType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else if (activeSubcategory === 'belts' && !showSubSubsections) {
    // For belts subcategory, get products from the selected belt type
    const beltType = beltSubSubsections.find(type => type.id === activeBeltType);
    if (beltType) {
      filteredParts = beltType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else if (activeSubcategory === 'wipers' && !showSubSubsections) {
    // For wipers subcategory, get products from the selected wipers type
    const wipersType = wipersSubSubsections.find(type => type.id === activeWipersType);
    if (wipersType) {
      filteredParts = wipersType.parts.filter(part => {
        return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          part.description.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
  } else {
    // For other subcategories, use the normal filtering
    filteredParts = currentSubcategory?.parts.filter(part => {
      return part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.description.toLowerCase().includes(searchQuery.toLowerCase());
    }) || [];
  }

  const handleBackToCategory = () => {
    // This would navigate back to the main category view
    // For now, we'll just reset the subcategory
    setActiveSubcategory('oils');
  };

  const handleBackToSubcategory = () => {
    // Reset to show the main subcategories view
    setShowSubSubsections(false);
  };

  const handleEnterSubSubsections = () => {
    // Show subsubsections for the current subcategory
    setShowSubSubsections(true);
  };

  if (!currentSubcategory) {
    return (
      <div className="bg-gray-800 bg-opacity-70 rounded-lg p-8 text-center">
        <p className="text-gray-400">No se encontró la subsección seleccionada</p>
      </div>
    );
  }

  // Special handling for oils subcategory with subsubsections
  if (activeSubcategory === 'oils' && showSubSubsections) {
    return (
      <OilsSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Special handling for filters subcategory with subsubsections
  if (activeSubcategory === 'filters' && showSubSubsections) {
    return (
      <FiltrosSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Special handling for brakes subcategory with subsubsections
  if (activeSubcategory === 'brakes' && showSubSubsections) {
    return (
      <BrakesSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Special handling for ignition subcategory with subsubsections
  if (activeSubcategory === 'ignition' && showSubSubsections) {
    return (
      <IgnitionSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Special handling for suspension subcategory with subsubsections
  if (activeSubcategory === 'suspension' && showSubSubsections) {
    return (
      <SuspensionSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Special handling for steering subcategory with subsubsections
  if (activeSubcategory === 'steering' && showSubSubsections) {
    return (
      <SteeringSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Special handling for belts subcategory with subsubsections
  if (activeSubcategory === 'belts' && showSubSubsections) {
    return (
      <BeltSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  // Special handling for wipers subcategory with subsubsections
  if (activeSubcategory === 'wipers' && showSubSubsections) {
    return (
      <WipersSubSubsections
        vehicleData={vehicleData}
        onAddToCart={onAddToCart}
        cartItemsCount={cartItemsCount}
        onBackToSubcategory={handleBackToSubcategory}
        onBackToCategory={onBackToCategory}
        onBackToHome={onBackToHome}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Mobile Categories Selector - Show general categories for navigation */}
      {onCategoryChange && (
        <div className="lg:hidden">
          <CategoriesSidebar
            categories={categories}
            activeCategory="maintenance"
            onCategoryChange={onCategoryChange}
          />
        </div>
      )}

      {/* Subsection Header with Breadcrumbs */}
      <SubsectionHeader
        categoryName="Mantenimientos básicos"
        subcategory={currentSubcategory}
        onBackToCategory={handleBackToCategory}
      />

      {/* Subcategories Navigation */}
      <SubCategoriesNavigation
        subcategories={maintenanceSubsections}
        activeSubcategory={activeSubcategory}
        onSubcategoryChange={setActiveSubcategory}
      />

      {/* Toolbar */}
      <PartsToolbar
        category={{
          id: 'maintenance',
          name: currentSubcategory.name,
          icon: 'Wrench',
          description: currentSubcategory.description,
          parts: currentSubcategory.parts
        }}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        vehicleData={vehicleData}
        partsCount={filteredParts.length}
        cartItemsCount={cartItemsCount}
      />

      {/* Oil Types Navigation for oils subcategory */}
      {activeSubcategory === 'oils' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Aceites</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {oilsSubSubsections.map((oilType) => {
                const isActive = activeOilType === oilType.id;
                
                return (
                  <button
                    key={oilType.id}
                    onClick={() => setActiveOilType(oilType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={oilType.description}
                  >
                    <span className="font-medium">{oilType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {oilType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {oilsSubSubsections.map((oilType) => {
              const isActive = activeOilType === oilType.id;
              
              return (
                <button
                  key={oilType.id}
                  onClick={() => setActiveOilType(oilType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-red-600 bg-opacity-20 border-l-4 border-red-600 text-red-400'
                      : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{oilType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{oilType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {oilType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter Types Navigation for filters subcategory */}
      {activeSubcategory === 'filters' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Filtros</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {filtersSubSubsections.map((filterType) => {
                const isActive = activeFilterType === filterType.id;
                
                return (
                  <button
                    key={filterType.id}
                    onClick={() => setActiveFilterType(filterType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={filterType.description}
                  >
                    <span className="font-medium">{filterType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {filterType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {filtersSubSubsections.map((filterType) => {
              const isActive = activeFilterType === filterType.id;
              
              return (
                <button
                  key={filterType.id}
                  onClick={() => setActiveFilterType(filterType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-red-600 bg-opacity-20 border-l-4 border-red-600 text-red-400'
                      : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{filterType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{filterType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {filterType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Brake Types Navigation for brakes subcategory */}
      {activeSubcategory === 'brakes' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Frenos</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {brakesSubSubsections.map((brakeType) => {
                const isActive = activeBrakeType === brakeType.id;
                
                return (
                  <button
                    key={brakeType.id}
                    onClick={() => setActiveBrakeType(brakeType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={brakeType.description}
                  >
                    <span className="font-medium">{brakeType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {brakeType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {brakesSubSubsections.map((brakeType) => {
              const isActive = activeBrakeType === brakeType.id;
              
              return (
                <button
                  key={brakeType.id}
                  onClick={() => setActiveBrakeType(brakeType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-red-600 bg-opacity-20 border-l-4 border-red-600 text-red-400'
                      : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{brakeType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{brakeType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {brakeType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Ignition Types Navigation for ignition subcategory */}
      {activeSubcategory === 'ignition' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Encendido</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {ignitionSubSubsections.map((ignitionType) => {
                const isActive = activeIgnitionType === ignitionType.id;
                
                return (
                  <button
                    key={ignitionType.id}
                    onClick={() => setActiveIgnitionType(ignitionType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={ignitionType.description}
                  >
                    <span className="font-medium">{ignitionType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {ignitionType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {ignitionSubSubsections.map((ignitionType) => {
              const isActive = activeIgnitionType === ignitionType.id;
              
              return (
                <button
                  key={ignitionType.id}
                  onClick={() => setActiveIgnitionType(ignitionType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-red-600 bg-opacity-20 border-l-4 border-red-600 text-red-400'
                      : 'hover:bg-gray-700 hover:bg-opacity-50 text-gray-200 hover:text-white'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{ignitionType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{ignitionType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {ignitionType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Suspension Types Navigation for suspension subcategory */}
      {activeSubcategory === 'suspension' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Rótulas</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {suspensionSubSubsections.map((suspensionType) => {
                const isActive = activeSuspensionType === suspensionType.id;
                
                return (
                  <button
                    key={suspensionType.id}
                    onClick={() => setActiveSuspensionType(suspensionType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={suspensionType.description}
                  >
                    <span className="font-medium">{suspensionType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {suspensionType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {suspensionSubSubsections.map((suspensionType) => {
              const isActive = activeSuspensionType === suspensionType.id;
              
              return (
                <button
                  key={suspensionType.id}
                  onClick={() => setActiveSuspensionType(suspensionType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                  title={suspensionType.description}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{suspensionType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{suspensionType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {suspensionType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Steering Types Navigation for steering subcategory */}
      {activeSubcategory === 'steering' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Suspensión</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {steeringSubSubsections.map((steeringType) => {
                const isActive = activeSteeringType === steeringType.id;
                
                return (
                  <button
                    key={steeringType.id}
                    onClick={() => setActiveSteeringType(steeringType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={steeringType.description}
                  >
                    <span className="font-medium">{steeringType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {steeringType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {steeringSubSubsections.map((steeringType) => {
              const isActive = activeSteeringType === steeringType.id;
              
              return (
                <button
                  key={steeringType.id}
                  onClick={() => setActiveSteeringType(steeringType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                  title={steeringType.description}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{steeringType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{steeringType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {steeringType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Belt Types Navigation for belts subcategory */}
      {activeSubcategory === 'belts' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Correa Poli V</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {beltSubSubsections.map((beltType) => {
                const isActive = activeBeltType === beltType.id;
                
                return (
                  <button
                    key={beltType.id}
                    onClick={() => setActiveBeltType(beltType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={beltType.description}
                  >
                    <span className="font-medium">{beltType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {beltType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {beltSubSubsections.map((beltType) => {
              const isActive = activeBeltType === beltType.id;
              
              return (
                <button
                  key={beltType.id}
                  onClick={() => setActiveBeltType(beltType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                  title={beltType.description}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{beltType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{beltType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {beltType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Wipers Types Navigation for wipers subcategory */}
      {activeSubcategory === 'wipers' && !showSubSubsections && (
        <div className="bg-gray-800 bg-opacity-70 rounded-lg p-4 border-l-4 border-red-600">
          <h4 className="text-lg font-bold text-red-600 mb-4">Tipos de Limpia Parabrisas</h4>
          
          {/* Desktop Navigation - Horizontal Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2">
              {wipersSubSubsections.map((wipersType) => {
                const isActive = activeWipersType === wipersType.id;
                
                return (
                  <button
                    key={wipersType.id}
                    onClick={() => setActiveWipersType(wipersType.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      isActive
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                    title={wipersType.description}
                  >
                    <span className="font-medium">{wipersType.name}</span>
                    <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {wipersType.parts.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation - Vertical List */}
          <div className="md:hidden space-y-2">
            {wipersSubSubsections.map((wipersType) => {
              const isActive = activeWipersType === wipersType.id;
              
              return (
                <button
                  key={wipersType.id}
                  onClick={() => setActiveWipersType(wipersType.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                  title={wipersType.description}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{wipersType.name}</div>
                    <div className="text-xs text-gray-400 truncate">{wipersType.description}</div>
                  </div>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">
                    {wipersType.parts.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

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
