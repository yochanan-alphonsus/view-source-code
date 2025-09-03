import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    allowedDevOrigins: ["http:192.168.43.21:3000"],
  },
};

export default nextConfig;
