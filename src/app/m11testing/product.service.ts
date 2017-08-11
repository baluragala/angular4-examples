import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  constructor() {
  }

  getProducts() {
    return [{name: 'p1'}, {name: 'p2'}];
  }

}
