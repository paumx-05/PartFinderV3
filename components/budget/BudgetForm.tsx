// components/budget/BudgetForm.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { User, Car, Hash, Search, Plus, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Budget } from '@/lib/types/budget';
import { useClientes } from '@/lib/contexts/ClientesContext';
import { Cliente } from '@/lib/types/clients';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BudgetFormProps {
  budget: Budget | null;
  onClientInfoChange: (clientName: string, licensePlate: string, orderNumber?: string, numeroCliente?: string) => void;
  onAbrirGestionClientes?: () => void;
  onAbrirNuevoCliente?: () => void;
}

export function BudgetForm({ budget, onClientInfoChange, onAbrirGestionClientes, onAbrirNuevoCliente }: BudgetFormProps) {
  const { buscarCliente, buscarClientes } = useClientes();
  const [clientName, setClientName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [numeroCliente, setNumeroCliente] = useState('');
  const [clienteSeleccionado, setClienteSeleccionado] = useState<Cliente | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isClientePanelCollapsed, setIsClientePanelCollapsed] = useState(false);
  const [isDatosPresupuestoCollapsed, setIsDatosPresupuestoCollapsed] = useState(false);

  // Cargar datos existentes cuando el presupuesto cambie
  useEffect(() => {
    if (budget) {
      setClientName(budget.clientName || '');
      setLicensePlate(budget.licensePlate || '');
      setOrderNumber(budget.orderNumber || '');
      setNumeroCliente(budget.numeroCliente || '');
      
      // Si hay número de cliente, buscar y cargar los datos del cliente
      if (budget.numeroCliente) {
        const cliente = buscarCliente(budget.numeroCliente);
        if (cliente) {
          setClienteSeleccionado(cliente);
        }
      }
    }
  }, [budget?.id, buscarCliente]); // Solo cuando cambie el ID del presupuesto

  // Buscar clientes cuando cambie la query
  const clientesEncontrados = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    return buscarClientes(searchQuery).slice(0, 5); // Limitar a 5 resultados
  }, [searchQuery, buscarClientes]);

  // Actualizar información del cliente cuando cambien los campos
  const handleFieldChange = React.useCallback((field: string, value: string) => {
    switch (field) {
      case 'clientName':
        setClientName(value);
        break;
      case 'licensePlate':
        setLicensePlate(value);
        break;
      case 'orderNumber':
        setOrderNumber(value);
        break;
      case 'numeroCliente':
        setNumeroCliente(value);
        break;
    }
    
    // Llamar al callback inmediatamente para evitar bucles infinitos
    onClientInfoChange(
      field === 'clientName' ? value : clientName,
      field === 'licensePlate' ? value : licensePlate,
      field === 'orderNumber' ? value : orderNumber,
      field === 'numeroCliente' ? value : numeroCliente
    );
  }, [clientName, licensePlate, orderNumber, numeroCliente, onClientInfoChange]);

  // Manejar búsqueda de cliente
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value.length > 0);
  };

  // Seleccionar cliente de los resultados
  const handleClienteSeleccionado = (cliente: Cliente) => {
    setClienteSeleccionado(cliente);
    setClientName(cliente.nombre);
    setLicensePlate(''); // Limpiar matrícula para que el usuario la introduzca
    setNumeroCliente(cliente.numeroCliente);
    setSearchQuery('');
    setShowSearchResults(false);
    
    // Actualizar el presupuesto
    onClientInfoChange(cliente.nombre, '', orderNumber, cliente.numeroCliente);
  };

  // Limpiar selección de cliente
  const handleLimpiarCliente = () => {
    setClienteSeleccionado(null);
    setNumeroCliente('');
    setSearchQuery('');
    setShowSearchResults(false);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Sección de datos del presupuesto - Plegable */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        {/* Header plegable */}
        <div 
          className="flex items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-gray-750 transition-colors"
          onClick={() => setIsDatosPresupuestoCollapsed(!isDatosPresupuestoCollapsed)}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Car className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Datos del Presupuesto
            </h3>
          </div>
          {isDatosPresupuestoCollapsed ? (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          ) : (
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          )}
        </div>
        
        {/* Contenido desplegable */}
        {!isDatosPresupuestoCollapsed && (
          <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-gray-700 pt-3 sm:pt-4 space-y-3 sm:space-y-4">

            {/* Búsqueda rápida de cliente */}
            <div className="space-y-2">
              <Label htmlFor="searchCliente" className="text-gray-300">Buscar Cliente Existente</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="searchCliente"
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Buscar por número, nombre, teléfono..."
                  className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                
                {/* Resultados de búsqueda */}
                {showSearchResults && clientesEncontrados.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 sm:max-h-60 overflow-y-auto">
                    {clientesEncontrados.map((cliente) => (
                      <div
                        key={cliente.numeroCliente}
                        onClick={() => handleClienteSeleccionado(cliente)}
                        className="p-2 sm:p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center justify-between">
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-gray-900 text-sm sm:text-base truncate">
                              {cliente.nombre}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 truncate">
                              #{cliente.numeroCliente} • {cliente.telefono} • {cliente.poblacion}
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs flex-shrink-0 ml-2">
                            #{cliente.numeroCliente}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Cliente seleccionado - Panel plegable */}
            {clienteSeleccionado && (
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                {/* Header plegable */}
                <div
                  className="flex items-center justify-between p-2 sm:p-3 cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => setIsClientePanelCollapsed(!isClientePanelCollapsed)}
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-white text-xs sm:text-sm truncate">
                        {clienteSeleccionado.nombre}
                      </div>
                      <div className="text-xs text-gray-400 truncate">
                        Cliente #{clienteSeleccionado.numeroCliente} • {clienteSeleccionado.telefono}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLimpiarCliente();
                      }}
                      className="text-red-400 border-red-600 hover:bg-red-900/20 text-xs px-1 sm:px-2 py-1 h-5 sm:h-6"
                    >
                      <span className="hidden sm:inline">Cambiar</span>
                      <span className="sm:hidden">✕</span>
                    </Button>
                    {isClientePanelCollapsed ? (
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    ) : (
                      <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    )}
                  </div>
                </div>
                
                {/* Contenido desplegable */}
                {!isClientePanelCollapsed && (
                  <div className="px-2 sm:px-3 pb-2 sm:pb-3 border-t border-gray-700">
                    <div className="pt-2 sm:pt-3 space-y-1 sm:space-y-2">
                      <div className="text-xs text-gray-400">
                        <strong>Teléfono:</strong> {clienteSeleccionado.telefono}
                      </div>
                      {clienteSeleccionado.correo && (
                        <div className="text-xs text-gray-400">
                          <strong>Email:</strong> {clienteSeleccionado.correo}
                        </div>
                      )}
                      {clienteSeleccionado.poblacion && (
                        <div className="text-xs text-gray-400">
                          <strong>Población:</strong> {clienteSeleccionado.poblacion}
                        </div>
                      )}
                      {clienteSeleccionado.direccion && (
                        <div className="text-xs text-gray-400">
                          <strong>Dirección:</strong> {clienteSeleccionado.direccion}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Número de cliente */}
              <div className="space-y-2">
                <Label htmlFor="numeroCliente" className="text-gray-300">Número de Cliente *</Label>
                <Input
                  id="numeroCliente"
                  type="text"
                  value={numeroCliente}
                  onChange={(e) => handleFieldChange('numeroCliente', e.target.value)}
                  placeholder="0001"
                  disabled={!!clienteSeleccionado}
                  className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 font-mono ${clienteSeleccionado ? 'bg-green-900 border-green-600' : !numeroCliente ? 'border-red-500 focus:border-red-400' : ''}`}
                />
                {clienteSeleccionado && (
                  <p className="text-xs text-green-400">
                    Número de cliente seleccionado automáticamente
                  </p>
                )}
                {!numeroCliente && (
                  <p className="text-xs text-red-400">
                    Debe introducir un número de cliente
                  </p>
                )}
              </div>

              {/* Nombre del cliente */}
              <div className="space-y-2">
                <Label htmlFor="clientName" className="text-gray-300">Nombre del Cliente *</Label>
                <Input
                  id="clientName"
                  type="text"
                  value={clientName}
                  onChange={(e) => handleFieldChange('clientName', e.target.value)}
                  placeholder="Nombre completo del cliente"
                  className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${clienteSeleccionado ? 'bg-blue-900 border-blue-600' : ''}`}
                />
                {clienteSeleccionado && (
                  <p className="text-xs text-blue-400">
                    Puede modificar el nombre si es necesario
                  </p>
                )}
              </div>

              {/* Matrícula */}
              <div className="space-y-2">
                <Label htmlFor="licensePlate" className="text-gray-300">Matrícula del Vehículo *</Label>
                <Input
                  id="licensePlate"
                  type="text"
                  value={licensePlate}
                  onChange={(e) => handleFieldChange('licensePlate', e.target.value)}
                  placeholder="Ej: 1234ABC"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              {/* Número de pedido */}
              <div className="space-y-2">
                <Label htmlFor="orderNumber" className="text-gray-300">Número de Pedido</Label>
                <Input
                  id="orderNumber"
                  type="text"
                  value={orderNumber}
                  onChange={(e) => handleFieldChange('orderNumber', e.target.value)}
                  placeholder="Número de pedido (opcional)"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
              <Button
                variant="outline"
                onClick={onAbrirGestionClientes}
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white border-gray-600 text-sm sm:text-base"
              >
                <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Ver Todos los Clientes</span>
                <span className="sm:hidden">Ver Clientes</span>
              </Button>
              <Button
                onClick={onAbrirNuevoCliente}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                Nuevo Cliente
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}