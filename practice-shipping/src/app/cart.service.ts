import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  // 배송 비용 안내
  getShippingPrices(){
    return this.http.get('assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
