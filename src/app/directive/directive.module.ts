import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIndexComponent } from './directive-index.component';
import { NgForComponent } from './ng-for.component';
import {RouterModule} from "@angular/router";
import {directiveRoutes} from "./directive.routes";
import { NgIfComponent } from './ng-if.component';
import { NgStyleComponent } from './ng-style.component';
import { NgClassComponent } from './ng-class.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(directiveRoutes)
  ],
  declarations: [DirectiveIndexComponent, NgForComponent, NgIfComponent, NgStyleComponent, NgClassComponent]
})
export class DirectiveModule { }
