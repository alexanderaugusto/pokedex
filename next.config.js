/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
<<<<<<< Updated upstream
  assetPrefix: isProd ? './' : undefined,
=======
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
>>>>>>> Stashed changes
}

module.exports = nextConfig