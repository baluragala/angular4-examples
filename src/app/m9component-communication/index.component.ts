import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";

@Component({
  selector: 'app-index',
  template: `
    <h3>
      Component Communication With RxJs Subject
    </h3>
    <p>Cart : {{cart | json}}</p>
    <app-products></app-products>
  `,
  styles: []
})
export class IndexComponent implements OnInit {

  cart = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getCart().subscribe(product => {
      this.cart.push(product);
      this.cart = this.cart.slice(0);
    })
  }
}

