import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DataService} from "./data.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent implements OnInit {

  registrationFrom;

  constructor(private fb: FormBuilder, private dataService: DataService) {
  }

  ngOnInit() {
    this.registrationFrom = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      address: this.fb.group({
        street: '',
        city: '',
        postalcode: ''
      })
    })
  }

  save() {
    this.dataService.saveUser(this.registrationFrom.value)
      .subscribe(user => {
          alert(JSON.stringify(user));
          this.registrationFrom.reset();
        },
        error => alert(JSON.stringify(error))
      )
  }

}
