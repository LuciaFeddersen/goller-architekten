import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Kategorie {
  titel: string;
  bild: string;
  beschreibung: string;
  slug: string;
}

@Component({
  selector: 'app-projekt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css'],
})
export class ProjektComponent implements OnInit {
  projektKategorien: Kategorie[] = [
    { titel: 'Bildung', bild: '/assets/bildung.jpg', beschreibung: 'Unsere Bildungsprojekte', slug: 'bildung' },
    { titel: 'Soziales', bild: '/assets/soziales.jpg', beschreibung: 'Laufende Sozialprojekte', slug: 'soziales' },
    { titel: 'Kultur', bild: '/assets/kultur.jpg', beschreibung: 'Kulturprojekte', slug: 'kultur' },
  ];

  currentIndex = 0;
  intervalMs = 3000;
  intervalId: any;

  private touchStartX = 0;
  private touchEndX = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.nextSlide(), this.intervalMs);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.projektKategorien.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projektKategorien.length) % this.projektKategorien.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetInterval();
  }

  openKategorie(kategorie: Kategorie) {
    console.log('Navigiere zu Kategorie:', kategorie.slug);
    // Immer die lokale Variable nutzen, nicht currentIndex!
    this.router.navigate(['/projekte', kategorie.slug]);
  }

  resetInterval() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  // Swipe Events
  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    this.touchStartX = event.clientX;
  }

  @HostListener('pointerup', ['$event'])
  onPointerUp(event: PointerEvent) {
    this.touchEndX = event.clientX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const minDistance = 50;
    if (swipeDistance > minDistance) {
      this.prevSlide();
      this.resetInterval();
    } else if (swipeDistance < -minDistance) {
      this.nextSlide();
      this.resetInterval();
    }
  }
}