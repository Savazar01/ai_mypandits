import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["whatsapp-web.js"],
  experimental: {
    cpus: 1, // Limit CPUs to reduce memory consumption during dev/build
    optimizePackageImports: ["lucide-react"],
  },
  typescript: {
    // Ignore build errors during dev to speed up and reduce memory overhead
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://localhost:8000/api/v1/:path*',
      },
    ];
  },
};

// Vedic Sanctuary: Schema Synchronization Force Reboot [4/5/2026]
export default nextConfig;
