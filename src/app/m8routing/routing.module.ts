import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routingRoutes} from './routing.routes';
import {Observable} from 'rxjs/Observable';
import {CourseResolveService} from './course-resolve.service';
import {CourseService} from './course.service';
import {AuthorizeGuardService} from './authorize-guard.service';
import {getProduct} from './get-product';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingRoutes)
  ],
  declarations: [],
  providers: [
    {
      provide: 'course',
      useValue: getProduct
    },
    CourseService,
    CourseResolveService,
    AuthorizeGuardService
  ]
})
export class RoutingModule {
}
