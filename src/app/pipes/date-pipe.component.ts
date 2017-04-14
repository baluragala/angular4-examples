import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  template: `<div>
<fieldset>
  <legend>Date Pipe :</legend>
  <code> date_expression | date[:format] </code>
  <br/><br/>
    <p>Today is {{today | date}}</p>
    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
    <p>The time is {{today | date:'jmZ'}}</p>
    <p>Format : Medium &nbsp;&nbsp; {{today | date:'medium'}}</p>
    <a href="https://angular.io/docs/ts/latest/api/common/index/DatePipe-pipe.html" target="_blank">Angular Doc</a>
  </fieldset>
  </div>
`
})
export class DatePipeComponent {
  today: number = Date.now();
}
