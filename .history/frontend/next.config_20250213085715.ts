import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, options) {
    // Add a rule to handle SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
