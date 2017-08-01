import {Component, OnInit} from '@angular/core';
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-ng-if-else',
  template: `
    <h4>
      ng-if-else
    </h4>
    <div *ngIf="subscribed===false; else subcribedTemplate;">
      <p>Subcribe to access great features</p>
    </div>
    <ng-template #subcribedTemplate>
      <p>You are PRO member now!!</p>
    </ng-template>
    <button class="btn btn-warning" (click)="OnSubscribeToggle()">Click to {{subscribed ? "Unsubscribe" : "Subscribe" }}</button>
  `,
  styles: []
})
export class NgIfElseComponent implements OnInit {

  subscribed: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  OnSubscribeToggle() {
    console.log(this.subscribed);
    this.subscribed = !this.subscribed;
  }

}
