import VehiclePageClient from './VehiclePageClient';

// En tu página vehicle/[licensePlate]/page.tsx
export async function generateStaticParams() {
  // Genera algunos parámetros estáticos comunes para evitar errores
  return [
    { licensePlate: '0251FZL' },
    { licensePlate: '0251fzl' }, // Versión en minúsculas
    { licensePlate: '1234ABC' },
    { licensePlate: '1234abc' }, // Versión en minúsculas
    { licensePlate: '7288FJL' },
    { licensePlate: 'ABC1234' },
    { licensePlate: 'DEF9012' },
    { licensePlate: 'GHI3456' }
  ]
}

export default function VehiclePage({ params }: { params: { licensePlate: string } }) {
  return <VehiclePageClient licensePlate={params.licensePlate} />;
}
