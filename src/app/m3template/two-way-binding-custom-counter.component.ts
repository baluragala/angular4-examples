import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-two-way-binding-custom-counter',
  template: `
    <button (click)="decrement()">-</button>
      <span>{{counter}}</span>
    <button (click)="increment()">+</button>
  `,
  styles: []
})
export class TwoWayBindingCustomCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counterValue = 0;
  @Output() counterChange = new EventEmitter();

  @Input()
  get counter() {
    return this.counterValue;
  }

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

}
