import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeDetectionIndexComponent} from './change-detection-index.component';
import { ChangeDetectionDefaultComponent } from './change-detection-default.component';
import { ChangeDetectionOnPushComponent } from './change-detection-on-push.component';
import {RouterModule} from "@angular/router";
import {changeDetectionRoutes} from "./change-detection.routes";
import { CourseDetailComponent } from './course-detail.component';
import { AuthorDetailComponent } from './author-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(changeDetectionRoutes)
  ],
  declarations: [ChangeDetectionIndexComponent, ChangeDetectionDefaultComponent, ChangeDetectionOnPushComponent, CourseDetailComponent, AuthorDetailComponent]
})
export class ChangeDetectionModule {
}
