import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-default',
  template: `
    <h4>
      ChangeDetectionStrategy.Default
    </h4>
    <button class="btn btn-default" (click)="OnMutateAuthor()">Mutate Author</button>
    <button class="btn btn-default" (click)="OnChangeAuthor()">Change Author</button>
    <br/><br/>
    <pre class="source">{{author2|json}}</pre>
    <app-author-detail [author]="author1"></app-author-detail>
  `,
  styles: [`.source {
      background-color: cornsilk;
      }`]
})
export class ChangeDetectionDefaultComponent implements OnInit {

  author1: any;
  author2: any;

  constructor() {
  }

  ngOnInit() {
    this.author1 = {technology: 'Mobile', username: 'baluragala'};
    this.author2 = this.author1;
  }

  OnMutateAuthor() {
    console.log('OnMutateAuthor');
    this.author1.technology = 'Web';
    this.author1.username = 'zeolearn';
  }

  OnChangeAuthor() {
    console.log('OnChangeAuthor');
    this.author1 = {technology: 'Fullstack', username: 'chirstopher'};
    this.author2 = this.author1;
  }

}
