import {RoutingIndexComponent} from './routing-index.component';
import {AuthorsComponent} from './authors.component';
import {AuthorsListComponent} from './authors-list.component';
import {AuthorDetailComponent} from './author-detail.component';

export const routingRoutes = [
  {
    path: 'routing', component: RoutingIndexComponent, children: [
    {
      path: 'authors', component: AuthorsComponent, children: [
      {path: 'authorsList', component: AuthorsListComponent, outlet: 'list'},
      {path: ':id', component: AuthorDetailComponent, outlet: 'detail'}
    ]
    }
  ]
  },
];
