import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(@Inject('API_ENDPOINT') private apiEndpoint: string, private http: Http) {
  }

  getCategories() {
    return this.http.get(`${this.apiEndpoint}/categories`)
      .map(response => response.json());
  }

  getProducts() {
    return this.http.get(`${this.apiEndpoint}/products`)
      .map(response => response.json());
  }

  getProductsByCategory(categoryId) {
    return this.http.get(`${this.apiEndpoint}/products?categoryId=${categoryId}`)
      .map(response => response.json());
  }

  getCategoryWithProducts(categoryId) {
    let result: any = {};
    return this.http.get(`${this.apiEndpoint}/categories?id=${categoryId}`)
      .map(response => response.json())
      .mergeMap(category => {
        result = category;
        return this.http.get(`${this.apiEndpoint}/products?categoryId=${category[0].id}`);
      })
      .mergeMap(response => Observable.of({
          category: result,
          products: response.json()
        })
      );
  }

  getData() {
    const categories = this.http.get(`${this.apiEndpoint}/categories`);
    const products = this.http.get(`${this.apiEndpoint}/products`);
    const cities = this.http.get(`${this.apiEndpoint}/cities`);

    return Observable.forkJoin([categories, products, cities]);
  }

}
