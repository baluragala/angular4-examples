import {Injectable} from '@angular/core';

@Injectable()
export class PremiumLoggerService {

  static instanceCount = 0;

  constructor() {
    console.log('PremiumLoggerService Instanced');
    PremiumLoggerService.instanceCount++;
  }

}
