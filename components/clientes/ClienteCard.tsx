'use client';

import React from 'react';
import { Cliente } from '@/lib/types/clients';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Edit, 
  Trash2, 
  CheckCircle 
} from 'lucide-react';

interface ClienteCardProps {
  cliente: Cliente;
  onEdit?: (cliente: Cliente) => void;
  onDelete?: (cliente: Cliente) => void;
  onSelect?: (cliente: Cliente) => void;
  showActions?: boolean;
  showSelectButton?: boolean;
}

export const ClienteCard: React.FC<ClienteCardProps> = ({
  cliente,
  onEdit,
  onDelete,
  onSelect,
  showActions = true,
  showSelectButton = false,
}) => {
  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatPhone = (phone: string): string => {
    // Formatear teléfono español: 6868045147 -> 686 804 514
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 9) {
      return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    }
    return phone;
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-sm sm:text-lg font-semibold text-gray-900 truncate">
                {cliente.nombre}
              </CardTitle>
              <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  #{cliente.numeroCliente}
                </Badge>
                {cliente.activo ? (
                  <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                    <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                    <span className="hidden sm:inline">Activo</span>
                    <span className="sm:hidden">✓</span>
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                    <span className="hidden sm:inline">Inactivo</span>
                    <span className="sm:hidden">✗</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          {showActions && (
            <div className="flex gap-2">
              {onEdit && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(cliente)}
                  className="h-8 w-8 p-0"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(cliente)}
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0 p-3 sm:p-6">
        <div className="space-y-2 sm:space-y-3">
          {/* Teléfono */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
            <span className="truncate">{formatPhone(cliente.telefono)}</span>
          </div>

          {/* Correo */}
          {cliente.correo && (
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
              <span className="truncate">{cliente.correo}</span>
            </div>
          )}

          {/* Población */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
            <span className="truncate">{cliente.poblacion}</span>
          </div>

          {/* Dirección */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <Home className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
            <span className="truncate">{cliente.direccion}</span>
          </div>

          {/* Fechas */}
          <div className="pt-2 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-xs text-gray-500">
              <span>Creado: {formatDate(cliente.fechaCreacion)}</span>
              <span>Modificado: {formatDate(cliente.fechaModificacion)}</span>
            </div>
          </div>

          {/* Botón de selección */}
          {showSelectButton && onSelect && (
            <div className="pt-2 sm:pt-3">
              <Button
                onClick={() => onSelect(cliente)}
                className="w-full text-sm sm:text-base"
                size="sm"
              >
                <span className="hidden sm:inline">Seleccionar Cliente</span>
                <span className="sm:hidden">Seleccionar</span>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
