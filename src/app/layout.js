import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AuthProvider } from '@/contexts/AuthContext'
import Script from 'next/script'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { CtaProvider } from '@/contexts/CtaContext'
import RegisterPopup from '@/components/RegisterPopup'

const inter = Inter({ subsets: ['latin'] })
const FreeCreditsPopup = dynamic(() => import('@/components/FreeCreditsPopup'))

export const metadata = {
    title: 'Axto.ai - Website Auditor | SEO, Accessibility & Performance Analysis',
    description: 'Get comprehensive website analysis with AI-powered suggestions for SEO, accessibility, and performance improvements. Generate detailed PDF reports with Lighthouse auditing.',
    keywords: ['website audit', 'SEO analysis', 'accessibility checker', 'performance audit', 'lighthouse', 'axto.ai', 'website optimization'],
    authors: [{ name: 'Axto.ai' }],
    creator: 'Axto.ai',
    publisher: 'Axto.ai',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/logo.png', sizes: '32x32', type: 'image/png' },
            { url: '/logo.png', sizes: '16x16', type: 'image/png' },
        ],
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
    manifest: '/manifest.json',
    themeColor: '#2563eb',
    colorScheme: 'light dark',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://axto.ai',
        title: 'Axto.ai - Website Auditor | SEO, Accessibility & Performance Analysis',
        description: 'Get comprehensive website analysis with AI-powered suggestions for SEO, accessibility, and performance improvements.',
        siteName: 'Axto.ai',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Axto.ai Website Auditor',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Axto.ai - Website Auditor',
        description: 'Get comprehensive website analysis with AI-powered suggestions for SEO, accessibility, and performance improvements.',
        images: ['/og-image.png'],
        creator: '@axtoai',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <head>
                {/* Favicon and Icons */}
                <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
                <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="icon" type="image/svg+xml" href="/icon.svg" />

                {/* PWA Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Theme and Viewport */}
                <meta name="theme-color" content="#2563eb" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Preconnect for Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Security Headers */}
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="X-Frame-Options" content="DENY" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
                {/* <Script
                    id="accessibility-widget-config"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `window.accessWidget = { id: '68551d46cbc5c8005e115fb0' };`
                    }}
                /> */}

            </head>

            <body className="bg-white text-gray-900 transition-colors duration-200">
                <ThemeProvider>
                    <AuthProvider>
                           <CtaProvider>
                        {children}
                        <RegisterPopup />
                        </CtaProvider>
                        <FreeCreditsPopup />
                    </AuthProvider>
                </ThemeProvider>
                {/* <Script
                    src="https://api.axto.ai/widget.js?id=68551d46cbc5c8005e115fb0"
                    strategy="afterInteractive"
                /> */}



            </body>

        </html>
    )
}