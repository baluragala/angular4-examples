import {ChangeDetectionIndexComponent} from "./change-detection-index.component";
import {ChangeDetectionDefaultComponent} from "./change-detection-default.component";
import {ChangeDetectionOnPushComponent} from "./change-detection-on-push.component";
export const changeDetectionRoutes = [
  {
    path: 'change-detection', component: ChangeDetectionIndexComponent, children: [
    {path: 'default', component: ChangeDetectionDefaultComponent},
    {path: 'on-push', component: ChangeDetectionOnPushComponent}
  ]
  },
];
