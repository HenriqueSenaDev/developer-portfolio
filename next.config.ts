import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/HenriqueSenaDev/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
