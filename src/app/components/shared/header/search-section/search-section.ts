import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CartService } from '../../../services/cartService/cart-service';
import { StoreService } from '../../../services/store.service/store-service';
import { CategoryType } from '../../../../type/her.type';

interface SearchCriteria {
  term: string;
  category: 'all' | number;
}

@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './search-section.html',
  styleUrl: './search-section.scss',
})
export class SearchSection implements OnInit {
  cartCount = 0;

  searchControl = new FormControl<string>('');

  // ✅ Correct union type
  selectedCategory: number = 0;

  categories: CategoryType[] = [];

  constructor(
    private cartService: CartService,
    private storeService: StoreService,
  ) {}

  ngOnInit(): void {
    // Cart count
    this.cartService.cart$.subscribe((items) => {
      this.cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    });

    // Load categories
    this.storeService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    // Debounced search
    // 🔥 SEARCH INPUT LISTENER
    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((value) => {
        this.pushSearch(value ?? '');
      });
  }

  private pushSearch(term: string) {
    this.storeService.updateSearch({
      term: term.trim().toLowerCase(),
      category: this.selectedCategory,
    });
  }

  // ✅ Fully type-safe
  private updateSearchState(term: string): void {
    this.storeService.updateSearch({
      term: term.trim().toLowerCase(),
      category: this.selectedCategory,
    });
  }

  // ✅ Convert string from DOM to correct union type
  selectCategory(event: Event): void {
    const value = Number((event.target as HTMLSelectElement).value);

    this.selectedCategory = value;

    this.updateSearchState(this.searchControl.value ?? '');
  }

  manualSearch(): void {
    this.pushSearch(this.searchControl.value ?? '');
  }
}
