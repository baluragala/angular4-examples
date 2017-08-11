import {RxjsIndexComponent} from './rxjs-index.component';
import {CreateObservableComponent} from './create-observable.component';
import {Routes} from '@angular/router';

export const rxjsRoutes: Routes = [
  {
    path: 'rxjs', component: RxjsIndexComponent, children: [
    {path: 'create', component: CreateObservableComponent},
  ]
  },
];
