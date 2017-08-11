import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveOrderFormComponent} from './reactive-order-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('ReactiveOrderFormComponent', () => {
  let component: ReactiveOrderFormComponent;
  let fixture: ComponentFixture<ReactiveOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveOrderFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.addressForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.addressForm.controls['name'];
    expect(name.valid).toBeFalsy();
  });

  it('name field validity should have required error', () => {
    let errors = {};
    const name = component.addressForm.controls['name'];
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('name field should be valid when set value', () => {
    let errors = {};
    const name = component.addressForm.controls['name'];
    name.setValue('zeolearn');
    errors = name.errors || {};
    expect(name.valid).toBeTruthy();
  });

  it('submitting a form emits a shipping address', () => {
    expect(component.addressForm.valid).toBeFalsy();
    component.loadForm(true);
    expect(component.addressForm.valid).toBeTruthy();
  });
});
