/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'latore.store' },
      { protocol: 'https', hostname: 'www.latore.store' },
    ],
  },
};

export default nextConfig;
