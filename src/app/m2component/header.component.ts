import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p>
      This is header
    </p>
  `,
  styles: [`p{height: 40px;background-color: aquamarine ;padding: 5px}`]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
