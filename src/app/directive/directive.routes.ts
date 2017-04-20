import {DirectiveIndexComponent} from "./directive-index.component";
import {Route} from "@angular/router";
import {NgForComponent} from "./ng-for.component";
import {NgIfComponent} from "./ng-if.component";
import {NgStyleComponent} from "./ng-style.component";
import {NgClassComponent} from "./ng-class.component";

export const directiveRoutes: [Route] = [
  {
    path: 'directive', component: DirectiveIndexComponent, children: [
    {path: 'ng-for', component: NgForComponent},
    {path: 'ng-if', component: NgIfComponent},
    {path: 'ng-style', component: NgStyleComponent},
    {path: 'ng-class', component: NgClassComponent}
  ]
  }
];
