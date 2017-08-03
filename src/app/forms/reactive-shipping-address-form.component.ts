import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shipping-address-reactive-form',
  templateUrl: './reactive-shipping-address-form.component.html',
  styles: [`.error {
    color: red
  }`, `td {
    padding: 20px;
  }`]
})
export class ShippingAddressReactiveFormComponent implements OnInit {

  addressForm: FormGroup;

  constructor() {
  }


  ngOnInit() {
    this.addressForm = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      mobile: new FormControl('', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12)
      ]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl(),
        postalcode: new FormControl()
      })
    });
  }

  save() {
    console.log(this.addressForm);
  }

}
