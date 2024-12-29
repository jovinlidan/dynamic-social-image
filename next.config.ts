import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001", // Replace with your development port if different
        pathname: "/api/og", // Allow the specific API path
      },
    ],
  },
  headers: async () => {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
};

export default nextConfig;
