import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select-pipe',
  template: `
    <div>
      <fieldset>
        <legend>I18NSelect Pipe :</legend>
        <code>expression | i18nSelect:mapping</code>
        <br/><br/>
        <div>{{gender | i18nSelect: inviteMap}} </div>
        <a href="https://angular.io/docs/ts/latest/api/common/index/I18nSelectPipe-pipe.html" target="_blank">Angular Doc</a>
    </fieldset>
    </div>
  `,
  styles: []
})
export class I18nSelectPipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};

}
