import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product-item',
  template: `
    <div>
      <h3>{{product.name}}</h3>
      <button class="btn btn-warning" (click)="onAddToCart(product)">ADD TO CART</button>
    </div>
  `,
  styles: []
})
export class ProductItemComponent implements OnInit {

  @Input() product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  onAddToCart(p) {
    this.productService.addToCart(p);
  }
}
