import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  counter;

  constructor() {
    console.log('CounterService Instantiated');
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
