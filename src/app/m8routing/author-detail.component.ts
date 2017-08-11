import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AUTHORS} from './data';

@Component({
  selector: 'app-author-detail',
  template: `
    <h1 *ngIf="!author">Please Select Author</h1>
    <div *ngIf="author">
      <h1>{{author.name}}</h1>
      <h3>{{author.email}}</h3>
      <img [src]="author.profilePic"/>
    </div>
  `,
  styles: []
})
export class AuthorDetailComponent implements OnInit {

  params;
  author;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => {
        this.author = AUTHORS.find(a => a.id === parseInt(params.id));
        console.log(this.author);
      }
    );
  }


  ngOnInit() {
  }

}
