import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display.component.html',
  styles: [],
  providers: [DataService]
})
export class DisplayComponent implements OnInit {

  result;

  constructor(private service: DataService) {
  }

  ngOnInit() {
  }

  showCategories() {
    this.service.getCategories().subscribe(
      categories => this.result = categories,
      error => alert(JSON.stringify(error)),
      () => console.log('stream completed')
    );
  }

  showProducts() {
    this.service.getProducts().subscribe(
      products => this.result = products,
      error => alert(JSON.stringify(error)),
      () => console.log('stream completed')
    );
  }

  showProductsOfCategory() {
    this.service.getCategoryWithProducts(1).subscribe(
      categoryAndproducts => this.result = categoryAndproducts,
      error => alert(JSON.stringify(error)),
      () => console.log('stream completed'));
  }

  showData() {
    this.service.getData().subscribe(alldata => this.result = alldata.map(data => data.json()));
  }

}
