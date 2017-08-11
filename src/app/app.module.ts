import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PipesModule} from './m5pipes/pipes.module';
import {ExamplesIndexComponent} from './examples-index.component';
import {TemplateModule} from './m3template/template.module';
import {ChangeDetectionModule} from './mzchange-detection/change-detection.module';
import {StylingModule} from './m2styling/styling.module';
import {ComponentModule} from './m2component/component.module';
import {DirectiveModule} from './m4directive/directive.module';
import {FormsExampleModule} from './m6forms/forms.module';
import {RoutingIndexComponent} from './m8routing/routing-index.component';
import {AuthorsListComponent} from './m8routing/authors-list.component';
import {AuthorDetailComponent} from './m8routing/author-detail.component';
import {AuthorsComponent} from './m8routing/authors.component';
import {RoutingModule} from './m8routing/routing.module';
import {RouteParamsComponent} from './m8routing/route-params.component';
import {ImperativeNavigationComponent} from './m8routing/imperative-navigation.component';
import {ResolveCourseComponent} from './m8routing/resolve-course.component';
import {ComponentCommunicationModule} from './m9.1component-communication/component-communication.module';
import {RemoteCommunicationModule} from './m10remote-communication/remote-communication.module';
import {ProviderModule} from './m7provider/provider.module';
import {SharedModule} from './mzshared/shared.module';
import {RxjsModule} from "./m9.0rxjs/rxjs.module";


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
    ComponentCommunicationModule,
    RemoteCommunicationModule,
    ProviderModule,
    SharedModule,
    RxjsModule,
    RouterModule.forRoot([{path: '', component: ExamplesIndexComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
