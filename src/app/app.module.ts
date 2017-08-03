import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PipesModule} from './pipes/pipes.module';
import {ExamplesIndexComponent} from './examples-index.component';
import {TemplateModule} from './template/template.module';
import {ChangeDetectionModule} from './change-detection/change-detection.module';
import {StylingModule} from './styling/styling.module';
import {ComponentModule} from './component/component.module';
import {DirectiveModule} from './directive/directive.module';
import {FormsExampleModule} from './forms/forms.module';
import {RoutingIndexComponent} from './routing/routing-index.component';
import {AuthorsListComponent} from './routing/authors-list.component';
import {AuthorDetailComponent} from './routing/author-detail.component';
import {AuthorsComponent} from './routing/authors.component';
import {RoutingModule} from './routing/routing.module';
import { RouteParamsComponent } from './routing/route-params.component';
import { ImperativeNavigationComponent } from './routing/imperative-navigation.component';
import { ResolveCourseComponent } from './routing/resolve-course.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamplesIndexComponent,
    RoutingIndexComponent,
    AuthorsListComponent,
    AuthorDetailComponent,
    AuthorsComponent,
    RouteParamsComponent,
    ImperativeNavigationComponent,
    ResolveCourseComponent
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
    FormsExampleModule,
    RoutingModule,
    RouterModule.forRoot([{path: '', component: ExamplesIndexComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
