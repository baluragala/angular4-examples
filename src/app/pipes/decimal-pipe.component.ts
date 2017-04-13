import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  template: `
   <div>
   <fieldset>
  <legend>Decimal Pipe(number pipe) :</legend>
  <code> number_expression |
    number[:digitInfo(minIntegerDigits.minFractionDigits-maxFractionDigits)]
    </code>
    <br/>
    <br/>
    <p>e (no formatting): {{e}}</p>
    <p>e (3.1-5): {{e | number:'3.1-5'}}</p>
    <p>pi (no formatting): {{pi}}</p>
    <p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>
     </fieldset>
  </div>
  `,
  styles: []
})
export class DecimalPipeComponent implements OnInit {
  pi: number = 3.141592;
  e: number = 2.718281828459045;

  constructor() {
  }

  ngOnInit() {
  }

}
