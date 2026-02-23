export interface Product {
  id: string;
  title: string;
  price: number;
  inStock: boolean;
  image?: string | null;
  href?: string;
}
