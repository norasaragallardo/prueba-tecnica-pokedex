import { Route } from '@angular/router';
import { PokedeskComponent } from './page/pokedesk/pokedesk.component';
import { PokedeskDetailComponent } from './page/pokedesk-detail/pokedesk-detail.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: PokedeskComponent
  },
  {
    path:'detail',
    component: PokedeskDetailComponent
  },
  { path: '**', component:  PokedeskComponent}
];
