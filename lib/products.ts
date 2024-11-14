export type GetProducts = Product[];

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export async function getProducts() {
  const PRODUCTS_URL = "https://fakestoreapi.com/products";
  const rawData = await fetch(PRODUCTS_URL);
  const items: GetProducts = await rawData.json();

  return items;
}

export async function getProductDetails(productId: string) {
  const PRODUCT_DETAILS = `https://fakestoreapi.com/products/${productId}`;
  const rawData = await fetch(PRODUCT_DETAILS);
  const item: Product = await rawData.json();

  return item;
}
