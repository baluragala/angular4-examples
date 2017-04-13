import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-i18n-plural-pipe',
  template: `
    <div>
      <fieldset>
        <legend>I18NPlural Pipe :</legend>
        <code>expression | i18nPlural:mapping</code>
        <br/><br/>
        <div>{{ messages.length | i18nPlural: messageMapping }}</div>
        <a href="https://angular.io/docs/ts/latest/api/common/index/I18nPluralPipe-pipe.html" target="_blank">Angular Doc</a>
      </fieldset>
    </div>
  `,
  styles: []
})
export class I18nPluralPipeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  messages: any[] = ['Message 1', 'Message 2', 'Message 3'];
  messageMapping: {[k: string]: string} = {'=0': 'No messages.', '=1': 'One message.', 'other': '# messages.'};

}

