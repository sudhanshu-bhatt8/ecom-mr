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

export type CardLayout = 'vertical' | 'horizontal';
export type ImageRatio = 'square' | '3/2' | '4/3';
export type ImageFit = 'contain' | 'cover';

export interface CategoryType {
  id: number;
  name: string;
  icon: string;
  layout: CardLayout;
  imageRatio: ImageRatio;
  imageFit: ImageFit;
}
