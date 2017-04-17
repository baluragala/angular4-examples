import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h4>Two Way Binding Using NgModel</h4>
    <div class="form-element">
      <label>How are you today ?:
        <input type="text" [(ngModel)]="answer"/>
      </label>
      <pre>Echo yourself : {{answer}}</pre>
    </div>
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  answer: string;

  constructor() {
  }

  ngOnInit() {
  }

}
