import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PrivateGuard } from './guards/private.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [PrivateGuard] },
  { path: 'places', component: PlaceTableComponent },
  { path: 'places/:id', component: PlaceDetailComponent },
  // Carga perezosa
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  // { path: 'admin', children: adminRoutes },
  { path: '**', component: NotFoundComponent },
];
