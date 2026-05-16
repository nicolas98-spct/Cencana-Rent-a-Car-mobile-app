export type VehicleCategory = 'SUV' | 'Sedán' | 'Pickup' | 'Compacto' | 'Premium';

export interface Vehicle {
  id: string;
  nombre: string;
  categoria: VehicleCategory;
  anio: number;
  transmision: string;
  asientos: number;
  motor: string;
  traccion: string;
  kilometrajeLibrePrecio: number;
  kilometrajeControladoPrecio: number;
  disponible: boolean;
  imagen: string;
  descripcionCorta: string;
}

export type MileageMode = 'libre' | 'controlado';
