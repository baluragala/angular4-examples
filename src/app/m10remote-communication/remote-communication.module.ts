import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {DisplayComponent} from './display.component';
import {RouterModule} from '@angular/router';
import {remoteCommunicationRoutes} from './remote-communication.routes';
import {RemoteCommunicationIndexComponent} from './remote-communication-index.component';
import {AddUserComponent} from './add-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DataService} from "./data.service";
import { ManageUserComponent } from './manage-user.component';
import { EditUserComponent } from './edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(remoteCommunicationRoutes)
  ],
  declarations: [DisplayComponent, RemoteCommunicationIndexComponent, AddUserComponent, ManageUserComponent, EditUserComponent],
  providers: [
    {provide: 'API_ENDPOINT', useValue: 'http://localhost:3000'},
    {provide: DataService, useClass: DataService}
  ]
})
export class RemoteCommunicationModule {
}
