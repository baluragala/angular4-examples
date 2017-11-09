import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderIndexComponent} from './provider-index.component';
import {ComponentLevelProviderComponent} from './component-level-provider.component';
import {LoggerService} from './logger.service';
import {RouterModule} from '@angular/router';
import {providerRoutes} from './provider.routes';
import {ComponentLevel1ProviderComponent} from './component-level1-provider.component';
import {ComponentLevel2ProviderComponent} from './component-level2-provider.component';
import {SharedModule} from '../mzshared/shared.module';
import {AccountService} from './account.service';
import {PremiumLoggerService} from './premium-logger.service';
import {loggerFactory} from './logger.factory';
import { ValueProviderComponent } from './value-provider.component';
import { FactoryProviderComponent } from './factory-provider.component';

const API_KEY = 'API_KEY'
const API_KEY_VALUE = 'se3%432yGt56)6*rfe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(providerRoutes)
  ],
  declarations: [ProviderIndexComponent, ComponentLevelProviderComponent,
    ComponentLevel1ProviderComponent, ComponentLevel2ProviderComponent, ValueProviderComponent, FactoryProviderComponent],
  providers: [
    AccountService,
    LoggerService,
    {
      provide: PremiumLoggerService,
      useFactory: loggerFactory,
      deps: [AccountService]
    },
    {provide: API_KEY, useValue: API_KEY_VALUE},
  ]
})
export class ProviderModule {
}
