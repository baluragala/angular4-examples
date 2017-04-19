import {TemplateIndexComponent} from "./template-index.component";
import {InterpolationComponent} from "./interpolation.component";
import {PropertyBindingComponent} from "./property-binding.component";
import {ReferenceVariableComponent} from "./reference-variable.component";
import {EventBindingDefaultComponent} from "./event-binding-default.component";
import {EventBindingCustomComponent} from "./event-binding-custom.component";
import {TwoWayBindingComponent} from "./two-way-binding.component";
import {TwoWayBindingCustomComponent} from "./two-way-binding-custom.component";

export const templateRoutes = [
  {
    path: 'template', component: TemplateIndexComponent, children: [
    {path: 'interpolation', component: InterpolationComponent},
    {path: 'property', component: PropertyBindingComponent},
    {path: 'reference', component: ReferenceVariableComponent},
    {path: 'event-binding-default', component: EventBindingDefaultComponent},
    {path: 'event-binding-custom', component: EventBindingCustomComponent},
    {path: 'two-way-binding', component: TwoWayBindingComponent},
    {path: 'two-way-binding-custom', component: TwoWayBindingCustomComponent}
  ]
  },
];
