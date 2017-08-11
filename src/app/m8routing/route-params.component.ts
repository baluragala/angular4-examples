import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-route-params',
  template: `
    <div class="col-md-6">
      <pre>
      {{params | json }}
    </pre>
    </div>
    <div class="col-md-6">
      <pre>
      {{queryParams | json }}
    </pre>
    </div>
  `,
  styles: []
})
export class RouteParamsComponent implements OnInit {

  params;
  queryParams;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.params = params)
    this.activatedRoute.queryParamMap.subscribe(queryParams => this.queryParams = queryParams)
  }

  ngOnInit() {
  }

}
