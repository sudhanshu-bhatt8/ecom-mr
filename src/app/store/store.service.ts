import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreData } from './store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private store$: Observable<StoreData>;

  constructor(private http: HttpClient) {
    // cache response
    this.store$ = this.http.get<StoreData>('assets/data/store.json').pipe(shareReplay(1));
  }

  getHero() {
    return this.store$.pipe(map((data) => data.heroBanners));
  }

  getHeroSidePromos() {
    return this.store$.pipe(map((data) => data.heroSidePromos));
  }

  getHeroSale() {
    return this.store$.pipe(map((data) => data.herSaleBanner));
  }

  getCategories() {
    return this.store$.pipe(map((data) => data.categories));
  }

  getProducts() {
    return this.store$.pipe(map((data) => data.products));
  }

  getPromoProducts() {
    return this.store$.pipe(map((data) => data.promoProducts));
  }

  getFeatures() {
    return this.store$.pipe(map((data) => data.features));
  }

  getProductsByCategory(categoryId: number) {
    return this.store$.pipe(
      map((data) => data.products.filter((p) => p.categoryId === categoryId)),
    );
  }
}
