import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Simple2WayBindingComponent} from './simple2-way-binding.component';
import {RouterModule} from '@angular/router';
import {formsRoutes} from './forms.routes';
import {FormsIndexComponent} from './forms-index.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShippingAddressFormComponent} from './template-shipping-address-form.component';
import {ShippingAddressReactiveFormComponent} from './reactive-shipping-address-form.component';
import { ReactiveOrderFormComponent } from './reactive-order-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(formsRoutes)
  ],
  declarations: [FormsIndexComponent,
    Simple2WayBindingComponent,
    ShippingAddressFormComponent,
    ShippingAddressReactiveFormComponent,
    ReactiveOrderFormComponent,
  ]
})

export class FormsExampleModule {
}
