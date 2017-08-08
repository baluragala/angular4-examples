import {Component, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';
import {CounterService} from '../shared/counter.service';

@Component({
  selector: 'app-component-level-provider',
  template: `
    <p>
      component-level-provider Works!
    </p>
    <app-component-level1-provider></app-component-level1-provider>
  `,
  styles: [],
  providers: [LoggerService]
})
export class ComponentLevelProviderComponent implements OnInit {

  constructor(private loggerService: LoggerService, private counterService: CounterService) {
    console.log(`ComponentLevelProviderComponent->LoggerService instance count ${LoggerService.instanceCount}`)
  }

  ngOnInit() {
  }

}
