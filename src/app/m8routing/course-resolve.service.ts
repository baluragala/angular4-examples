import {Injectable} from '@angular/core';
import {CourseService} from "./course.service";
import {ActivatedRouteSnapshot} from "@angular/router";

@Injectable()
export class CourseResolveService {

  constructor(private courseService: CourseService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.courseService.getCourse(1);
  }
}
