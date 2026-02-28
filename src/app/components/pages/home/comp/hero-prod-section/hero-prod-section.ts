import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-prod-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-prod-section.html',
  styleUrls: ['./hero-prod-section.scss'],
})
export class HeroProdSection {
  @Input() heroBanners: any[] | null = [];
  @Input() heroSidePromos: any[] | null = [];
  @Input() heroSaleBanner: any | null = null;
}
