import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reference-variable',
  template: `
    <h4>
      Template Reference Variables
    </h4>
    <p>Define variable #message:</p>
    <p #message>This is a paragraph !!!</p>
    <pre>{{ message.textContent  }}</pre>
    <hr/>
    <app-card #card [header]="'Wah Angular!'" [content]="{}"  style="border:5px solid darkred"></app-card>
    <p>Header input property from app-card compoent: </p><pre>{{ card.header }}</pre>
  `,
  styles: []
})
export class ReferenceVariableComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
