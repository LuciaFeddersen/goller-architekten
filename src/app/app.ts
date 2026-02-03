import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaintenanceComponent } from './maintenance-component/maintenance-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaintenanceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('goller-architekten');


}
