import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001', // Replace with your development port if different
        pathname: '/api/og', // Allow the specific API path
      },
    ],
  },
};

export default nextConfig;
