import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CourseService {

  constructor() {
  }

  getCourse(id) {
    return Observable.of({
      id: id,
      title: 'Angular',
      duration: '5',
    }).delay(3000);
  }

}
