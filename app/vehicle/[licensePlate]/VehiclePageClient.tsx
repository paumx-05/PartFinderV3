'use client';
import React, { useState, useEffect } from 'react';
import VehicleInfo from '@/components/VehicleInfo';
import PartsSection from '@/components/PartsSection';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useCart } from '@/lib/contexts/CartContext';

interface VehicleData {
  licensePlate: string;
  vin: string;
  brand: string;
  model: string;
  year: string;
}

interface VehiclePageClientProps {
  licensePlate: string;
}

export default function VehiclePageClient({ licensePlate }: VehiclePageClientProps) {
  const router = useRouter();
  const [plate, setPlate] = useState(licensePlate.toUpperCase());
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const { state } = useCart();

  useEffect(() => {
    // Normalizar la matrícula para comparación (convertir a mayúsculas)
    const normalizedPlate = plate.toUpperCase();
    
    // Definir los datos de vehículos conocidos
    const vehicleDatabase: Record<string, Omit<VehicleData, 'licensePlate'>> = {
      '0251FZL': { vin: '12345678912345678', brand: 'Fiat', model: 'Grande Punto', year: '25/01/2008' },
      '1234ABC': { vin: '12345678912345678', brand: 'BMW', model: 'Serie 3', year: '20/04/2013' },
      '7288FJL': { vin: 'VF1JM9UD637040850', brand: 'Renault', model: 'Grand Scenic II', year: '15/12/2006' }
    };
    
    // Buscar datos del vehículo
    const vehicleInfo = vehicleDatabase[normalizedPlate];
    
    if (vehicleInfo) {
      // Vehículo encontrado en la base de datos
      setVehicleData({ 
        licensePlate: plate, 
        ...vehicleInfo 
      });
    } else {
      // Vehículo no encontrado
      setVehicleData({ 
        licensePlate: plate, 
        vin: 'Desconocido', 
        brand: 'Desconocida', 
        model: 'Desconocido', 
        year: '-' 
      });
    }
  }, [plate]);

  const handleSearch = () => {
    const p = plate.toUpperCase();
    router.push(`/vehicle/${p}`);
  };

  return (
    <>
      <Header cartItems={state.totalItems} onAddToCart={() => {}} />
      {vehicleData && (
        <VehicleInfo
          vehicleData={vehicleData}
          plate={plate}
          onPlateChange={setPlate}
          onSearch={handleSearch}
        />
      )}
      
      {vehicleData && (
        <PartsSection vehicleData={vehicleData} />
      )}
    </>
  );
}
