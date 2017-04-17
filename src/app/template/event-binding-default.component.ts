import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding-default',
  template: `
    <div (mousemove)="OnMouseMove($event)">
      <h4>
      Event Binding Default
      </h4>
      <p (click)="clicked($event)">
        Click on this paragraph
      </p>
      <p>(X , Y)</p><pre>{{"(" + x + "," + y +")"}}</pre>
      
    </div>
  `,
  styles: []
})
export class EventBindingDefaultComponent implements OnInit {

  x: number=0;
  y: number=0;

  constructor() {
  }

  ngOnInit() {
  }

  clicked(event) {
    console.log(event);
    alert('Clicked On Element:' + event.target.localName);
  }

  OnMouseMove(event) {
    this.x = event.screenX;
    this.y = event.screenY;
  }

}
