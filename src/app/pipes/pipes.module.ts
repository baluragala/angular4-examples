import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsyncPromisePipeComponent} from "./async-promise-pipe.component";
import {PipesIndexComponent} from './pipes-index.component';
import {RouterModule} from '@angular/router';
import {AsyncObservablePipeComponent} from './async-observable-pipe.component';
import {CurrencyPipeComponent} from './currency-pipe.component';
import {DecimalPipeComponent} from './decimal-pipe.component';
import {DatePipeComponent} from './date-pipe.component';
import { I18nPluralPipeComponent } from './i18n-plural-pipe.component';
import { I18nSelectPipeComponent } from './i18n-select-pipe.component';
import { JsonPipeComponent } from './json-pipe.component';
import { SlicePipeComponent } from './slice-pipe.component';
import { LowerUpperTitlePipeComponent } from './lower-upper-title-pipe.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'pipes', component:PipesIndexComponent ,children: [
        {path: 'async-promise', component: AsyncPromisePipeComponent},
        {path: 'async-observable', component: AsyncObservablePipeComponent},
        {path: 'currency', component: CurrencyPipeComponent},
        {path: 'decimal', component: DecimalPipeComponent},
        {path: 'date', component: DatePipeComponent},
        {path: 'i18nplural', component: I18nPluralPipeComponent},
        {path: 'i18nselect', component: I18nSelectPipeComponent},
        {path: 'json', component: JsonPipeComponent},
        {path: 'slice', component: SlicePipeComponent},
        {path: 'case', component: LowerUpperTitlePipeComponent}
      ]
      }
    ])
  ],
  declarations: [AsyncPromisePipeComponent, PipesIndexComponent, AsyncObservablePipeComponent, CurrencyPipeComponent, DecimalPipeComponent, DatePipeComponent, I18nPluralPipeComponent, I18nSelectPipeComponent, JsonPipeComponent, SlicePipeComponent, LowerUpperTitlePipeComponent],
  exports: [PipesIndexComponent]

})
export class PipesModule {
}
