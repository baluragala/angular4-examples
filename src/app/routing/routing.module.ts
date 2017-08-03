import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routingRoutes} from './routing.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingRoutes)
  ],
  declarations: []
})
export class RoutingModule {
}
