import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-custom',
  template: `
    <h4>
      Custom Two Way Binding:
    </h4>
    <app-two-way-binding-custom-counter [(counter)]="counter"></app-two-way-binding-custom-counter>
    <br/><br/>
    <p><code>counterValue = {{counter}}</code></p>
  `,
  styles: []
})
export class TwoWayBindingCustomComponent implements OnInit {

  counter:number=0;
  constructor() { }

  ngOnInit() {
  }

}
