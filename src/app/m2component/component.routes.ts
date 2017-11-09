import {ComponentIndexComponent} from './component-index.component';
import {SimpleComponent} from './simple.component';
import {ComposingComponent} from './composing.component';

export const componentRoutes = [
  {
    path: '', component: ComponentIndexComponent, children: [
    {path: 'simple', component: SimpleComponent},
    {path: 'composing', component: ComposingComponent}
  ]
  }
];
