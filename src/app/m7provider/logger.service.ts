import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  static instanceCount = 0;

  constructor() {
    console.log('LoggerService Instanced');
    LoggerService.instanceCount++;
  }

}
