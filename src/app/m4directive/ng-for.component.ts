import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <h4>
      *ngFor structural directive 
    </h4>
    <h5>Fruits</h5>
    <ul>
      <li *ngFor="let fruit of fruits;let i=index;let even=even;let odd=odd;let first=first;let last=last">
      <pre>index: {{i}} | {{fruit}} | even:{{even}} | odd:{{odd}} | last:{{last}} | first:{{first}}</pre>
      </li>
    </ul>
    <h5>Courses</h5>
     <ul>
      <li *ngFor="let course of courses;let i=index;let even=even;let odd=odd;let first=first;let last=last;trackBy:trackCourse">
      <pre>index: {{i}} | {{course | json}} | even:{{even}} | odd:{{odd}} | last:{{last}} | first:{{first}}</pre>
      </li>
    </ul>
  `,
  styles: []
})
export class NgForComponent implements OnInit {

  fruits: Array<string>;
  courses: Array<{id: number, title: string, author: string}>;

  constructor() {
  }

  ngOnInit() {
    this.fruits = ['Apple', 'Banana', 'Orange', 'Lychee'];
    this.courses = [
      {id: 1, title: 'Angular', author: 'Google'},
      {id: 2, title: 'React', author: 'Facebook'},
      {id: 3, title: 'React Native', author: 'Facebook'}
    ]
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
