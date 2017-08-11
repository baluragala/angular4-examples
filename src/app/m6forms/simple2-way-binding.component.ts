import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple2-way-binding',
  template: `
    <label>Title 1:</label>
    <input [value]="title1" (input)="title1=$event.target.value">
    <label>Title 2:</label>
    <input [(ngModel)]="title2">
    <label>Title 3:</label>
    <input [ngModel]="title3" (ngModelChange)="title3=$event">
    <h3>title1 : {{title1}}</h3>
    <h3>title2 : {{title2}}</h3>
    <h3>title3 : {{title3}}</h3>
  `,
  styles: [`label {
    display: block
  }`]
})
export class Simple2WayBindingComponent implements OnInit {

  title1 = '';
  title2 = '';
  title3 = '';

  constructor() {
  }

  ngOnInit() {
  }

}
