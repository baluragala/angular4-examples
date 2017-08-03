import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-order-form',
  templateUrl: './reactive-order-form.component.html',
  styles: []
})
export class ReactiveOrderFormComponent implements OnInit {

  orderForm: FormGroup;
  items: any[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: ['', [Validators.required, Validators.minLength(5)]],
      email: '',
      items: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  addItem(): void {
    const control = this.orderForm.get('items') as FormArray;
    control.push(this.createItem());
  }

  removeItem(i) {
    console.log(i);
    const control = <FormArray>this.orderForm.get('items');
    control.removeAt(i);
  }

  save() {
    console.log(this.orderForm.value);
  }

}
