import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-attribute',
  template: `    
    <h4>
      Custom Attribute - Example 1
    </h4>

    <h5>Pick a highlight color</h5>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <p [appHighlight]="color">Highlight me!</p>

    <p [appHighlight]="color" defaultColor="violet">
      Highlight me too!
    </p>

    <hr>
    <p><i>Mouse over the following lines to see fixed highlights</i></p>

    <p [appHighlight]="'yellow'">Highlighted in yellow</p>
    <p appHighlight="orange">Highlighted in orange</p>


    <h4>
      Custom Attribute - Example 2
    </h4>
    <button
      type="button"
      [appConfirm]="visitZeo"
      confirmMessage="Click ok to visit zeolearn.com/!">
      Visit Zeolearn
    </button>
  `,
  styles: []
})
export class CustomAttributeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  visitZeo() {
    location.href = 'http://zeolearn.com';
  }

}
