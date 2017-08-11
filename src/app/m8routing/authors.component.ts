import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-authors',
  template: `
    <h3>Authors</h3>
    <div class="row">
      <div class="col-md-6">
        <router-outlet name="list"></router-outlet>
      </div>
      <div class="col-md-6">
        <router-outlet name="detail"></router-outlet>
      </div>
    </div>
    
  `,
  styles: []
})
export class AuthorsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }

}
