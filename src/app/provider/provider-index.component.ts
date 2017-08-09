import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';

@Component({
  selector: 'app-provider-index',
  templateUrl: './provider-index.component.html',
  styles: []
})
export class ProviderIndexComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
  }

  enablePremium() {
    this.accountService.setPremium('zeo', 'zeo');
  }

}
