import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { TeamComponent } from './team.component/team.component';
import { ServicesComponent } from './services.component/services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'projekte',
    loadComponent: () => import('./projekt.component/projekt.component').then(m => m.ProjektComponent)
  },
  {
    path: 'projekte/:slug',
    loadComponent: () => import('./projekte-kategorie/projekte-kategorie.component').then(m => m.ProjekteKategorieComponent)
  },
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '' }
];