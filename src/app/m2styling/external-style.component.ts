import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-style',
  template: `
    <h4>External Style:</h4>
    <p>
      This paragraph is styled using EXTERNAL styling
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
  styleUrls: ['./external-style.component.css']
})
export class ExternalStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
