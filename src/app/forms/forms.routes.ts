import {FormsIndexComponent} from './forms-index.component';
import {Simple2WayBindingComponent} from './simple2-way-binding.component';
import {ShippingAddressFormComponent} from './template-shipping-address-form.component';
import {ShippingAddressReactiveFormComponent} from './reactive-shipping-address-form.component';
import {ReactiveOrderFormComponent} from './reactive-order-form.component';

export const formsRoutes = [
  {
    path: 'forms', component: FormsIndexComponent, children: [
    {path: 'simple-2way-binding', component: Simple2WayBindingComponent},
    {path: 'template', component: ShippingAddressFormComponent},
    {path: 'reactive', component: ShippingAddressReactiveFormComponent},
    {path: 'reactive-form-array', component: ReactiveOrderFormComponent}
  ]
  }
];


