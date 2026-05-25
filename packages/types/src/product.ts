export interface Product {
  id: string;
  name: string;
  description: string | null;
  category: string;
  imageUrl: string | null;
  isAvailable: boolean;
}
