import {Injectable} from '@angular/core';

@Injectable()
export class AccountService {
  isPremium: boolean;

  constructor() {
  }

  setPremium(username, password) {
    if (username === 'zeo' && password === 'zeo') {
      this.isPremium = true;
    } else {
      this.isPremium = false;
    }
  }
}
