// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'shoopingsite-backend-1.onrender.com', pathname: '/uploads/**' },
      { protocol: 'https', hostname: 'latore.store' },
      { protocol: 'https', hostname: 'www.latore.store' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320,480,640,768,1024,1280,1536,1920,2560],
  },
};

export default nextConfig;
