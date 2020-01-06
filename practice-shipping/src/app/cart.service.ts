import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []; // 장바구니

  // 장바구니 추가
  addToCart(product) {
    this.items.push(product);
  }

  // 장바구니 조회
  getItems() {
    return this.items;
  }

  // 장바구니 비우기
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
