import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['https://decoswap.capital'],

  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding', 'porto')
    return config
  }
};

export default nextConfig;
