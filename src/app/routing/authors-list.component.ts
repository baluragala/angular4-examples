import {Component, OnInit} from '@angular/core';
import {AUTHORS} from './data';

@Component({
  selector: 'app-authors-list',
  template: `
    <div *ngFor="let a of authors">
      <p>{{a.id}}</p>
      <h1><a
        [routerLink]="['/routing','authors', {outlets: {'list': ['authorsList'], 'detail': [a.id]}}]">{{a.name}}</a>
      </h1>
    </div>
  `,
  styles: []
})
export class AuthorsListComponent implements OnInit {
  authors;

  constructor() {
  }

  ngOnInit() {
    this.authors = AUTHORS;
    console.log('');
  }

}
