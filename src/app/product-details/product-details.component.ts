import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products'; // Assuming you have this array
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number; // Initialize or use the non-null assertion operator (!)
  product: any; // You can use a Product interface here

  
  constructor(private route: ActivatedRoute ,private productService: ProductService) {}


ngOnInit(): void {
  const productId = Number(this.route.snapshot.paramMap.get('id'));
  this.productService.getProductById(productId).subscribe(product => {
    this.product = product;
  });
}

  // ngOnInit(): void {
    
  //   this.productId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   this.product = products.find(product => product.id === this.productId);
  // }
}



