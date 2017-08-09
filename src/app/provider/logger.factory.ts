import {AccountService} from './account.service';
import {PremiumLoggerService} from './premium-logger.service';
import {LoggerService} from './logger.service';

export const loggerFactory = (accountService: AccountService) => {
  console.log('loggerFactory called');
  if (accountService.isPremium) {
    return new PremiumLoggerService();
  } else {
    return new LoggerService();
  }
};
