import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-value-provider',
  template: `
    <p>
      value-provider Works!
    </p>
  `,
  styles: []
})
export class ValueProviderComponent implements OnInit {

  constructor(@Inject('API_KEY') private apiKey: string) {
    console.log(this.apiKey);
  }

  ngOnInit() {
  }

}
