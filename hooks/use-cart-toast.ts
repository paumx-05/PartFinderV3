// hooks/use-cart-toast.ts
'use client';
import { useToast } from './use-toast';

export function useCartToast() {
  const { toast } = useToast();

  const showAddToCartToast = (partName: string) => {
    toast({
      title: "¡Agregado al carrito!",
      description: `${partName} se ha agregado a tu carrito`,
      duration: 3000,
    });
  };

  const showRemoveFromCartToast = (partName: string) => {
    toast({
      title: "Eliminado del carrito",
      description: `${partName} se ha eliminado de tu carrito`,
      duration: 3000,
    });
  };

  const showClearCartToast = () => {
    toast({
      title: "Carrito vaciado",
      description: "Se han eliminado todos los productos del carrito",
      duration: 3000,
    });
  };

  const showQuantityUpdateToast = (partName: string, quantity: number) => {
    toast({
      title: "Cantidad actualizada",
      description: `${partName}: ${quantity} unidades`,
      duration: 2000,
    });
  };

  return {
    showAddToCartToast,
    showRemoveFromCartToast,
    showClearCartToast,
    showQuantityUpdateToast,
  };
}
