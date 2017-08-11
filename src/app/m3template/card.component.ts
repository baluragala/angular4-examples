import {Component, Input} from "@angular/core";
@Component({
  selector: 'app-card',
  template: `
   <div>
      <h5>Header:</h5>
      <pre>{{header}}</pre>
   </div>
   <div>
      <h5>Body:</h5>
      <pre>{{body.data}}</pre>
   </div>
   <div>
      <h5>Footer:</h5>
      <pre>{{footer}}</pre>
   </div>
`
})
export class CardComponent {

  @Input() header;
  @Input('content') body;
  @Input() footer;

}
