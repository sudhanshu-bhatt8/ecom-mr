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
  category: number;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _httpClient = inject(HttpClient);

  private searchSubject = new BehaviorSubject<SearchCriteria>({
    term: '',
    category: 0,
  });

  search$ = this.searchSubject.asObservable();

  private storeData$ = this._httpClient.get<StoreData>('/data/store.json').pipe(shareReplay(1));

  constructor(private http: HttpClient) {}

  getStore(): Observable<StoreData> {
    return this.storeData$;
  }

  updateSearch(criteria: SearchCriteria): void {
    this.searchSubject.next(criteria);
  }

  filteredStore$ = combineLatest([this.storeData$, this.search$]).pipe(
    map(([store, search]) => {
      const filteredProducts = store.products.filter((product) => {
        const matchesTerm = !search.term || product.title.toLowerCase().includes(search.term);

        const matchesCategory = search.category === 0 || product.categoryId === search.category;

        return matchesTerm && matchesCategory;
      });

      return {
        ...store,
        products: filteredProducts,
      };
    }),
    shareReplay(1),
  );

  getCategories(): Observable<CategoryType[]> {
    return this.storeData$.pipe(map((data) => data.categories));
  }
}
