import bundleAnalyzer from '@next/bundle-analyzer'

function imageCdnRemotePatterns() {
  const patterns = [
    { protocol: 'https', hostname: 'images.vegas55plushomes.com', pathname: '/**' },
    { protocol: 'https', hostname: 'imagedelivery.net', pathname: '/**' },
  ]

  const cdn = process.env.NEXT_PUBLIC_IMAGE_CDN
  if (cdn) {
    try {
      const url = new URL(cdn)
      const protocol = url.protocol === 'http:' ? 'http' : 'https'
      if (!patterns.some((pattern) => pattern.hostname === url.hostname)) {
        patterns.push({ protocol, hostname: url.hostname, pathname: '/**' })
      }
    } catch {
      // Ignore invalid CDN URLs; Git-backed /public images still work.
    }
  }

  return patterns
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization — local Git backup plus Cloudflare R2/CDN
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: imageCdnRemotePatterns(),
  },
  // Compression
  compress: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-*'],
  },
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value:
              "img-src 'self' data: blob: https: https://images.vegas55plushomes.com https://imagedelivery.net https://em.realscout.com https://www.realscout.com",
          }
        ]
      },
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*\\.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer(nextConfig)
  : nextConfig

