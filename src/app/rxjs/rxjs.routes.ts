import {RxjsIndexComponent} from "./rxjs-index.component";
import {CreateObservableComponent} from "./create-observable.component";
export const rxjsRoutes = [
  {
    path: 'rxjs', component: RxjsIndexComponent, children: [
    {path: 'create', component: CreateObservableComponent},
  ]
  },
];
