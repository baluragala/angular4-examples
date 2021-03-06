import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx"

@Component({
  selector: 'app-async-observable-pipe',
  template: `
  <fieldset>
    <legend>Async Observable :</legend>
    <code>promise or observable expression | async </code>
    <br/><br/>
    <h5>
      Count: {{counter$ | async}}
    </h5>
  </fieldset>
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
