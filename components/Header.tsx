'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Wrench, ShoppingCart, User, LogOut, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSessionMock } from '@/hooks/use-session-mock';
import { authMock } from '@/lib/mocks/auth';
import { useCart } from '@/lib/contexts/CartContext';
import { useBudget } from '@/lib/contexts/BudgetContext';
import CartModal from './cart/CartModal';
import BudgetModal from './budget/BudgetModal';
import { BudgetButton } from './budget/BudgetButton';
import { PresupuestosDropdown } from './presupuestos/PresupuestosDropdown';
import { ModalGestionPresupuestos } from './presupuestos/ModalGestionPresupuestos';
import { ClientesDropdown } from './clientes/ClientesDropdown';
import { ModalGestionClientes } from './clientes/ModalGestionClientes';
import { ModalNuevoCliente } from './clientes/ModalNuevoCliente';

interface HeaderProps {
  cartItems: number;
  onAddToCart: () => void;
}

export default function Header({ cartItems, onAddToCart }: HeaderProps) {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useSessionMock();
  const { state, toggleCart } = useCart();
  const { state: budgetState, setBudgetOpen, initializeBudget } = useBudget();
  const [isGestionPresupuestosOpen, setIsGestionPresupuestosOpen] = useState(false);
  const [isGestionClientesOpen, setIsGestionClientesOpen] = useState(false);
  const [isNuevoClienteOpen, setIsNuevoClienteOpen] = useState(false);

  async function handleLogout() {
    await authMock.logout();
    await logout();
    router.replace('/');
  }

  const handleUserClick = () => {
    if (isAuthenticated) router.push('/account');
    else router.push('/login');
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleAbrirGestionPresupuestos = () => {
    setIsGestionPresupuestosOpen(true);
  };

  const handleAbrirNuevoPresupuesto = () => {
    // Crear un presupuesto nuevo
    initializeBudget();
    // Abrir el BudgetModal
    setBudgetOpen(true);
  };

  const handleAbrirGestionClientes = () => {
    setIsGestionClientesOpen(true);
  };

  const handleAbrirNuevoCliente = () => {
    setIsNuevoClienteOpen(true);
  };

  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-1 sm:space-x-2 min-w-0 hover:text-red-200 transition-colors cursor-pointer"
            aria-label="Ir al inicio"
          >
            <Wrench className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold truncate">PartFinder</h1>
          </button>

          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            <button onClick={onAddToCart} className="relative flex items-center hover:text-red-200 transition-colors p-1" aria-label="Carrito">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white text-red-600 text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
            </button>

            <PresupuestosDropdown 
              onAbrirGestion={handleAbrirGestionPresupuestos}
              onAbrirNuevoPresupuesto={handleAbrirNuevoPresupuesto}
            />

            <button onClick={handleUserClick} className="flex items-center hover:text-red-200 transition-colors p-1" aria-label={isAuthenticated ? 'Mi cuenta' : 'Login'}>
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {!isAuthenticated ? (
              <div className="flex items-center gap-1">
                <Link href="/login" className="text-xs underline hover:text-red-200">Login</Link>
                <Link href="/register" className="text-xs underline hover:text-red-200">Registro</Link>
              </div>
            ) : (
              <button onClick={handleLogout} className="flex items-center hover:text-red-200 transition-colors p-1" aria-label="Salir">
                <LogOut className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            )}
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#catalogo" className="hover:text-red-200 transition-colors text-sm lg:text-base">Catálogos</a>
            <a href="#remotos" className="hover:text-red-200 transition-colors text-sm lg:text-base">Remotos</a>
            <a href="#gestion" className="hover:text-red-200 transition-colors text-sm lg:text-base">Gestión</a>
            {!isAuthenticated ? (
              <>
                <Link href="/login" className="hover:text-red-200 transition-colors text-sm lg:text-base">Login</Link>
                <Link href="/register" className="hover:text-red-200 transition-colors text-sm lg:text-base">Registro</Link>
              </>
            ) : null}
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 text-sm">
            <div className="hidden xl:flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span className="text-xs xl:text-sm">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span className="text-xs xl:text-sm">info@PartFinder.es</span>
              </div>
            </div>

            <button onClick={toggleCart} className="relative flex items-center space-x-1 hover:text-red-200 transition-colors p-1" aria-label="Carrito">
              <ShoppingCart className="h-5 w-5" />
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {state.totalItems}
                </span>
              )}
            </button>

            <ClientesDropdown 
              onAbrirGestion={handleAbrirGestionClientes}
              onAbrirNuevoCliente={handleAbrirNuevoCliente}
            />

            <PresupuestosDropdown 
              onAbrirGestion={handleAbrirGestionPresupuestos}
              onAbrirNuevoPresupuesto={handleAbrirNuevoPresupuesto}
            />

            <button onClick={handleUserClick} className="flex items-center space-x-1 hover:text-red-200 transition-colors p-1" aria-label={isAuthenticated ? 'Mi cuenta' : 'Login'}>
              <User className="h-5 w-5" />
            </button>

            {isAuthenticated && (
              <button onClick={handleLogout} className="flex items-center space-x-1 hover:text-red-200 transition-colors p-1" aria-label="Salir">
                <LogOut className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Cart Modal */}
      <CartModal />
      
      {/* Budget Modal */}
      <BudgetModal />
      
      {/* Modal de Gestión de Presupuestos */}
      <ModalGestionPresupuestos 
        isOpen={isGestionPresupuestosOpen}
        onClose={() => setIsGestionPresupuestosOpen(false)}
        onAbrirNuevoPresupuesto={handleAbrirNuevoPresupuesto}
      />
      

      {/* Modal de Gestión de Clientes */}
      <ModalGestionClientes 
        isOpen={isGestionClientesOpen}
        onClose={() => setIsGestionClientesOpen(false)}
      />
      
      {/* Modal de Nuevo Cliente */}
      <ModalNuevoCliente 
        isOpen={isNuevoClienteOpen}
        onClose={() => setIsNuevoClienteOpen(false)}
      />
    </header>
  );
}

