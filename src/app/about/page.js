import Link from 'next/link'
import dynamic from 'next/dynamic'

const Globe = dynamic(() => import('lucide-react/dist/esm/icons/globe'), {
    loading: () => null,
    ssr: true
})

const Zap = dynamic(() => import('lucide-react/dist/esm/icons/zap'), {
    loading: () => null,

    
    ssr: true
})
const Shield = dynamic(() => import('lucide-react/dist/esm/icons/shield'), {
    loading: () => null,
    ssr: true
})
const BarChart3 = dynamic(() => import('lucide-react/dist/esm/icons/bar-chart-3'), {
    loading: () => null,
    ssr: true
})

const Header = dynamic(() => import('@/components/Header'), {
    ssr: true,
    loading: 'eager'
})

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: true,
    loading: 'lazy'
})

export const metadata = {
    title: 'About Us - WebsiteAuditor | Making the Web Accessible for Everyone',
    description: 'Learn about our mission to make the web more accessible, performant, and SEO-optimized through comprehensive website auditing tools.',
}

export default function AboutPage() {
    const stats = [
        { label: 'Websites Analyzed', value: '10,000+' },
        { label: 'Issues Identified', value: '251,000+' },
        { label: 'Happy Customers', value: '5000+' }
    ]

    const values = [
        {
            icon: <Globe className="w-8 h-8 text-primary-600" />,
            title: 'Accessibility First',
            description: 'We believe the web should be accessible to everyone, regardless of ability or technology used'
        },
        {
            icon: <Zap className="w-8 h-8 text-primary-600" />,
            title: 'Performance Matters',
            description: 'Fast websites provide better user experiences and improved search engine rankings'
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
            title: 'Data-Driven Insights',
            description: 'We provide actionable insights based on industry standards and best practices'
        },
        {
            icon: <Shield className="w-8 h-8 text-primary-600" />,
            title: 'Quality Assurance',
            description: 'Our audits are comprehensive and reliable'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header priority />

            <div className="pt-20 mt-28 md:mt-16 lg:mt-20 pb-16">
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Making the Web Accessible for{' '}
                                <span className="gradient-text">Everyone</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                We're passionate about creating a more inclusive, performant, and discoverable web
                                through comprehensive website auditing and AI-powered recommendations
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Our Mission
                                </h2>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-600">
                                <p className="text-lg leading-relaxed mb-6">
                                    The European Accessibility Act (EAA), and the local laws of each EU member state became effective June 28, 2025, mandating that all digital products and services within the EU be accessible to individuals with disabilities. The consequences of non-compliance? Hefty fines (upto  €100,000), multi-country enforcement, and even loss of access to the EU digital market.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                 But compliance isn't just about avoiding penalties, it's smart business. With 87 million people in the EU (and over 1.3 billion worldwide) living with some form of disability, accessible design directly translates to broader reach, stronger loyalty, and higher conversion. 
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                   We're also deeply committed to the environment. Accessible websites and  <Link href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600' prefetch={false}>platforms </Link>
                                     load faster and use considerably less energy. Moreover, they perform better in search and create smoother user experiences across the board. <Link href='https://www.axto.ai/' className='text-primary-600' prefetch={false}>axto.ai</Link> more than pays for itself in savings and try to improve results. 
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                 Importantly, <Link href='https://www.axto.ai/' className='text-primary-600' prefetch={false}>axto.ai</Link> goes way beyond the competition, diving deep into the EAA's EN 301 549 standard, automatically detecting and localizing over 160 types of accessibility issues—right down to the line of code. Then, depending on your  <Link href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600' prefetch={false}>platform</Link>, many fixes are just a few clicks away. Others only review for WCAG or ADA violations, potentially leaving their clients exposed to the EAA's stricter standards. 
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                 What shocked us most is that over 95% of the websites we review have excessive violations! For example, WordPress, Shopify, Squarespace, and other builder  <Link href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600' prefetch={false}>platforms</Link> do not use semantic html and can't be read by an eReader. <Link href='https://www.axto.ai/' className='text-primary-600' prefetch={false}>axto.ai</Link> not only helps you identify problems, it provides solutions. Even if the problem is your  <Link href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600' prefetch={false}>platform</Link>, we can help you try to fix maximum issue for better accessibility of your website. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Our Values
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 text-center group hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

               <section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
     Ready to Elevate Your Website?
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
     Join thousands of developers, marketers, and businesses who trust  <Link
        href="https://www.axto.ai/"
        className="text-indigo-600 font-semibold hover:underline"
        prefetch={false}
      >
        axto.ai
      </Link> to enhance accessibility, performance, and SEO—powered by intelligent auditing and actionable insights
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="https://app.axto.ai/audit"
        className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 font-semibold py-3 px-8 rounded-xl shadow-md transition duration-300 ease-in-out"
        prefetch={false}
      >
        Try Free Audit
      </Link>
      <Link
        href="/contact"
        className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-xl transition duration-300"
        prefetch={true}
      >
        Contact Sales
      </Link>
    </div>
  </div>
</section>

            </div>

            <Footer />
        </div>
    )
} 