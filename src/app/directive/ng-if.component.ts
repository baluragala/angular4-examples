import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <h4>
      *ngIf structural directive 
    </h4>
    <h5>Fruits</h5>
    <ul>
      <li *ngFor="let fruit of fruits;let i=index;let even=even;let odd=odd;let first=first;let last=last">
      <pre *ngIf="even" class="even">index: {{i}} | {{fruit}} | even:{{even}} | odd:{{odd}} | last:{{last}} | first:{{first}}</pre>
      <pre *ngIf="odd" class="odd">index: {{i}} | {{fruit}} | even:{{even}} | odd:{{odd}} | last:{{last}} | first:{{first}}</pre>
      </li>
    </ul>
  `,
  styles: [`.even{background-color: gold}`,`.odd{background-color: goldenrod}`]
})
export class NgIfComponent implements OnInit {

  fruits: Array<string>;
  courses: Array<{id: number, title: string, author: string}>;

  constructor() {
  }

  ngOnInit() {
    this.fruits = ['Apple', 'Banana', 'Orange', 'Lychee'];
  }

}
