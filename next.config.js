/**
 * @type {import('next').NextConfig}
 */
 const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? './' : undefined,
}

module.exports = nextConfig