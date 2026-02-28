import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryType, ProductType } from '../../../../../type/her.type';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../../services/cartService/cart-service';

@Component({
  selector: 'app-category-block',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './category-block.html',
})
export class CategoryBlock {
  @Input() category!: CategoryType;
  @Input() products: ProductType[] = [];

  constructor(private cartService: CartService) {}
  addToCart(product: ProductType) {
    this.cartService.addToCart(product);
  }
}
