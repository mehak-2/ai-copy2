import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'), {
    ssr: true,
    loading: () => <div className="h-16 bg-white" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true,
    loading: () => <div className="h-32 bg-gray-900" />
})

export const metadata = {
    title: 'About Us - WebsiteAuditor | Making the Web Accessible for Everyone',
    description: 'Learn about our mission to make the web more accessible, performant, and SEO-optimized through comprehensive website auditing tools.',
}

export default function AboutPage() {
    const stats = [
        { 
            label: 'Websites Analyzed', 
            value: '10,000+',
            description: 'Comprehensive audits completed'
        },
        { 
            label: 'Issues Identified', 
            value: '251,000+',
            description: 'Accessibility violations found and fixed'
        },
        { 
            label: 'Happy Customers', 
            value: '5000+',
            description: 'Satisfied clients worldwide'
        }
    ]

    const values = [
        {
            title: 'Accessibility First',
            description: 'We believe the web should be accessible to everyone, regardless of ability or technology used',
            icon: '🌐'
        },
        {
            title: 'Performance Matters',
            description: 'Fast websites provide better user experiences and improved search engine rankings',
            icon: '⚡'
        },
        {
            title: 'Data-Driven Insights',
            description: 'We provide actionable insights based on industry standards and best practices',
            icon: '📊'
        },
        {
            title: 'Quality Assurance',
            description: 'Our audits are comprehensive and reliable, backed by rigorous testing',
            icon: '🛡️'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
                Skip to main content
            </a>
            
            <Header priority />

            <main id="main-content" className="pt-20">
                <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" aria-labelledby="hero-heading">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                Making the Web
                                <span className="block text-blue-600">Accessible for Everyone</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                                We're passionate about creating a more inclusive, performant, and discoverable web
                                through comprehensive website auditing and AI-powered recommendations
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="https://app.axto.ai/audit"
                                    className="bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg"
                                    prefetch={false}
                                    aria-label="Start your free website audit"
                                >
                                    Start Free Audit
                                </Link>
                                <Link
                                    href="/contact"
                                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:bg-blue-50 focus:ring-4 focus:ring-blue-300 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
                                    prefetch={true}
                                    aria-label="Contact our sales team"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white" aria-labelledby="stats-heading">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
                            Our Impact in Numbers
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {stats.map((stat, index) => (
                                <div 
                                    key={index} 
                                    className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                                    role="group"
                                    aria-labelledby={`stat-${index}-value`}
                                    aria-describedby={`stat-${index}-desc`}
                                >
                                    <div 
                                        id={`stat-${index}-value`}
                                        className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
                                        aria-label={`${stat.value} ${stat.label}`}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xl font-semibold text-gray-900 mb-2">
                                        {stat.label}
                                    </div>
                                    <div 
                                        id={`stat-${index}-desc`}
                                        className="text-gray-600"
                                    >
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50" aria-labelledby="mission-heading">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
                                Our Mission
                            </h2>

                            <div className="space-y-8 text-gray-700">
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                        European Accessibility Act Compliance
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        The European Accessibility Act (EAA), and the local laws of each EU member state became effective June 28, 2025, mandating that all digital products and services within the EU be accessible to individuals with disabilities. The consequences of non-compliance? Hefty fines (up to €100,000), multi-country enforcement, and even loss of access to the EU digital market.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                        Smart Business Strategy
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        But compliance isn't just about avoiding penalties—it's smart business. With 87 million people in the EU (and over 1.3 billion worldwide) living with some form of disability, accessible design directly translates to broader reach, stronger loyalty, and higher conversion rates.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                        Environmental Commitment
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        We're also deeply committed to the environment. Accessible websites and{' '}
                                        <Link 
                                            href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} 
                                            className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:ring-2 focus:ring-blue-300 underline"
                                            prefetch={false}
                                            aria-label="Learn more about accessible platforms"
                                        >
                                            platforms
                                        </Link>{' '}
                                        load faster and use considerably less energy. Moreover, they perform better in search and create smoother user experiences across the board.{' '}
                                        <Link 
                                            href="https://www.axto.ai/" 
                                            className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:ring-2 focus:ring-blue-300 underline"
                                            prefetch={false}
                                            aria-label="Visit axto.ai homepage"
                                        >
                                            axto.ai
                                        </Link>{' '}
                                        more than pays for itself in savings and improved results.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                        Beyond the Competition
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        Importantly,{' '}
                                        <Link 
                                            href="https://www.axto.ai/" 
                                            className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:ring-2 focus:ring-blue-300 underline"
                                            prefetch={false}
                                            aria-label="Visit axto.ai homepage"
                                        >
                                            axto.ai
                                        </Link>{' '}
                                        goes way beyond the competition, diving deep into the EAA's EN 301 549 standard, automatically detecting and localizing over 160 types of accessibility issues—right down to the line of code. Then, depending on your{' '}
                                        <Link 
                                            href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} 
                                            className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:ring-2 focus:ring-blue-300 underline"
                                            prefetch={false}
                                            aria-label="Learn more about platform compatibility"
                                        >
                                            platform
                                        </Link>, many fixes are just a few clicks away. Others only review for WCAG or ADA violations, potentially leaving their clients exposed to the EAA's stricter standards.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                        The Reality Check
                                    </h3>
                                    <p className="text-lg leading-relaxed">
                                        What shocked us most is that over 95% of the websites we review have excessive violations! For example, WordPress, Shopify, Squarespace, and other builder{' '}
                                        <Link 
                                            href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} 
                                            className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:ring-2 focus:ring-blue-300 underline"
                                            prefetch={false}
                                            aria-label="Learn more about platform issues"
                                        >
                                            platforms
                                        </Link>{' '}
                                        do not use semantic HTML and can't be read by screen readers.{' '}
                                        <Link 
                                            href="https://www.axto.ai/" 
                                            className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:ring-2 focus:ring-blue-300 underline"
                                            prefetch={false}
                                            aria-label="Visit axto.ai homepage"
                                        >
                                            axto.ai
                                        </Link>{' '}
                                        not only helps you identify problems, it provides solutions. Even if the problem is your{' '}
                                        <Link 
                                            href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} 
                                            className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:ring-2 focus:ring-blue-300 underline"
                                            prefetch={false}
                                            aria-label="Learn more about platform solutions"
                                        >
                                            platform
                                        </Link>, we can help you fix maximum issues for better accessibility of your website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white" aria-labelledby="values-heading">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Our Values
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {values.map((value, index) => (
                                <div 
                                    key={index} 
                                    className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-xl"
                                    role="group"
                                    aria-labelledby={`value-${index}-title`}
                                    aria-describedby={`value-${index}-desc`}
                                    tabIndex="0"
                                >
                                    <div className="text-center">
                                        <div 
                                            className="text-5xl mb-6" 
                                            role="img" 
                                            aria-label={value.title}
                                        >
                                            {value.icon}
                                        </div>
                                        <h3 
                                            id={`value-${index}-title`}
                                            className="text-2xl font-semibold mb-4 text-gray-900"
                                        >
                                            {value.title}
                                        </h3>
                                        <p 
                                            id={`value-${index}-desc`}
                                            className="text-gray-600 text-lg leading-relaxed"
                                        >
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white" aria-labelledby="cta-heading">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Elevate Your Website?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of developers, marketers, and businesses who trust{' '}
                            <Link
                                href="https://www.axto.ai/"
                                className="text-yellow-300 hover:text-yellow-200 focus:text-yellow-200 focus:ring-2 focus:ring-yellow-300 underline font-semibold"
                                prefetch={false}
                                aria-label="Visit axto.ai homepage"
                            >
                                axto.ai
                            </Link>{' '}
                            to enhance accessibility, performance, and SEO—powered by intelligent auditing and actionable insights
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="https://app.axto.ai/audit"
                                className="bg-white text-blue-600 hover:bg-gray-100 focus:bg-gray-100 focus:ring-4 focus:ring-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 text-lg"
                                prefetch={false}
                                aria-label="Start your free website audit"
                            >
                                Try Free Audit
                            </Link>
                            <Link
                                href="/contact"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600 focus:ring-4 focus:ring-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
                                prefetch={true}
                                aria-label="Contact our sales team"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}