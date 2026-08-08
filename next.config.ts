import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/experience/robotics",
      destination: "/experience#robotics",
      permanent: true,
    },
    {
      source: "/experience/electrical",
      destination: "/experience#electrical",
      permanent: true,
    },
    {
      source: "/experience/teaching",
      destination: "/experience#teaching",
      permanent: true,
    },
    {
      source: "/experience/sanskrit",
      destination: "/experience#teaching",
      permanent: true,
    },
    {
      source: "/leadership",
      destination: "/experience#leadership",
      permanent: true,
    },
    {
      source: "/achievements",
      destination: "/experience#recognition",
      permanent: true,
    },
    {
      source: "/arts",
      destination: "/about",
      permanent: true,
    },
  ],
};

export default nextConfig;