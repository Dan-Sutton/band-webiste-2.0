/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.graphassets.com",
      "res.cloudinary.com",
      "encrypted-tbn0.gstatic.com",
      "drive.google.com",
    ],
  },
};

module.exports = nextConfig;
