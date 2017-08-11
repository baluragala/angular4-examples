import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shipping-address-form',
  templateUrl: './template-shipping-address-form.component.html',
  styles: [`.error {
    color: red
  }`, `td {
    padding: 20px;
  }`]
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

  save() {
    console.log(this.user);
  }

}
