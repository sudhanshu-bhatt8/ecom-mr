import { Component, input, Input } from '@angular/core';
import { CategoryType, ProductType } from '../../../../../type/her.type';
import { Category } from '../../../../shared/header/category/category';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-section',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './category-section.html',
  styleUrl: './category-section.scss',
})
export class CategorySection {
  @Input() product: ProductType[] = [];
  @Input() category: CategoryType[] = [];

  constructor() {}
  selectedCategoryId!: number;

  ngOnInit() {
    console.log(this.category, 'CHECK_CATEGORY');
    if (this.category.length) {
      this.selectedCategoryId = this.category[0].id;
    }

    console.log(this.category);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): ProductType[] {
    return this.product.filter((p) => p.categoryId === this.selectedCategoryId);
  }
}
