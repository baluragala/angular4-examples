import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  template: `
    <div>
      <fieldset>
        <legend>Json Pipe :</legend>
        <code>expression | json</code>
        <br/><br/>
        <p>Without JSON pipe:</p>
        <pre>{{object}}</pre>
        <p>With JSON pipe:</p>
        <pre>{{object | json}}</pre>
      </fieldset>
  </div>
`
})
export class JsonPipeComponent {
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
