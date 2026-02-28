import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType } from '../../../type/her.type';

export interface CartItem extends ProductType {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'app_cart';

  private cartItems: CartItem[] = [];

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const stored = localStorage.getItem(this.cartKey);
    if (stored) {
      this.cartItems = JSON.parse(stored);
      this.cartSubject.next(this.cartItems);
    }
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  addToCart(product: any) {
    const existing = this.cartItems.find((item) => item.id === product.id);

    if (existing) {
      alert('Product already added to cart');
      return;
    }

    this.cartItems.push({ ...product, quantity: 1 });
    this.saveCart();

    alert('Product added to cart successfully');
  }
  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId: string, quantity: number) {
    const item = this.cartItems.find((i) => i.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }

  getCartCount() {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
}
