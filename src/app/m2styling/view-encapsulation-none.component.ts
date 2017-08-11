import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-none',
  template: `
    <h4>View Encapsulation : None</h4>
    <p>
      This paragraph is styled using INLINE styling (ViewEncapsulation.None)
    </p>
    <pre>
    p {{ '{' }}
     font-size: 20px;
     font-weight: bold;
     padding: 5px;
     color: coral;
    {{ '}' }}
   </pre>
   <h6 class='note'>See what happens in the head section of html generated</h6>
  `,
  styles: [`p{
   font-size: 20px;
   font-weight: bold;
   padding: 5px;
   color: coral;
}`, `.note {
     text-decoration: underline;
     color:mediumvioletred;
}`],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationNoneComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
