import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Projekt {
  slug: string;        // für die URL /routerLink
  titel: string;      
  ort?: string;       // optional, z.B. für die Anzeige des Projektstandorts
  dateiname?: string;  // optional, z.B. PDF-Datei
  bild?: string;       // optional, Pfad zum Projektbild
}

@Component({
  selector: 'app-projekt',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projekt.component.html',
})
export class ProjektComponent {

  aktuelleProjekte: Projekt[] = [
    { slug: 'wohnhaus-a', titel: 'Wohnhaus A', bild: 'assets/images/wohnhaus-a.jpg', dateiname: 'wohnhaus-a.pdf' },
    { slug: 'museum-b', titel: 'Museum B', bild: 'assets/images/museum-b.jpg', dateiname: 'museum-b.pdf' },
    { slug: 'buero-c', titel: 'Büro C', bild: 'assets/images/buero-c.jpg', dateiname: 'buero-c.pdf' },
  ];

  abgeschlosseneProjekte: { kategorie: string, projekte: Projekt[] }[] = [
    {
      kategorie: 'Schulen',
      projekte: [
        { slug: 'Hans-und-Hilde-Coppi-Gymnasium', titel: 'Hans-und-Hilde-Coppi-Gymnasium', ort: 'Berlin Lichtenberg', bild: 'assets/projekte/bilder/Hans-und-Hilde-Coppi-Gymnasium.png', dateiname: 'src/assets/projekte/pdf/Hans-und-Hilde-Coppi-Gymnasium.pdf' },
        { slug: 'Benjamin-Franklin-Oberschule', titel: 'Benjamin-Franklin-Oberschule', ort: 'Berlin Reinickendorf ', bild: 'assets/projekte/bilder/Benjamin-Franklin-Oberschule.png', dateiname: 'src/assets/projekte/pdf/Benjamin-Franklin-Oberschule.pdf' },
        { slug: 'Cauer-Grundschule', titel: 'Cauer-Grundschule', ort: 'Berlin Charlottenburg-Wilmersdorf', bild: 'assets/projekte/bilder/Cauer-Grundschule.png', dateiname: 'src/assets/projekte/pdf/Cauer-Grundschule.pdf' },
        { slug: 'Thomas-Mann-Grundschule', titel: 'Thomas-Mann-Grundschule', ort: 'Berlin Pankow', bild: 'assets/projekte/bilder/Thomas-Mann-Grundschule.png', dateiname: 'src/assets/projekte/pdf/Thomas-Mann-Grundschule.pdf' },
        { slug: 'Tesla-Gemeinschaftsschule', titel: 'Tesla-Gemeinschaftsschule', ort: 'Berlin Pankow', bild: 'assets/projekte/bilder/Tesla-Gemeinschaftsschule.png', dateiname: 'src/assets/projekte/pdf/Tesla-Gemeinschaftsschule.pdf' },
      ]
    },
    {
      kategorie: 'Kindertagesstätten',
      projekte: [
        { slug: 'Kindertagesstätte im Park Jungfernheide', titel: 'Kindertagesstätte im Park Jungfernheide', ort: 'Berlin Charlottenburg-Wilmersdorf', bild: 'src/assets/projekte/bilder/Kindertagesstätte im Park Jungfernheide.png', dateiname: 'src/assets/projekte/pdf/Kindertagesstätte im Park Jungfernheide.pdf' },
      ]
    }
  ];

}



