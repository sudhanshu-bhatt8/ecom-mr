import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  CategoryType,
  FeatureType,
  HeroBanner,
  heroBottomPromos,
  HeroSaleBanner,
  HeroSidePromo,
  ProductType,
  PromoProductType,
} from '../../../type/her.type';

export interface StoreData {
  heroBanners: HeroBanner[];
  heroSidePromos: HeroSidePromo[];
  herSaleBanner: HeroSaleBanner;
  heroBottomPromos: heroBottomPromos[];
  products: ProductType[];
  promoProducts: PromoProductType[];
  categories: CategoryType[];
  features: FeatureType[];
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getStore(): Observable<StoreData> {
    return this.http.get<StoreData>('/data/store.json');
  }
}
