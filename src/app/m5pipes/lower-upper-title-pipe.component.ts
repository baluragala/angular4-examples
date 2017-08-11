import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-upper-title-pipe',
  template: `
    <div>
      <fieldset>
        <legend>Lower, Upper And Title case Pipes :</legend>
        <code>string_expression | lowercase or uppercase or titlecase </code>
        <br/><br/>
        <pre>Lower</pre>
        <ul>
          {{message|lowercase}}
        </ul>
         <pre>Upper</pre>
        <ul>
          {{message|uppercase}}
        </ul>
         <pre>Title </pre>
        <ul>
          {{message|titlecase}}
        </ul>
      </fieldset>
    </div>
  `,
  styles: []
})
export class LowerUpperTitlePipeComponent implements OnInit {
   message:string='ANGULAR is amazingly Superb';
  constructor() { }

  ngOnInit() {
  }

}
