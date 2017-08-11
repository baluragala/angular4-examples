import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-class',
  template: `
    <h4>
      NgClass
    </h4>
    <p [ngClass]="'note high'">This paragraph is styled using NgClass with CSS class names (string)</p>
    <p [ngClass]="['note','high']">This paragraph is styled using NgClass with CSS class names (array)</p>
    <p [ngClass]="{'note':true,'high':false}">TThis paragraph is styled using NgClass with CSS class names (object)</p>
    <p [ngClass]="{'note':true,'high':high}">TThis paragraph is styled using NgClass with CSS class names (object, value as expression)</p>
  `,
  styles: [`.note{font-style: italic;font-size:20px}`, `.high{color: red}`]
})
export class NgClassComponent implements OnInit {

  high: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

}
