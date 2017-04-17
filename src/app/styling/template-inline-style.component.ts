import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-inline-style',
  template: `
    <style>
        p {
      font-size: 20px;
      font-weight: bold;
      padding: 5px;
      color: coral;
    }
    
    .note {
      text-decoration: underline;
      color: mediumvioletred;
    }
  </style>
  
    <h4>Template Inline Style:</h4>
    <p>
      This paragraph is styled using TEMPLATE INLINE styling
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
  styles: []
})
export class TemplateInlineStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
