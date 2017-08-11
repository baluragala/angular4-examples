import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponentComponent} from './header-component/header-component.component';
import {ReactiveOrderFormComponent} from './reactive-order-form/reactive-order-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PowerofPipe } from './powerof.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HeaderComponentComponent, ReactiveOrderFormComponent, PowerofPipe]
})
export class TestingModule {
}
