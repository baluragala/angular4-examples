import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index.component';
import {RouterModule} from "@angular/router";
import {ProductsComponent} from './products.component';
import {ProductItemComponent} from './product-item.component';
import {ProductService} from "./product.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'cc', component: IndexComponent
    }])
  ],
  declarations: [IndexComponent, ProductsComponent, ProductItemComponent],
  providers: [ProductService],

})
export class ComponentCommunicationModule {
}
