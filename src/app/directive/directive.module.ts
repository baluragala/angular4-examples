import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectiveIndexComponent} from './directive-index.component';
import {NgForComponent} from './ng-for.component';
import {RouterModule} from "@angular/router";
import {directiveRoutes} from "./directive.routes";
import {NgIfComponent} from './ng-if.component';
import {NgStyleComponent} from './ng-style.component';
import {NgClassComponent} from './ng-class.component';
import {NgIfElseComponent} from './ng-if-else.component';
import {NgIfThenElseComponent} from './ng-if-then-else.component';
import {NgSwitchComponent} from './ng-switch.component';
import {DelayDirective} from './delay.directive';
import { CustomStructuralComponent } from './custom-structural.component';
import { ConfirmDirective } from './confirm.directive';
import { CustomAttributeComponent } from './custom-attribute.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(directiveRoutes)
  ],
  declarations: [DirectiveIndexComponent, NgForComponent, NgIfComponent, NgStyleComponent, NgClassComponent, NgIfElseComponent, NgIfThenElseComponent, NgSwitchComponent, DelayDirective, CustomStructuralComponent, ConfirmDirective, CustomAttributeComponent]
})
export class DirectiveModule {
}
