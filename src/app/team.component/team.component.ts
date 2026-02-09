import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role?: string;
  since: number;
  image?: string;
}

@Component({
  selector: 'app-team-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  planung: TeamMember[] = [
    { name: 'Fatma Cumur', since: 2021, image: 'cumur.jpg' },
    { name: 'Clara Kanbay', since: 2022, image: 'kanbay.jpg' },
    { name: 'Julia Goller', since: 2022, image: 'goller.jpg' },
  ];

  bauleitung: TeamMember[] = [
    { name: 'Herr Feddersen', since: 2005, image: 'feddersen.jpg' },
    { name: 'Herr Wiesner', since: 2009, image: 'wiesner.jpg' },
    { name: 'Herr Rott', since: 2008, image: 'rott.jpg' },
  ];

  assistenz: TeamMember[] = [
    { name: 'Frau Höfkes', since: 2008, image: 'hoefkes.jpg' },
  ];

}
