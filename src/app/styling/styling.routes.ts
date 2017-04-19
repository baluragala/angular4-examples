import {InlineStyleComponent} from "./inline-style.component";
import {StylingIndexComponent} from "./styling-index.component";
import {ExternalStyleComponent} from "./external-style.component";
import {TemplateInlineStyleComponent} from "./template-inline-style.component";
import {ViewEncapsulationNoneComponent} from "./view-encapsulation-none.component";
import {ViewEncapsulationEmulatedComponent} from "./view-encapsulation-emulated.component";
import {ViewEncapsulationNativeComponent} from "./view-encapsulation-native.component";

export const stylingRoutes = [{
  path: 'styling', component: StylingIndexComponent, children: [
    {path: 'inline', component: InlineStyleComponent},
    {path: 'external', component: ExternalStyleComponent},
    {path: 'template-inline', component: TemplateInlineStyleComponent},
    {path: 'view-encapsulation-none', component: ViewEncapsulationNoneComponent},
    {path: 'view-encapsulation-emulated', component: ViewEncapsulationEmulatedComponent},
    {path: 'view-encapsulation-native', component: ViewEncapsulationNativeComponent}
  ]
}];
