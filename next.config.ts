import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: "asset/resource", // Native Webpack 5 feature
    });
    return config;
  },
};

export default nextConfig;
