export interface HeroBanner {
  id: string;
  subtitle: string;
  title: string;
  buttonText: string;
  image: string;
}

export interface HeroSidePromo {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface HeroSaleBanner {
  id: string;
  product: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface heroBottomPromos {
  id: string;
  product: string;
  title: string;
  subtitle: string;
}

export type ProductBadge = 'new' | 'sale' | 'hot';

export interface ProductType {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  categoryId: number;
  image: string;
  stock: number;
  badge?: ProductBadge;
}

export interface PromoProductType {
  id: string;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
  stock: number;
  sold: number;
}

export interface FeatureType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CategoryType {
  id: number;
  name: string;
  icon: string;
}
