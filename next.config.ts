import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cpus: 1, // Limit CPUs to reduce memory consumption during dev/build
    workerThreads: false, // Disable worker threads for more predictable memory usage
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
      },
      {
        protocol: 'http',
        hostname: 'googleusercontent.com',
      },
    ],
  },
};

// Vedic Sanctuary: Schema Synchronization Force Reboot [4/5/2026]
export default nextConfig;
