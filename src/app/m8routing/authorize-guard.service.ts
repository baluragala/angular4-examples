import {Component, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthorizeGuardService implements CanActivate, CanActivateChild, CanDeactivate<Component>, CanLoad {

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean
    | Observable<boolean> | Promise<boolean> {
    // your logic to decide activation of routes goes here
    return true;
  }

  canDeactivate(component: Component,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

}
