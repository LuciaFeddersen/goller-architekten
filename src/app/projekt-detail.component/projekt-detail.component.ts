import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';

@Component({
  selector: 'app-projekt-detail',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './projekt-detail.component.html',
})
export class ProjektDetailComponent implements AfterViewInit {

  title = '';
  pdfUrlWithParams = '';

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const pdf = params['pdf'];
      this.title = params['title'] || 'Projekt';

      if (pdf) {
        const baseUrl = `assets/projekte/pdf/${pdf}`;
        this.pdfUrlWithParams = baseUrl + '#zoom=FitH&toolbar=0';
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
