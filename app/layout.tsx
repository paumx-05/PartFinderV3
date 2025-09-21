import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { CartProvider } from '@/lib/contexts/CartContext';
import { BudgetProvider } from '@/lib/contexts/BudgetContext';
import { PresupuestosProvider } from '@/lib/contexts/PresupuestosContext';
import { ClientProvider } from '@/lib/contexts/ClientContext';
import { ClientesProvider } from '@/lib/contexts/ClientesContext';
import { NotesProvider } from '@/lib/contexts/NotesContext';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

export const metadata: Metadata = {
  title: 'PartFinder - Recambios de Coches',
  description: 'Encuentra los recambios que necesitas para tu vehículo. Búsqueda por marca, modelo y código TecDoc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} font-sans bg-gray-900 text-gray-200`}>
        <CartProvider>
          <BudgetProvider>
            <PresupuestosProvider>
              <ClientesProvider>
                <ClientProvider>
                  <NotesProvider>
                    {children}
                  </NotesProvider>
                </ClientProvider>
              </ClientesProvider>
            </PresupuestosProvider>
          </BudgetProvider>
        </CartProvider>
      </body>
    </html>
  );
}