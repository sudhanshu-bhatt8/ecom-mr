import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PromoProductType } from '../../../../../type/her.type';

@Component({
  selector: 'app-promo-prd',
  imports: [CommonModule, MatCardModule],

  templateUrl: './promo-prd.html',
  styleUrl: './promo-prd.scss',
})
export class PromoPrd {
  @Input() promoPrd: PromoProductType[] = [];

  getDiscountPercentage(price: number, oldPrice: number): number {
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  }

  getProgress(sold: number, stock: number): number {
    return (sold / stock) * 100;
  }
}
