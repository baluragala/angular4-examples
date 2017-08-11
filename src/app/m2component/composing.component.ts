import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-composing',
  template: `
    <h4>
      Component Composition
    </h4>
    <app-header></app-header>
    <div class="body">This is body</div>
    <app-footer></app-footer>
  `,
  styles: [`.body{padding: 2px;height: 40px}`]
})
export class ComposingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
