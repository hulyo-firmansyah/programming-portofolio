/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "brittanychiang.com",
      },
    ],
  },
};

module.exports = nextConfig;
