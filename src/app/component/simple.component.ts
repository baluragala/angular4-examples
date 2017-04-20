import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <h4>
      Simple Component
    </h4>
    <pre>Message from component state: {{message}}</pre>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {
  message: string = "This is a simple component";

  constructor() {
  }

  ngOnInit() {
  }

}
