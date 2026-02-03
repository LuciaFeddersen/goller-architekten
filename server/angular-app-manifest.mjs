
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/goller-architekten/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/goller-architekten"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5036, hash: 'abc299aaa95b287b6207e2d2fcdcda6f5ee0a2aa20e9e418fc1c7d002a31d697', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: 'ef86e5e03ce19e07a33947b5dd09b1d9e47eeed4c1af7b4b61142fcd78095106', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10995, hash: '8c2d9fe6ed208cdbb82afc8e879976b88840bb8d6e2b67da39f24daefe9ff50d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-STI72LG7.css': {size: 11889, hash: 'TZS6lxrEl7o', text: () => import('./assets-chunks/styles-STI72LG7_css.mjs').then(m => m.default)}
  },
};
