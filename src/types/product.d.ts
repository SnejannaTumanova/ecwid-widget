export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductCardProps {
  product: Product;
}
