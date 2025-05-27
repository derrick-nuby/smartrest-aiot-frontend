import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.pexels.com"
      },
      {
        protocol: 'https',
        hostname: "img.clerk.com"
      },
      {
        protocol: 'https',
        hostname: "avatar.iran.liara.run"
      },
      {
        protocol: 'https',
        hostname: "img.logo.dev"
      },
    ]
  }
};

export default nextConfig;
