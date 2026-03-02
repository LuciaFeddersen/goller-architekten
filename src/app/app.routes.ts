import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { TeamComponent } from './team.component/team.component';
import { ServicesComponent } from './services.component/services.component';

export const routes: Routes = [
  // Home
  { path: '', component: HomeComponent },

  // Services
  { path: 'services', component: ServicesComponent },

  // Projekte Übersicht (Lazy Loaded Standalone Component)
  {
    path: 'projekte',
    loadComponent: () =>
      import('./projekt.component/projekt.component')
        .then(m => m.ProjektComponent)
  },

  // Kategorie-Seite (Lazy Loaded)
  {
    path: 'projekte/:slug',
    loadComponent: () =>
      import('./projekte-kategorie/projekte-kategorie.component')
        .then(m => m.ProjekteKategorieComponent),
    data: { renderMode: 'client' }
  },

  // Team
  { path: 'team', component: TeamComponent },

  // Fallback
  { path: '**', redirectTo: '' }
];