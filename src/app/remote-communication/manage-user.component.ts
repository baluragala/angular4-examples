import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styles: []
})
export class ManageUserComponent implements OnInit {

  users;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      users => this.users = users,
      error => {
        alert('Somthing went wrong.');
        console.error(error);
      }
    )
  }

  edit(userId) {
    console.log(userId);
    this.router.navigate(['remote-communication', 'edit-user', userId])
  }

  delete(userId) {
    this.dataService.deleteUser(userId)
      .subscribe(response => {
        this.dataService.getUsers().subscribe(
          users => this.users = users,
          error => {
            alert('Somthing went wrong.');
            console.error(error);
          }
        )
      })
  }

}
