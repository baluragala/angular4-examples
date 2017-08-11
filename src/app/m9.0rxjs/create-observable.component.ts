import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-create-observable',
  template: `
    <p>
      Observables
    </p>
    <p>From Array:
      {{fromArrayResult}}
    </p>
    <p>From Object:
      {{fromObjectResult | json}}
    </p>
    <p>From Range:
      {{fromRangeResult}}
    </p>
    <p>From Interval:
      {{fromIntervalResult}}
    </p>
    <p>From Promise:
      {{fromPromiseResult}}
    </p>

    <p>Map Operator:
      {{mapOperatorResult}}
    </p>

    <p>Filter Operator:
      {{filterOperatorResult}}
    </p>

    <p>flatMap Operator:
      {{flatMapOperatorResult}}
    </p>

    <p>forkJoin Operator:
      {{forkJoinOperatorResult | json }}
    </p>

  `,
  styles: []
})
export class CreateObservableComponent implements OnInit {

  fromArrayResult = '';
  fromObjectResult;
  fromRangeResult = '';
  fromIntervalResult = '';
  fromPromiseResult = '';
  mapOperatorResult = '';
  filterOperatorResult = '';
  flatMapOperatorResult = '';
  forkJoinOperatorResult;

  constructor() {
  }

  ngOnInit() {
    Observable
      .from([1, 2, 3, 4, 5])
      .subscribe(value => this.fromArrayResult += " " + value);

    Observable
      .of({title: 'Angular programming', author: 'zeolearn'})
      .subscribe(value => this.fromObjectResult = value);

    Observable
      .range(0, 4)
      .subscribe(value => this.fromRangeResult += " " + value);

    Observable
      .interval(1000)
      .take(10)
      .subscribe(value => this.fromIntervalResult += " " + value);

    Observable
      .fromPromise(Promise.resolve('Hello World'))
      .subscribe(result => this.fromPromiseResult = result);

    Observable
      .range(0, 4)
      .map((v) => v * 100)
      .subscribe((v) => this.mapOperatorResult += " " + v);


    Observable
      .range(0, 40)
      .filter((v) => v % 5 === 0)
      .subscribe((v) => this.filterOperatorResult += " " + v);

    Observable
      .of(1, 2, 3)
      .flatMap((i) => Observable.of(i, i * 2))
      .subscribe((v) => this.flatMapOperatorResult += " " + v);


    Observable
      .forkJoin(
        Observable.fromPromise(Promise.resolve(1)),
        Observable.of(2)
      ).subscribe((v) => this.forkJoinOperatorResult = v);

  }

}
