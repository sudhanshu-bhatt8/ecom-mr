import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroProdSection } from './comp/hero-prod-section/hero-prod-section';
import { StoreService } from '../../../store/store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroProdSection],
  templateUrl: './home.html',
})
export class Home {
  heroBanners$!: Observable<any[]>;
  heroSidePromos$!: Observable<any[]>;
  heroSaleBanner$!: Observable<any>;

  constructor(private store: StoreService) {
    this.heroBanners$ = this.store.getHero();
    this.heroSidePromos$ = this.store.getHeroSidePromos();
    this.heroSaleBanner$ = this.store.getHeroSale();
  }
}
