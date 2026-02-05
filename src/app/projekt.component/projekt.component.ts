import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projekt',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink 
  ],
  templateUrl: './projekt.component.html',
})
export class ProjektComponent {}
