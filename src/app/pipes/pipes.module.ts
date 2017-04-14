import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsyncPromisePipeComponent} from "./async-promise-pipe.component";
import {PipesIndexComponent} from './pipes-index.component';
import {RouterModule} from '@angular/router';
import {AsyncObservablePipeComponent} from './async-observable-pipe.component';
import {CurrencyPipeComponent} from './currency-pipe.component';
import {DecimalPipeComponent} from './decimal-pipe.component';
import {DatePipeComponent} from './date-pipe.component';
import {I18nPluralPipeComponent} from './i18n-plural-pipe.component';
import {I18nSelectPipeComponent} from './i18n-select-pipe.component';
import {JsonPipeComponent} from './json-pipe.component';
import {SlicePipeComponent} from './slice-pipe.component';
import {LowerUpperTitlePipeComponent} from './lower-upper-title-pipe.component'
import {pipesRoutes} from "./pipes.routes";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pipesRoutes)
  ],
  declarations: [AsyncPromisePipeComponent, PipesIndexComponent, AsyncObservablePipeComponent, CurrencyPipeComponent, DecimalPipeComponent, DatePipeComponent, I18nPluralPipeComponent, I18nSelectPipeComponent, JsonPipeComponent, SlicePipeComponent, LowerUpperTitlePipeComponent],
  exports: [PipesIndexComponent]

})
export class PipesModule {
}
