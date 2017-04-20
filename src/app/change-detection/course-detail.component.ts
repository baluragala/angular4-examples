import {
  Component, OnInit, Input, ChangeDetectionStrategy, DoCheck,
  KeyValueDiffers
} from '@angular/core';

@Component({
  selector: 'app-course-detail',
  template: `
    <div (mouseenter)="OnMouseEnter($event)">
      <h4>
        Course Detail
      </h4>
      <button class="btn btn-success" (click)="OnDetectChanges()">DetectChanges</button>
      <pre>{{ course | json }}</pre>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailComponent implements OnInit,DoCheck {

  @Input() course;
  differ;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find(Object).create();
  }

  OnMouseEnter(e) {
    console.log(e);
  }

  ngOnInit() {
  }

  OnDetectChanges() {
  }

  ngDoCheck(): void {
    console.log(this.course);

    var changes = this.differ.diff(this.course);

    if (changes) {
      console.log('changes detected');
      changes.forEachChangedItem(r => console.log('changed ', r.currentValue, r));
      changes.forEachAddedItem(r => console.log('added ' + r.currentValue, r));
      changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
    } else {
      console.log('nothing changed');
    }
  }

}
