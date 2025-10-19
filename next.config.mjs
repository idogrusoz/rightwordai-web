/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@headlessui/react", "framer-motion"]
  }
};

export default nextConfig;
