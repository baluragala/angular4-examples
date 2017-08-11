import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {stylingRoutes} from "./styling.routes";
import { StylingIndexComponent } from './styling-index.component';
import { InlineStyleComponent } from './inline-style.component';
import { ExternalStyleComponent } from './external-style.component';
import { TemplateInlineStyleComponent } from './template-inline-style.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated.component';
import { ViewEncapsulationNativeComponent } from './view-encapsulation-native.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(stylingRoutes)
  ],
  declarations: [StylingIndexComponent, InlineStyleComponent, ExternalStyleComponent, TemplateInlineStyleComponent, ViewEncapsulationNoneComponent, ViewEncapsulationEmulatedComponent, ViewEncapsulationNativeComponent]
})
export class StylingModule { }
