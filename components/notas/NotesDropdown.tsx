'use client';

import React, { useState } from 'react';
import { StickyNote, Plus, List, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNotes } from '@/lib/contexts/NotesContext';
import { useAuth } from '@/hooks/use-auth';
import { NotesDropdownProps } from '@/lib/types/notes';

export function NotesDropdown({ onAbrirNuevaNota, onAbrirGestionNotas }: NotesDropdownProps) {
  const { getPendingNotesCount, getRecentNotes } = useNotes();
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  const pendingCount = isAuthenticated ? getPendingNotesCount() : 0;
  const recentNotes = isAuthenticated ? getRecentNotes(3) : [];

  const getPriorityColor = (priority: 'baja' | 'media' | 'alta') => {
    switch (priority) {
      case 'alta': return 'text-red-500';
      case 'media': return 'text-yellow-500';
      case 'baja': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityIcon = (priority: 'baja' | 'media' | 'alta') => {
    switch (priority) {
      case 'alta': return <AlertCircle className="h-3 w-3" />;
      case 'media': return <Clock className="h-3 w-3" />;
      case 'baja': return <StickyNote className="h-3 w-3" />;
      default: return <StickyNote className="h-3 w-3" />;
    }
  };

  const handleNuevaNota = () => {
    setIsOpen(false);
    onAbrirNuevaNota();
  };

  const handleGestionNotas = () => {
    setIsOpen(false);
    onAbrirGestionNotas();
  };

  const truncateText = (text: string, maxLength: number = 50) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative flex items-center space-x-1 hover:text-red-200 transition-colors p-1"
          aria-label={`Notas${pendingCount > 0 ? ` - ${pendingCount} pendientes` : ''}`}
        >
          <StickyNote className="h-5 w-5" />
          {pendingCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {pendingCount > 99 ? '99+' : pendingCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-80 sm:w-96 max-w-[calc(100vw-2rem)] bg-gray-800 border-gray-700 text-white scrollbar-dark"
        sideOffset={5}
        onPointerDownOutside={(e) => {
          // Permitir scroll cuando se hace clic fuera del dropdown
          e.preventDefault();
          setIsOpen(false);
        }}
        onEscapeKeyDown={() => setIsOpen(false)}
      >
        <DropdownMenuLabel className="text-white font-semibold">
          Notas Rápidas
          {pendingCount > 0 && (
            <span className="ml-2 text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full">
              {pendingCount} pendientes
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        
        <DropdownMenuItem 
          onClick={handleNuevaNota}
          className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
        >
          <Plus className="h-4 w-4 mr-2 text-green-400" />
          <span>Nueva Nota</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={handleGestionNotas}
          className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
        >
          <List className="h-4 w-4 mr-2 text-blue-400" />
          <span>Gestionar Notas</span>
        </DropdownMenuItem>
        
        {recentNotes.length > 0 && (
          <>
            <DropdownMenuSeparator className="bg-gray-600" />
            <DropdownMenuLabel className="text-gray-300 text-xs">
              Notas Recientes
            </DropdownMenuLabel>
            
            {recentNotes.map((note) => (
              <DropdownMenuItem 
                key={note.id}
                className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer flex-col items-start p-2 sm:p-3"
                onClick={handleGestionNotas}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <div className="flex items-center space-x-1 min-w-0 flex-1">
                    <div className={getPriorityColor(note.prioridad)} title={`Prioridad ${note.prioridad}`}>
                      {getPriorityIcon(note.prioridad)}
                    </div>
                    <span className="font-medium text-sm text-white truncate">
                      {note.cliente}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
                    {note.matricula}
                  </span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed w-full">
                  {truncateText(note.contenido, window.innerWidth < 640 ? 60 : 80)}
                </p>
                <span className="text-xs text-gray-500 mt-1">
                  {new Date(note.fechaCreacion).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </DropdownMenuItem>
            ))}
          </>
        )}
        
        {recentNotes.length === 0 && (
          <>
            <DropdownMenuSeparator className="bg-gray-600" />
            <div className="p-4 text-center text-gray-400">
              <StickyNote className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No hay notas pendientes</p>
              <p className="text-xs mt-1">¡Perfecto! Todo al día</p>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
