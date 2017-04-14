import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <h4>
      Property Binding [  ]
    </h4>
    <img 
    [src]="'https://angular.io/resources/images/logos/angular/angular.svg'"
    role="presentation"
    [style.width.px]=150
    />
    <hr/>
    <app-card [header]="header" [content]="content" [footer]="footer"></app-card>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {

  header: string = "This is header";
  content: any = {
    data: "This is data",
    weight: 250
  };
  footer: string = "This is footer";

  constructor() {
  }

  ngOnInit() {
  }

}

