import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {DisplayComponent} from './display.component';
import {RouterModule} from '@angular/router';
import {remoteCommunicationRoutes} from './remote-communication.routes';
import {RemoteCommunicationIndexComponent} from './remote-communication-index.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(remoteCommunicationRoutes)
  ],
  declarations: [DisplayComponent, RemoteCommunicationIndexComponent],
  providers: [
    {provide: 'API_ENDPOINT', useValue: 'http://localhost:3000'}
  ]
})
export class RemoteCommunicationModule {
}
