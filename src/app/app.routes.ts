import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { TeamComponent } from './team.component/team.component';
import { ServicesComponent } from './services.component/services.component';
import { ProjektComponent } from './projekt.component/projekt.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projekte', component: ProjektComponent },
  { path: 'projekt', loadComponent: () =>
      import('./projekt-detail.component/projekt-detail.component')
        .then(m => m.ProjektDetailComponent)
  },
  { path: 'team', component: TeamComponent },
];


