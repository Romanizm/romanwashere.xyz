/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.scdn.co" },
      { hostname: "cdn.discordapp.com" },
      { hostname: "i.hizliresim.com" },
      { hostname: "avatars.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
