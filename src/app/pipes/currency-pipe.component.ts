import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  template: `<fieldset>
  <legend>Currency Pipe :</legend>
  <code>## number_expression |
    currency[:currencyCode[:symbolDisplay[:digitInfo(minIntegerDigits.minFractionDigits-maxFractionDigits)]]]
    ##</code>
  <div>
    <p>Apple: {{applePrice | currency:'GBP':false}}</p>
    <p>Ball: {{ballPrice | currency:'GBP':true:'4.2-2'}}</p>
  </div>
</fieldset>`,
  styles: []
})
export class CurrencyPipeComponent implements OnInit {

  applePrice: number = 0.259;
  ballPrice: number = 1.3495;

  constructor() {
  }

  ngOnInit() {
  }

}
