import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryType, ProductType } from '../../../../../type/her.type';

@Component({
  selector: 'app-category-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-block.html',
})
export class CategoryBlock {
  @Input() category!: CategoryType;
  @Input() products: ProductType[] = [];
}
