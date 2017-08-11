import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-native',
  template: `
    <h4>View Encapsulation : Native</h4>
    <p>
      This paragraph is styled using INLINE styling (ViewEncapsulation.Native)
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
  encapsulation: ViewEncapsulation.Native
})
export class ViewEncapsulationNativeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
