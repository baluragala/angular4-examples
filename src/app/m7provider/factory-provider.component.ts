import {Component, OnInit} from '@angular/core';
import {PremiumLoggerService} from './premium-logger.service';

@Component({
  selector: 'app-factory-provider',
  template: `<p>Factory Provider Component</p>`,
  styles: []
})
export class FactoryProviderComponent implements OnInit {

  constructor(private logger: PremiumLoggerService) {
  }

  ngOnInit() {
  }

}
