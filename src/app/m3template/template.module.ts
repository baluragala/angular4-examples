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
import { EventBindingCustomComponent } from './event-binding-custom.component';
import { ToDoItemComponent } from './to-do-item.component';
import { TwoWayBindingComponent } from './two-way-binding.component';
import {FormsModule} from "@angular/forms";
import { TwoWayBindingCustomComponent } from './two-way-binding-custom.component';
import { TwoWayBindingCustomCounterComponent } from './two-way-binding-custom-counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(templateRoutes)
  ],
  declarations: [TemplateIndexComponent, InterpolationComponent, PropertyBindingComponent,CardComponent, ReferenceVariableComponent, EventBindingDefaultComponent, EventBindingCustomComponent, ToDoItemComponent, TwoWayBindingComponent, TwoWayBindingCustomComponent, TwoWayBindingCustomCounterComponent]
})
export class TemplateModule {
}
