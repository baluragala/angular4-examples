import {ProviderIndexComponent} from './provider-index.component';
import {ComponentLevelProviderComponent} from './component-level-provider.component';

export const providerRoutes = [
  {
    path: 'providers', component: ProviderIndexComponent, children: [
    {path: 'component-level', component: ComponentLevelProviderComponent}
  ]
  }
]
