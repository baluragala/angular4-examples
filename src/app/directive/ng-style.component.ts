import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h4>
      NgStyle
    </h4>
    <p [ngStyle]="noteStyle">This paragraph is styled using NgStyle with property expression of type object</p>
    <p [ngStyle]="{'background-color':'gold','border':'2px dashed green'}">This paragraph is styled using NgStyle with inline object</p>
    <p [ngStyle]="{'background-color':background,'border':borderStyle}">This paragraph is styled using NgStyle with inline object(value expression)</p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  noteStyle: any = {backgroundColor: 'orange', border: '1px dashed blue'};
  background: string = 'yellow';
  borderStyle: string = "3px dashed purple";

  constructor() {
  }

  ngOnInit() {
  }

}
