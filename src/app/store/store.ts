export interface StoreData {
  heroBanners: any[];
  heroSidePromos: any[];
  herSaleBanner: any;
  categories: Category[];
  products: Product[];
  promoProducts: any[];
  features: any[];
}

export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  categoryId: number;
  image: string;
  stock: number;
  badge?: 'sale' | 'new' | 'hot';
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}
