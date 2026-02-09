
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/goller-architekten/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/goller-architekten"
  },
  {
    "renderMode": 2,
    "route": "/goller-architekten/services"
  },
  {
    "renderMode": 2,
    "route": "/goller-architekten/projekte"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6YN32LLT.js"
    ],
    "route": "/goller-architekten/projekt"
  },
  {
    "renderMode": 2,
    "route": "/goller-architekten/team"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7152, hash: 'adb0bbb8132da19c502b9ec14c90946c8bca0add01524a86fdee2643d907bea9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: '600b43c28876f91408eb4deb7108fb1707efcec0d25351ff8ade063a7f70ecbf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projekt/index.html': {size: 17792, hash: '61ddf29c8ddec73836f331780f62fa1da0546d49e7597adb32a728ca9a4b98ac', text: () => import('./assets-chunks/projekt_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20585, hash: '37938c60d631de92e095bd860cf204158154243b214c76a83726138c4338a6f7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 20005, hash: '2e5b330297e35dd8a9d295e35d9ef6bec84cfe490b1ab1d9dd93ce29b6e852cf', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'projekte/index.html': {size: 24936, hash: 'dc2ac976fe83895722091d589c0fcc8be6ea5062b4828050894596dfb903017b', text: () => import('./assets-chunks/projekte_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 21746, hash: 'd57a2d4b39fc03cd8f7126dc1aebf10b65af14dcff183a52269feee019d17ab8', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'styles-Z56IRVGJ.css': {size: 23884, hash: 'fCzPMo8H+Xc', text: () => import('./assets-chunks/styles-Z56IRVGJ_css.mjs').then(m => m.default)}
  },
};
