import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateObservableComponent } from './create-observable.component';
import { RxjsIndexComponent } from './rxjs-index.component';
import {RouterModule} from "@angular/router";
import {rxjsRoutes} from "./rxjs.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rxjsRoutes)
  ],
  declarations: [CreateObservableComponent, RxjsIndexComponent]
})
export class RxjsModule { }
