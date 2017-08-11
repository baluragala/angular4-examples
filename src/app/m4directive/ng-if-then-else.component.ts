import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if-then-else',
  template: `
    <h4>
      ng-if-else-then
    </h4>
    <div *ngIf="subscribed===true ; then unsubcribedTemplate else subcribedTemplate">
      
    </div>
    <ng-template #subcribedTemplate>
      <p>You are PRO member now!!</p>
    </ng-template>
    <ng-template #unsubcribedTemplate>
     <p>Subcribe to access great features</p>
    </ng-template>
    <button class="btn btn-warning" (click)="OnSubscribeToggle()">Click to {{subscribed===true ? "Unsubscribe" : "Subscribe" }}</button>
    
  `,
  styles: []
})
export class NgIfThenElseComponent implements OnInit {

  subscribed: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  OnSubscribeToggle() {
    console.log(this.subscribed);
    this.subscribed = !this.subscribed;
  }

}
