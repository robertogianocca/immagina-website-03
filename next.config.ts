import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cultura",
        permanent: true, // Uses 308 status code (permanent redirect)
        // Use false for a temporary redirect (307 status code)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/romanico",
        destination: "/cultura/photography/drone/romanico",
      },
      {
        source: "/autostrada",
        destination: "/cultura/photography/drone/autostrada-land-art",
      },
      {
        source: "/ingeborg",
        destination: "/private-galleries/museo-mendrisio",
      },
      {
        source: "/pietro-leemann",
        destination: "/private-galleries/pietro-leemann",
      },
      // Add more as needed...
    ];
  },
};

export default nextConfig;
