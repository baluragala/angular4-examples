import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-products',
  template: `
    <app-product-item *ngFor="let p of products" [product]="p">
    </app-product-item>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  products;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
