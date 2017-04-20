import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      This is footer
    </p>
  `,
  styles: [`p{height: 40px;background-color: antiquewhite;padding: 5px}`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
