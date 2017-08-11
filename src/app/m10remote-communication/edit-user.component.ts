import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DataService} from "./data.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: []
})
export class EditUserComponent implements OnInit {

  userForm;
  user;

  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramsMap => {
        console.log(paramsMap);
        this.dataService.getUserById(parseInt(paramsMap.get('id')))
          .subscribe(user => {
            this.user = user;
            this.userForm.patchValue(user);
          });
      }
    )
  }

  ngOnInit() {
    this.userForm = this.fb.group({
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

  update() {
    this.dataService.updateUser(this.user.id, this.userForm.value)
      .subscribe(user => {
          alert(JSON.stringify(user));
          this.userForm.reset();
        },
        error => alert(JSON.stringify(error))
      )
  }

}
