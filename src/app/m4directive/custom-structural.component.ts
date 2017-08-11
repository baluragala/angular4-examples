import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-structural',
  template: `
    <h4>
      Custom Structural
    </h4>
    <div *ngFor="let item of [1,2,3,4,5,6]">
      <h1 *appDelay="500 * item">
        {{item}}
      </h1>
    </div>
  `,
  styles: []
})
export class CustomStructuralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
