import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroProdSection } from './comp/hero-prod-section/hero-prod-section';
import { Observable } from 'rxjs';
import { StoreData, StoreService } from '../../services/store.service/store-service';
import {
  CategoryType,
  heroBottomPromos,
  ProductType,
  PromoProductType,
} from '../../../type/her.type';
import { CategorySection } from './comp/category-section/category-section';
import { PromoPrd } from './comp/promo-prd/promo-prd';
import { CategoryBlock } from './comp/category-block/category-block';
import { Featuers } from './comp/featuers/featuers';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroProdSection, CategorySection, PromoPrd, CategoryBlock, Featuers],
  templateUrl: './home.html',
})
export class Home {
  heroBanners: any[] = [];
  heroSidePromos: any[] = [];
  heroSaleBanner: any = null;
  heroBottomPromos: heroBottomPromos[] = [];
  product: ProductType[] = [];
  category: CategoryType[] = [];
  promoProduct: PromoProductType[] = [];
  storeData!: StoreData;
  groupedCategories: {
    category: CategoryType;
    products: ProductType[];
  }[] = [];

  constructor(private storeService: StoreService) {
    this.loadStore();
  }

  private loadStore() {
    this.storeService.getStore().subscribe((data: StoreData) => {
      console.log(data, 'check_data');
      this.heroBanners = data.heroBanners;
      this.heroSidePromos = data.heroSidePromos;
      this.heroSaleBanner = data.herSaleBanner;
      this.heroBottomPromos = data.heroBottomPromos;
      this.product = data.products;
      this.category = data.categories;
      this.promoProduct = data.promoProducts;
      this.storeData = data;

      this.groupedCategories = data.categories.map((cat) => ({
        category: cat,
        products: data.products.filter((p) => p.categoryId === cat.id),
      }));
    });
  }
}
