import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  template: `
    <h4>Inline Style:</h4>
    <p>
      This paragraph is styled using INLINE styling
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
}`]
})
export class InlineStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
