/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-js-conf-2024',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig