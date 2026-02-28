import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, map, shareReplay } from 'rxjs';
import { Observable } from 'rxjs';

import {
  CategoryType,
  HeroBanner,
  heroBottomPromos,
  HeroSaleBanner,
  HeroSidePromo,
  ProductType,
  PromoProductType,
  FeatureType,
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

interface SearchCriteria {
  term: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _httpClient = inject(HttpClient);

  private searchSubject = new BehaviorSubject<SearchCriteria>({
    term: '',
    category: 'all',
  });

  search$ = this.searchSubject.asObservable();

  private storeData$ = this._httpClient.get<StoreData>('/data/store.json').pipe(shareReplay(1));

  constructor(private http: HttpClient) {}

  getStore(): Observable<StoreData> {
    return this.storeData$;
  }

  getCategories(): Observable<CategoryType[]> {
    return this.storeData$.pipe(map((data) => data.categories));
  }
}
