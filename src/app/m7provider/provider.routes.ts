import {ProviderIndexComponent} from './provider-index.component';
import {ComponentLevelProviderComponent} from './component-level-provider.component';
import {ValueProviderComponent} from './value-provider.component';
import {FactoryProviderComponent} from './factory-provider.component';

export const providerRoutes = [
  {
    path: 'providers', component: ProviderIndexComponent, children: [
    {path: 'component-level', component: ComponentLevelProviderComponent},
    {path: 'value', component: ValueProviderComponent},
    {path: 'factory', component: FactoryProviderComponent}
  ]
  }
];
