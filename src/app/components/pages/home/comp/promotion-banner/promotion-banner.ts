import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-banner',
  imports: [CommonModule],
  templateUrl: './promotion-banner.html',
  styleUrl: './promotion-banner.scss',
})
export class PromotionBanner {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() buttonText: string = 'Order Now';
  @Input() imageUrl!: string;
}
