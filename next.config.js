/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gro8-s3.s3.ap-south-1.amazonaws.com',
                port: '',
                pathname: '/uploads/images/**',
            },
            {
                protocol: 'https',
                hostname: 'gro8-s3.s3.ap-south-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async rewrites() {
        // Only use rewrites in development
        if (process.env.NODE_ENV === 'development') {
            return [
                {
                    source: '/api/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/:path*`,
                },
            ]
        }
        return []
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
}

module.exports = nextConfig 