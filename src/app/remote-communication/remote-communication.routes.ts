import {RemoteCommunicationIndexComponent} from './remote-communication-index.component';
import {DisplayComponent} from './display.component';
import {AddUserComponent} from "./add-user.component";
import {ManageUserComponent} from "./manage-user.component";
import {EditUserComponent} from "./edit-user.component";


export const remoteCommunicationRoutes = [
  {
    path: 'remote-communication', component: RemoteCommunicationIndexComponent,
    children: [
      {path: 'display', component: DisplayComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: 'manage-user', component: ManageUserComponent},
      {path: 'edit-user/:id', component: EditUserComponent}
    ]
  }
];
