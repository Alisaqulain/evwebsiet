/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    // Fix for util-deprecate and other module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    
    // Ensure proper module resolution for util-deprecate
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    // Fix for util-deprecate module resolution on Windows
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
    }
    
    return config
  },
}

module.exports = nextConfig

