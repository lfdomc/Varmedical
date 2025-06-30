import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap', // Redirige directamente a la API Route
        permanent: true,
      },
    ];
  },
};

export default nextConfig;