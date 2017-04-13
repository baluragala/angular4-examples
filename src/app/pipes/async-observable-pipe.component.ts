import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx"

@Component({
  selector: 'app-async-observable-pipe',
  template: `
    <h5>
      Count: {{counter$ | async}}
    </h5>
  `,
  styles: []
})
export class AsyncObservablePipeComponent {

  counter$: Observable<number>;
  
  constructor() {
    this.counter$ = Observable
      .interval(1000);
  }


}
