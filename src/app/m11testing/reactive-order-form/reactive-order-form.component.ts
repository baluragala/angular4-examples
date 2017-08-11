import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-order-form',
  templateUrl: './reactive-order-form.component.html',
  styleUrls: ['./reactive-order-form.component.css']
})
export class ReactiveOrderFormComponent implements OnInit {

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

  loadForm(strict: boolean) {
    if (strict) {
      this.addressForm.setValue({
        name: 'Sintec Media',
        mobile: '1234567890',
        address: {
          street: '123 street',
          city: 'Bangalore',
          postalcode: 560065
        }
      });
    } else {
      this.addressForm.patchValue({
        name: 'Sintec Media',
        address: {
          street: '123 street',
          city: 'Bangalore',
          postalcode: 560065
        }
      });
    }
  }

}
