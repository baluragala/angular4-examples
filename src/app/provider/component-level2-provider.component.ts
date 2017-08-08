import {Component, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-component-level2-provider',
  template: `
    <p>
      component-level2-provider Works!
    </p>
  `,
  styles: [],
  providers: [LoggerService]

})
export class ComponentLevel2ProviderComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
    console.log(`ComponentLevel2ProviderComponent->LoggerService instance count ${LoggerService.instanceCount}`)
  }

  ngOnInit() {
  }

}
