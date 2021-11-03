import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'places', component: PlaceTableComponent },
  { path: 'places/:id', component: PlaceDetailComponent },
  { path: '**', component: NotFoundComponent },
];
