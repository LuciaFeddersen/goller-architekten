import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';

@Component({
  selector: 'app-projekt-detail',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './projekt-detail.component.html',
})
export class ProjektDetailComponent {
  slug!: string;
  pdfUrl!: string;
  pdfUrlWithParams!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.pdfUrl = `assets/projekte/pdf/${this.slug}.pdf`;
    this.pdfUrlWithParams = this.pdfUrl + '#zoom=FitH&toolbar=0';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  

}
