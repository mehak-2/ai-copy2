import Link from 'next/link'
import { Search, Github, Twitter, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
    const footerLinks = [
        {
            title: 'Product',
            links: [
                { name: 'Website Auditor', href: 'https://app.axto.ai/audit' },
                { name: 'Features', href: '/#features' },
                { name: 'How It Works?', href: '/#how-it-works' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', href: '/blog' },
                { name: 'Support', href: '/contact' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                // { name: 'Privacy Policy', href: '/privacy' },
                // { name: 'Terms of Service', href: '/terms' },
            ]
        }
    ]

    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/axto-ai/' },
        { name: 'Twitter', icon: Twitter, href: 'https://x.com/axto_ai' },
        { name: 'Email', icon: Mail, href: 'mailto:support@axto.ai' },
    ]

    return (
        <footer className="bg-[#111111] text-white transition-colors duration-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className='w-8 h-8 relative '>
                                <svg className='absolute top-0 left-0 w-full h-full' width="72" height="70" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.6283 34.4969L21.5605 70.0004H0L28.0287 0.143799L27.885 0H43.8398V0.143799L71.7244 70.0004H50.1644L39.0965 34.4969C37.2279 28.46 37.6591 19.9795 37.6591 13.5113H34.0657C34.0657 19.9795 34.6406 28.46 32.6283 34.4969Z" fill="url(#paint0_linear_0_18)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_18" x1="35.8624" y1="0" x2="35.8624" y2="70.0004" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#9234EA" />
                                            <stop offset="1" stopColor="#2862EB" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            <span className="text-[25px] font-bold text-white">axto.ai</span>
                        </Link>
                        <p className="text-gray-400 dark:text-gray-300 mb-6 max-w-md">
                            Transform your website into an EAA-compliant digital asset. Get your free scan now.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="w-5 h-5" />
                                    <span className="sr-only">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 dark:text-gray-300 text-sm">
                        © {new Date().getFullYear()} axto.ai. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* <Link href="/privacy" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors duration-200">
                            Privacy Policy
                        </Link> */}
                        {/* <Link href="/terms" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors duration-200">
                            Terms of Service
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    )
} 