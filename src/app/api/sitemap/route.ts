import { NextResponse } from 'next/server';

const baseUrl = 'http://localhost:3000'; // Cambia esto por tu URL base

// Lista de tus páginas
const pages = [
  '',
  'about',
  'contact',
  'equips',
  'inputs',
  'marcas',
];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const url = `${baseUrl}/${page}`.replace(/\/$/, ''); // Elimina la barra al final si existe
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}