import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shipping-address-form',
  templateUrl: './template-shipping-address-form.component.html',
  styles: []
})
export class ShippingAddressFormComponent implements OnInit {
  user;

  @ViewChild('addressForm') addressForm: NgForm;

  constructor() {
  }

  ngOnInit() {
    this.user = {
      name: '',
      mobile: '',
      address: {
        street: '',
        city: '',
        postalcode: ''
      }
    };
  }

  save(model) {
    console.log(this.user);
  }

}
