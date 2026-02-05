import { Routes } from '@angular/router';
import { ProjektComponent } from './projekt.component/projekt.component';
import { HomeComponent } from './home.component/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'leistungen', component: LeistungenComponent },
  { path: 'projekte', component: ProjektComponent },
  //{ path: 'projekte/:slug', component: ProjektDetailComponent },
  //{ path: 'team', component: TeamComponent },
  //{ path: 'ueber-uns', component: UeberUnsComponent },
];
