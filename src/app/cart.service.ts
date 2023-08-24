import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  constructor() {}

  getCartItems() : any[]{
    return this.cartItems;
  }

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }
  


  // addToCart(item: any) {
  //   this.cartItems.push(item);
  //   this.cartItemsSubject.next(this.cartItems);
  // }
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  adjustQuantity(index: number, newQuantity: number) {
    if (newQuantity >= 1) {
      const cartItem = this.cartItems[index];
      cartItem.quantity = newQuantity;
      cartItem.totalPrice = cartItem.price * newQuantity;
    }
  }
}




