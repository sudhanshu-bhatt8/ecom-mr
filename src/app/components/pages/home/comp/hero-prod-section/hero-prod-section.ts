import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreData, StoreService } from '../../../../services/store.service/store-service';
import { HeroBanner, heroBottomPromos, HeroSidePromo } from '../../../../../type/her.type';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-hero-prod-section',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './hero-prod-section.html',
  styleUrls: ['./hero-prod-section.scss'],
})
export class HeroProdSection {
  @Input() heroBanners: HeroBanner[] = [];
  @Input() heroSidePromos: HeroSidePromo[] = [];
  @Input() heroSaleBanner: any;
  @Input() heroBottomPromos: heroBottomPromos[] = [];

  ngOnInit() {
    console.log(this.heroBottomPromos, 'check_');
  }
}
