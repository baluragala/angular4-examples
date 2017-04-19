import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  template: `
    <div class="col-md-6 todo-item">
      <button (click)="OnClicked()">click me</button>
      <h5>
        {{item.title}}
      </h5>
      <pre>
        {{item.detail}}
      </pre>
    </div>
  `,
  styles: [
    `.todo-item{
        border: 1px solid greenyellow;
    }`
  ]
})
export class ToDoItemComponent implements OnInit {
  @Input() item;
  @Output() itemClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  OnClicked() {
    console.log('clicked');
    this.itemClicked.emit(`Item with ${this.item.title} is clicked`);
  }

}
