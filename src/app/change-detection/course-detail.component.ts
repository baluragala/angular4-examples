import {Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-course-detail',
  template: `
    <h4>
      Course Detail
    </h4>
    <button class="btn btn-success" (click)="OnDetectChanges()">DetectChanges</button>
    <pre>{{ course | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailComponent implements OnInit {

  @Input() course;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  OnDetectChanges() {
    this.cd.detectChanges();
  }

}
