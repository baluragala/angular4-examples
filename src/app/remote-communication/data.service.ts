import {Inject, Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(@Inject('API_ENDPOINT') private apiEndpoint: string, private http: Http) {
  }

  getUsers() {
    return this.http.get(`${this.apiEndpoint}/users`)
      .map(response => response.json());
  }

  getUserById(id) {
    return this.http.get(`${this.apiEndpoint}/users/${id}`)
      .map(response => response.json());
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

  saveUser(user) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    //const params = new URLSearchParams();
    //params.set('token', 'hghjgj$3djhkhjk@231llkl*11');
    //const options = new RequestOptions({headers, params});

    const options = new RequestOptions({headers});
    return this.http.post(`${this.apiEndpoint}/users`, user, options)
      .map(response => response.json())
  }

  updateUser(id,user) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    //const params = new URLSearchParams();
    //params.set('token', 'hghjgj$3djhkhjk@231llkl*11');
    //const options = new RequestOptions({headers, params});
    console.log(user);
    const options = new RequestOptions({headers});
    return this.http.put(`${this.apiEndpoint}/users/${id}`, user, options)
      .map(response => response.json())
  }

  deleteUser(id) {
    return this.http.delete(`${this.apiEndpoint}/users/${id}`)
      .map(response => response.json())
  }

}
