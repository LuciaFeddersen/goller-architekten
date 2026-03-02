import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Bauabschnitt {
  nummer: string;
  beschreibung: string[];
  finanzierung?: string;
  baukosten?: string;
  planung?: string;
  bauausfuehrung?: string;
}

interface Ansprechpartner {
  name: string;
  rolle: string;
  telefon?: string;
}

interface Projekt {
  titel: string;
  ort: string;
  architekt: string;
  adresse: string;
  anzeigeBild: string;
  bilder: string[];
  bauabschnitte: Bauabschnitt[];
  bauherr?: string;
  ansprechpartner?: Ansprechpartner[];
}

type KategorieKey = 'bildung' | 'soziales' | 'kultur';

@Component({
  selector: 'app-projekte-kategorie',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule],
  templateUrl: './projekte-kategorie.component.html',
})
export class ProjekteKategorieComponent implements OnInit {
  kategorieSlug!: KategorieKey;
  projekteInKategorie: Projekt[] = [];
  selectedProjekt!: Projekt;

  alleProjekte: Record<KategorieKey, Projekt[]> = {
    bildung: [
      {
        titel: 'Scharmützelsee-Grundschule',
        ort: 'Berlin Tempelhof-Schöneberg',
        architekt: 'Frank Goller Architekten',
        adresse: 'Hohenstaufenstraße 49, Berlin-Schöneberg',
        anzeigeBild: '/assets/images/projekte/bildung/Scharmützelsee-Grundschule/bild5.png',
        bilder: [
          '/assets/images/projekte/bildung/Scharmützelsee-Grundschule/bild1.png',
          '/assets/images/projekte/bildung/Scharmützelsee-Grundschule/bild2.png',
          '/assets/images/projekte/bildung/Scharmützelsee-Grundschule/bild3.png',
          '/assets/images/projekte/bildung/Scharmützelsee-Grundschule/bild4.png',
          '/assets/images/projekte/bildung/Scharmützelsee-Grundschule/bild5.png',
        ],
        bauabschnitte: [
          {
            nummer: '1. BA',
            beschreibung: [
              'Sanierung und Umbau zur Grundschule für den offenen Ganztagesbetrieb',
              'Umbau Souterrain für Mensanutzung mit Küche',
              'Bauwerkstrockenlegung',
              'Erweiterung der Lichtgräben',
              'Einbau von Brandschutztüren in allen Etagen'
            ],
            finanzierung: 'Förderprogramm IZBB und Mittel des Bezirks',
            baukosten: '1.985.000 Euro',
            planung: '2006',
            bauausfuehrung: '2006-07 / 2007-08'
          },
          {
            nummer: '2. BA',
            beschreibung: [
              'Sanierung und Umbau Schul- und Hortgebäude',
              'Umbau und Instandsetzung Hort- und Klassenräume',
              'Erneuerung der Sanitäranlagen',
              'Einbau von Brandschutztüren in allen Etagen'
            ],
            finanzierung: 'Förderprogramm IZBB und Mittel des Bezirks',
            baukosten: '1.074.000 Euro',
            planung: '2008',
            bauausfuehrung: '2008-09'
          },
          {
            nummer: '3. BA',
            beschreibung: [
              'Sanierung Souterrain West',
              'Umbau Souterrain für Unterricht Kunst und Werken',
              'Bauwerkstrockenlegung',
              'Erweiterung der Lichtgräben'
            ],
            finanzierung: 'offen',
            baukosten: '940.000 Euro',
            planung: '2008',
            bauausfuehrung: 'offen'
          },
          {
            nummer: '4. BA',
            beschreibung: [
              'Strangsanierung WC-Anlagen',
              'Einbau Behinderten WC ́s in allen Etagen',
              'Einbau Aufzug',
              'Umfassende Sanierung aller WC ́s',
              'Schadstoffsanierung'
            ],
            finanzierung: 'Förderprogramm SSSP',
            baukosten: '940.000 Euro',
            planung: '2016',
            bauausfuehrung: ''
          }
        ],
        bauherr: 'Bezirksamt Tempelhof-Schöneberg von Berlin',
        ansprechpartner: [
          { name: 'Hr. Garske', rolle: 'Bauamt', telefon: '90277 3265' },
          { name: 'Hr. Lelickens', rolle: 'Bauamt', telefon: '90277 3219' },
          { name: 'Fr. Geuer', rolle: 'Projektleitung', telefon: '90277 3558' }
        ]
      },
      {
        titel: 'Georg-Weerth-Sekundarschule',
        ort: 'Berlin Friedrichshain-Kreuzberg',
        architekt: 'Frank Goller Architekten',
        adresse: 'Eckertstraße 16a, Berlin-Friedrichshain',
        anzeigeBild: '/assets/images/projekte/bildung/Georg-Weerth-Sekundarschule/bild1.png',
        bilder: [
          '/assets/images/projekte/bildung/Georg-Weerth-Sekundarschule/bild1.png',
          '/assets/images/projekte/bildung/Georg-Weerth-Sekundarschule/bild2.png',
          '/assets/images/projekte/bildung/Georg-Weerth-Sekundarschule/bild3.png'
        ],
        bauabschnitte: [
          {
            nummer: '1. BA',
            beschreibung: [
              'Abdichtungs- und Rohbauarbeiten',
              'Vergrößerung Fenster',
              'Errichtung eines Lichtgrabens'
            ],
            planung: '1904-06 geplant',
            bauausfuehrung: '1906-08 erbaut'
          },
          {
            nummer: '2. BA',
            beschreibung: [
              'Errichtung neuer WAT-Räume im Souterrain',
              'Erneuerung Gerätschaften für die Lehrküche',
              'Brandschutzmaßnahmen'
            ],
            finanzierung: 'Förderung aus Mitteln des Schul- und Sport-anlagensanierungsprogramms',
            baukosten: '320.000 Euro / 820.000 Euro',
            planung: '2013',
            bauausfuehrung: '2015 / 2017-19'
          }
        ],
        bauherr: 'Bezirksamt Friedrichshain-Kreuzberg von Berlin, Umwelt, Verkehr, Grünflächen und Immobilienservice – FB Hochbauservice',
        ansprechpartner: [
          { name: 'Hr. Pietrek', rolle: 'Bauherr', telefon: '90295 2626' },
          { name: 'Fr. Hübner', rolle: 'Projektleitung', telefon: '90298 2965' },
          { name: 'Hr. Divolis', rolle: 'Bauleitung', telefon: '90298 2880' }
        ]
      }
    ],
    soziales: [],
    kultur: []
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') as KategorieKey;
      if (slug && this.alleProjekte[slug]) {
        this.kategorieSlug = slug;
        this.projekteInKategorie = this.alleProjekte[slug];
      } else {
        this.kategorieSlug = 'bildung';
        this.projekteInKategorie = this.alleProjekte['bildung'];
      }
      this.selectedProjekt = this.projekteInKategorie[0];
    });
  }

  selectProjekt(projekt: Projekt) {
    this.selectedProjekt = projekt;
  }

  onSelectChange(index: number) {
    if (this.projekteInKategorie?.[index]) {
      this.selectedProjekt = this.projekteInKategorie[index];
    }
  }

  goBack() {
    this.router.navigate(['/projekte']);
  }

  scrollLeft(carousel: HTMLElement) {
    carousel.scrollBy({ left: -carousel.offsetWidth / 3, behavior: 'smooth' });
  }

  scrollRight(carousel: HTMLElement) {
    carousel.scrollBy({ left: carousel.offsetWidth / 3, behavior: 'smooth' });
  }
}