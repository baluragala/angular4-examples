import {RoutingIndexComponent} from './routing-index.component';
import {AuthorsComponent} from './authors.component';
import {AuthorsListComponent} from './authors-list.component';
import {AuthorDetailComponent} from './author-detail.component';
import {RouteParamsComponent} from "./route-params.component";
import {ImperativeNavigationComponent} from "./imperative-navigation.component";
import {ResolveCourseComponent} from "./resolve-course.component";
import {CourseResolveService} from "./course-resolve.service";

export const routingRoutes = [
  {
    path: 'routing', component: RoutingIndexComponent, children: [
    {
      path: 'authors', component: AuthorsComponent, children: [
      {path: 'authorsList', component: AuthorsListComponent, outlet: 'list'},
      {path: ':id', component: AuthorDetailComponent, outlet: 'detail'}
    ]
    },
    {path: 'params-query-params/:username', component: RouteParamsComponent},
    {path: 'imperative', component: ImperativeNavigationComponent},
    {
      path: 'resolve', component: ResolveCourseComponent,
      /*resolve: { // simple usage by providing a DI token that has function as value
        course: 'course'
      }*/

      resolve: {course: CourseResolveService}
    },
  ]
  },
];
