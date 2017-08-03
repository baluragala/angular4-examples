import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-imperative-navigation',
  template: `
    <div>
      <button class="btn btn-danger" (click)="navigate(1)">
        Named Outlets
      </button>
      <button class="btn btn-danger" (click)="navigate(2)">
        Params And Query Params
      </button>
    </div>
  `,
  styles: []
})
export class ImperativeNavigationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigate(i) {
    switch (i) {
      case 1:
        this.router.navigate(['/routing', 'authors', {outlets: {'list': ['authorsList'], 'detail': ['none']}}])
        break;
      case 2:
        this.router.navigate(['/routing','params-query-params', 'baluragla'], {
          queryParams: {
            'busy': true,
            'calendar': 'permitted'
          }
        });
        break;
    }
  }

}
