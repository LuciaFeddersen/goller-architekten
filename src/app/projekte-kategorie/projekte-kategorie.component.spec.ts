import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Projekt {
  titel: string;
  ort: string;
  bild: string;
  beschreibung: string[];
}

@Component({
  selector: 'app-projekte-kategorie',
  templateUrl: './projekte-kategorie.component.html',
  styleUrls: ['./projekte-kategorie.component.css'],
})
export class ProjekteKategorieComponent implements OnInit {

  kategorieSlug: string = '';
  projekteInKategorie: Projekt[] = [];
  selectedProjekt!: Projekt;

  // 🔥 WICHTIG: Index Signature erlaubt string Zugriff
  alleProjekte: { [key: string]: Projekt[] } = {
    wettbewerbe: [
      {
        titel: 'Projekt A',
        ort: 'Berlin',
        bild: '/assets/projektA.jpg',
        beschreibung: ['Beschreibung Projekt A']
      }
    ],
    bauprojekte: [
      {
        titel: 'Projekt B',
        ort: 'Hamburg',
        bild: '/assets/projektB.jpg',
        beschreibung: ['Beschreibung Projekt B']
      }
    ],
    sanierungen: [
      {
        titel: 'Projekt C',
        ort: 'München',
        bild: '/assets/projektC.jpg',
        beschreibung: ['Beschreibung Projekt C']
      }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.kategorieSlug = this.route.snapshot.params['slug'];

    if (this.alleProjekte[this.kategorieSlug]) {
      this.projekteInKategorie = this.alleProjekte[this.kategorieSlug];
      this.selectedProjekt = this.projekteInKategorie[0];
    } else {
      // Fallback
      this.projekteInKategorie = this.alleProjekte['wettbewerbe'];
      this.selectedProjekt = this.projekteInKategorie[0];
    }
  }

  selectProjekt(projekt: Projekt) {
    this.selectedProjekt = projekt;
  }
}