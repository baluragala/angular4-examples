import {Component, OnInit, KeyValueDiffers} from '@angular/core';

@Component({
  selector: 'app-change-detection-on-push',
  template: `
    <h4>
      ChangeDetectionStrategy.OnPush
    </h4>
    <button class="btn btn-default" (click)="OnMutateCourse()">Mutate Course</button>
    <button class="btn btn-default" (click)="OnChangeCourse()">Change Course</button>
    <br/><br/>
    <pre class="source">{{course2|json}}</pre>
    <app-course-detail [course]="course1"></app-course-detail>
  `,
  styles: [`.source {
      background-color: beige
      }`]
})
export class ChangeDetectionOnPushComponent implements OnInit {

  course1: any;
  course2: any;

  ngOnInit() {
    this.course1 = {title: 'Learning Angular', author: 'baluragala'};
    this.course2 = this.course1;
  }

  OnMutateCourse() {
    console.log('OnMutateCourse');
    this.course1.title = 'Learning react';
    this.course1.author = 'zeolearn';
  }

  OnChangeCourse() {
    console.log('OnChangeCourse');
    this.course1 = {title: 'Learning Vue.js', author: 'chirstopher'};
    this.course2 = this.course1;
  }


}
