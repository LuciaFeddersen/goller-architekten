import { Component } from '@angular/core';
import { FooterComponent } from './footer.component/footer.component';
import { HeaderComponent } from './header.component/header.component';
import { RouterOutlet } from '@angular/router';
import { MaintenanceComponent } from './maintenance-component/maintenance-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MaintenanceComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  maintenanceMode = true;
}
