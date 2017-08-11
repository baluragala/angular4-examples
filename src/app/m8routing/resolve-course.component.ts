import {Component, OnInit} from '@angular/core';
import {CourseService} from "./course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resolve-course',
  template: `

    <img *ngIf="!course" src="../../assets/Infinity.gif"/>

    <p *ngIf="course">
      Course : {{course | json}}
    </p>

  `,
  styles: [],
  providers: [CourseService]
})
export class ResolveCourseComponent implements OnInit {

  course;

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    //this.courseService.getCourse(1).subscribe(c => this.course = c)
    this.course = this.activatedRoute.snapshot.data['course'];
  }

}
