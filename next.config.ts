import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/neohome',
  assetPrefix: '/neohome/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
