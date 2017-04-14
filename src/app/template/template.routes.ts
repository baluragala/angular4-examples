import {TemplateIndexComponent} from "./template-index.component";
import {InterpolationComponent} from "./interpolation.component";
import {PropertyBindingComponent} from "./property-binding.component";
import {ReferenceVariableComponent} from "./reference-variable.component";

export const templateRoutes = [
  {
    path: 'template', component: TemplateIndexComponent, children: [
    {path: 'interpolation', component: InterpolationComponent},
    {path: 'property', component: PropertyBindingComponent},
    {path: 'reference', component: ReferenceVariableComponent}
  ]
  },
];
