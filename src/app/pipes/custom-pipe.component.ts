import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  template: `
    <h4>
      Using custom pipe
    </h4>
    <p>{{ 2 | topower:10}}</p>
  `,
  styles: []
})
export class CustomPipeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
