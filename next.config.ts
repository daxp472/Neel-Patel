import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Vercel deployment
  // Remove 'output: export' if you want to use Vercel's ISR/SSR features
  // output: "export",  // Uncomment for fully static export

  images: {
    // When using static export, unoptimized is required
    // unoptimized: true,
  },

  // Turbopack config (already set by scaffold)
  experimental: {},
};

export default nextConfig;
