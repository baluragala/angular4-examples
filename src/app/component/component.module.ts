import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentIndexComponent} from './component-index.component';
import {RouterModule} from '@angular/router';
import {componentRoutes} from './component.routes';
import {SimpleComponent} from './simple.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {ComposingComponent} from './composing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentRoutes)
  ],
  declarations: [ComponentIndexComponent, SimpleComponent, HeaderComponent, FooterComponent, ComposingComponent]
})
export class ComponentModule {
}
