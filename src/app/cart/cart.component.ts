import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(cartItem: any) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      console.log('Decreased:', cartItem.quantity);
      this.cartService.adjustQuantity(this.cartItems.indexOf(cartItem), cartItem.quantity);
    }
  }


  increaseQuantity(cartItem: any) {
    cartItem.quantity++;
    console.log('increased:', cartItem.quantity);
    this.cartService.adjustQuantity(this.cartItems.indexOf(cartItem), cartItem.quantity);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  adjustQuantity(index: number, newQuantity: number) {
    if (newQuantity >= 1) {
      this.cartItems[index].quantity = newQuantity;
    }
  }
}
