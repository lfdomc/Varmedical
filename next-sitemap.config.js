/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://varmedical.vercel.app/ ', // Reemplaza con tu dominio
  generateRobotsTxt: true, // Genera automáticamente un archivo robots.txt
  changefreq: 'daily', // Frecuencia de cambio (opcional)
  priority: 0.7, // Prioridad de las páginas (opcional)
  sitemapSize: 5000, // Número máximo de URLs por archivo (opcional)
};