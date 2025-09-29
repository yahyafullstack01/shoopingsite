// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // бекенд на Render
      { protocol: 'https', hostname: 'shoopingsite-backend-1.onrender.com', pathname: '/uploads/**' },

      // якщо є Cloudinary/CDN — додай і його
      // { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },

      // якщо якісь картинки все ж із фронт-домену
      { protocol: 'https', hostname: 'latore.store' },
      { protocol: 'https', hostname: 'www.latore.store' },
    ],
  },
};
export default nextConfig;
