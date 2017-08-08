import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderIndexComponent} from './provider-index.component';
import {ComponentLevelProviderComponent} from './component-level-provider.component';
import {LoggerService} from './logger.service';
import {RouterModule} from '@angular/router';
import {providerRoutes} from './provider.routes';
import {ComponentLevel1ProviderComponent} from './component-level1-provider.component';
import {ComponentLevel2ProviderComponent} from './component-level2-provider.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(providerRoutes)
  ],
  declarations: [ProviderIndexComponent, ComponentLevelProviderComponent,
    ComponentLevel1ProviderComponent, ComponentLevel2ProviderComponent],
  providers: [LoggerService]
})
export class ProviderModule {
}
