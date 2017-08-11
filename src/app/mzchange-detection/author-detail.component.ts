import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-author-detail',
  template: `
    <h4>
      Author Detail
    </h4>
    <pre>{{ author | json }}</pre>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AuthorDetailComponent implements OnInit {

  @Input() author;

  constructor() {
  }

  ngOnInit() {
  }

}
