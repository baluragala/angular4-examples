import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {PipesModule} from "./pipes/pipes.module";
import {ExamplesIndexComponent} from './examples-index.component';
import {TemplateModule} from "./template/template.module";
import {ChangeDetectionModule} from "./change-detection/change-detection.module";
import {StylingModule} from "./styling/styling.module";
import {ComponentModule} from "./component/component.module";
import {DirectiveModule} from "./directive/directive.module";

@NgModule({
  declarations: [
    AppComponent,
    ExamplesIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipesModule,
    TemplateModule,
    ChangeDetectionModule,
    StylingModule,
    ComponentModule,
    DirectiveModule,
    RouterModule.forRoot([{path: '', component: ExamplesIndexComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
