import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  template: `
    <div>
      <fieldset>
        <legend>Json Pipe :</legend>
        <code>array_or_string_expression | slice:start[:end]</code>
        <br/><br/>
        <pre>Array</pre>
        <ul>
          <li *ngFor="let i of fruits | slice:1:3">{{i}}</li>
        </ul>
        
        <pre>String</pre>
        <ul>
          {{message|slice:1:5}}
        </ul>
      </fieldset>
    </div>
`
})
export class SlicePipeComponent {
  fruits: string[] = ['apple', 'banana', 'chikko', 'dragon fruit'];
  message: string = 'Awesome';
}
