import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routingRoutes} from './routing.routes';
import {Observable} from 'rxjs/Observable';
import {CourseResolveService} from './course-resolve.service';
import {CourseService} from './course.service';

const getProduct = () => {
  return Observable.of({
    id: 1,
    title: 'Angular',
    duration: '5',
  }).delay(3000);
}

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
    CourseResolveService
  ]
})
export class RoutingModule {
}
