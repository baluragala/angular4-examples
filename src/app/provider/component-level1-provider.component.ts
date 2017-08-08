import {Component, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-component-level1-provider',
  template: `
    <p>
      component-level1-provider Works!
    </p>
    <app-component-level2-provider></app-component-level2-provider>
  `,
  styles: [],
  providers: [LoggerService]
})
export class ComponentLevel1ProviderComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
    console.log(`ComponentLevel1ProviderComponent->LoggerService instance count ${LoggerService.instanceCount}`)
  }

  ngOnInit() {
  }

}
