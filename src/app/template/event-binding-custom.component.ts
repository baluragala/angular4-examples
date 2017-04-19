import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding-custom',
  template: `
    <h4>Child Item Event Data:</h4>
    <pre>{{data}}</pre>
    <app-to-do-item [item]="item1" (itemClicked)="OnTodoItemClicked($event)"></app-to-do-item>
    <app-to-do-item [item]="item2" (itemClicked)="OnTodoItemClicked($event)"></app-to-do-item>
  `,
  styles: []
})
export class EventBindingCustomComponent implements OnInit {

  data: string = "I disappear when child event data is received";

  item1:{title:string,detail:string} = {title:"Learn Typescript", detail:"Typescript is pre-req for angular"};
  item2:{title:string,detail:string} = {title:"Learn ES6", detail:"ES6 is pre-req for react"};

  constructor() {
  }

  ngOnInit() {
  }

  OnTodoItemClicked(event) {
    this.data = event;
  }

}
