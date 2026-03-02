import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projekte/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Hier definierst du die Pfade, die beim Build als HTML erstellt werden sollen
      return [
        { slug: 'bildung' },
        { slug: 'soziales' },
        { slug: 'kultur' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];