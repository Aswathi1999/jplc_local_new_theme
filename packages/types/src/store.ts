export interface OpeningHours {
  [day: string]: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  lat: number | null;
  lng: number | null;
  openingHours: OpeningHours | null;
  isActive: boolean;
}
