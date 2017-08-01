import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-attribute',
  template: `
    <h4>
      Custom Attribute
    </h4>
    <button
      type="button"
      [appConfirm]="visitZeo"
      confirmMessage="Click ok to visit zeolearn.com/!">
      Visit Zeolearn
    </button>
  `,
  styles: []
})
export class CustomAttributeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  visitZeo() {
    location.href = 'http://zeolearn.com';
  }

}
