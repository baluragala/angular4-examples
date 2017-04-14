import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateIndexComponent} from './template-index.component';
import {RouterModule} from "@angular/router";
import {templateRoutes} from "./template.routes";
import { InterpolationComponent } from './interpolation.component';
import { PropertyBindingComponent } from './property-binding.component';
import {CardComponent} from "./card.component";
import { ReferenceVariableComponent } from './reference-variable.component';
import { EventBindingDefaultComponent } from './event-binding-default.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(templateRoutes)
  ],
  declarations: [TemplateIndexComponent, InterpolationComponent, PropertyBindingComponent,CardComponent, ReferenceVariableComponent, EventBindingDefaultComponent]
})
export class TemplateModule {
}
