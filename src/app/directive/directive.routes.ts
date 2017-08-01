import {DirectiveIndexComponent} from "./directive-index.component";
import {Route} from "@angular/router";
import {NgForComponent} from "./ng-for.component";
import {NgIfComponent} from "./ng-if.component";
import {NgStyleComponent} from "./ng-style.component";
import {NgClassComponent} from "./ng-class.component";
import {NgIfElseComponent} from "./ng-if-else.component";
import {NgIfThenElseComponent} from "./ng-if-then-else.component";
import {NgSwitchComponent} from "./ng-switch.component";
import {CustomStructuralComponent} from "./custom-structural.component";
import {CustomAttributeComponent} from "./custom-attribute.component";

export const directiveRoutes: [Route] = [
  {
    path: 'directive', component: DirectiveIndexComponent, children: [
    {path: 'ng-for', component: NgForComponent},
    {path: 'ng-if', component: NgIfComponent},
    {path: 'ng-style', component: NgStyleComponent},
    {path: 'ng-class', component: NgClassComponent},
    {path: 'ng-if-else', component: NgIfElseComponent},
    {path: 'ng-if-then-else', component: NgIfThenElseComponent},
    {path: 'ng-switch', component: NgSwitchComponent},
    {path: 'custom-structural', component: CustomStructuralComponent},
    {path: 'custom-attribute', component: CustomAttributeComponent}
  ]
  }
];
