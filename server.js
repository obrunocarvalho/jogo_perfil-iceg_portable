// Servidor HTTP minimalista — zero dependências (usa apenas Node.js built-in)
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5174;
const DIST = path.join(__dirname, 'dist');

const MIME = {
  '.html':  'text/html; charset=utf-8',
  '.js':    'application/javascript',
  '.css':   'text/css',
  '.png':   'image/png',
  '.jpg':   'image/jpeg',
  '.jpeg':  'image/jpeg',
  '.svg':   'image/svg+xml',
  '.ico':   'image/x-icon',
  '.woff':  'font/woff',
  '.woff2': 'font/woff2',
  '.ttf':   'font/ttf',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // Rotas do jogo
  if (urlPath === '/' || urlPath === '/index.html') {
    urlPath = '/index.html';
  } else if (urlPath === '/operador' || urlPath === '/operador.html') {
    urlPath = '/operador.html';
  }

  const filePath = path.join(DIST, urlPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback: servir index.html para rotas desconhecidas
      fs.readFile(path.join(DIST, 'index.html'), (err2, fallback) => {
        if (err2) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fallback);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('');
  console.log('  Perfil ICEG iniciado!');
  console.log(`  Jogo:   http://127.0.0.1:${PORT}`);
  console.log(`  Painel: http://127.0.0.1:${PORT}/operador`);
  console.log('');
  console.log('  Para encerrar: feche esta janela.');
  console.log('');
});
