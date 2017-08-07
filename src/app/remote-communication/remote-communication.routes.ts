import {RemoteCommunicationIndexComponent} from './remote-communication-index.component';
import {DisplayComponent} from './display.component';


export const remoteCommunicationRoutes = [
  {
    path: 'remote-communication', component: RemoteCommunicationIndexComponent,
    children: [
      {path: 'display', component: DisplayComponent}]
  }
];
