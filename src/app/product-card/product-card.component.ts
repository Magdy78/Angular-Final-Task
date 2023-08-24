// product-card.component.ts
import { Component, Input } from '@angular/core';
import { Product } from '../product.interface';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input() product: any;


  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
