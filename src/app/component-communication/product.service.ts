import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ProductService {

  private subject = new Subject<any>();

  products = [
    {name: 'product1', price: 10},
    {name: 'product2', price: 20},
    {name: 'product3', price: 10},
    {name: 'product4', price: 20}
  ];

  constructor() {
  }

  getProducts() {
    return this.products;
  }

  addToCart(product) {
    this.subject.next({product});
  }

  getCart() {
    return this.subject.asObservable();
  }

}
