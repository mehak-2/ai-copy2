import Link from 'next/link'
import { CheckCircle, Globe, Users, Zap, Shield, BarChart3 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            description: 'Accessibility expert with 10+ years experience in inclusive design and WCAG compliance.',
            expertise: ['Web Accessibility', 'WCAG Guidelines', 'Inclusive Design']
        },
        {
            name: 'Mike Chen',
            role: 'Lead Developer',
            description: 'Full-stack developer specializing in performance optimization and modern web technologies.',
            expertise: ['Performance Optimization', 'React/Next.js', 'Node.js']
        },
        {
            name: 'Alex Rodriguez',
            role: 'SEO Specialist',
            description: 'Digital marketing expert focused on technical SEO and search engine optimization strategies.',
            expertise: ['Technical SEO', 'Core Web Vitals', 'Content Strategy']
        }
    ]

    const values = [
        {
            icon: <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: 'Accessibility First',
            description: 'We believe the web should be accessible to everyone, regardless of ability or technology used'
        },
        {
            icon: <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: 'Performance Matters',
            description: 'Fast websites provide better user experiences and improved search engine rankings'
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: 'Data-Driven Insights',
            description: 'We provide actionable insights based on industry standards and best practices'
        },
        {
            icon: <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: 'Quality Assurance',
            description: 'Our audits are comprehensive and reliable'
        }
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />

            <div className="pt-20 mt-28 md:mt-16 lg:mt-20  pb-16">
                {/* Hero Section */}
                <section className="bg-white dark:bg-gray-900 py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Making the Web Accessible for{' '}
                                <span className="gradient-text">Everyone</span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                                We're passionate about creating a more inclusive, performant, and discoverable web
                                through comprehensive website auditing and AI-powered recommendations
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-300 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    Our Mission
                                </h2>
                              
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                                <p className="text-lg leading-relaxed mb-6">
                                    The European Accessibility Act (EAA), and the local laws of each EU member state became effective June 28, 2025, mandating that all digital products and services within the EU be accessible to individuals with disabilities. The consequences of non-compliance? Hefty fines (upto  €100,000), multi-country enforcement, and even loss of access to the EU digital market.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                 But compliance isn't just about avoiding penalties, it's smart business. With 87 million people in the EU (and over 1.3 billion worldwide) living with some form of disability, accessible design directly translates to broader reach, stronger loyalty, and higher conversion. 
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                   We're also deeply committed to the environment. Accessible websites and  <a href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600 dark:text-primary-400'>platforms </a>
                                     load faster and use considerably less energy. Moreover, they perform better in search and create smoother user experiences across the board. <a href='https://www.axto.ai/' className='text-primary-600 dark:text-primary-400'>axto.ai</a> more than pays for itself in savings and try to improve results. 
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                 Importantly, <a href='https://www.axto.ai/' className='text-primary-600 dark:text-primary-400'>axto.ai</a> goes way beyond the competition, diving deep into the EAA's EN 301 549 standard, automatically detecting and localizing over 160 types of accessibility issues—right down to the line of code. Then, depending on your  <a href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600 dark:text-primary-400'>platform</a>, many fixes are just a few clicks away. Others only review for WCAG or ADA violations, potentially leaving their clients exposed to the EAA's stricter standards. 
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                 What shocked us most is that over 95% of the websites we review have excessive violations! For example, WordPress, Shopify, Squarespace, and other builder  <a href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600 dark:text-primary-400'>platforms</a> do not use semantic html and can't be read by an eReader. <a href='https://www.axto.ai/' className='text-primary-600 dark:text-primary-400'>axto.ai</a> not only helps you identify problems, it provides solutions. Even if the problem is your  <a href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`} className='text-primary-600 dark:text-primary-400'>platform</a>, we can help you try to fix maximum issue for better accessibility of your website.  
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Our Values
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/* <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Experts passionate about web accessibility and performance
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {team.map((member, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 text-center group hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                                        <Users className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {member.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {member.expertise.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* CTA Section */}
               <section className="py-16 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
     Ready to Elevate Your Website?
    </h2>
    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
     Join thousands of developers, marketers, and businesses who trust  <a
        href="https://www.axto.ai/" target="_blank"
        className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
      >
        axto.ai
      </a> to enhance accessibility, performance, and SEO—powered by intelligent auditing and actionable insights
     
     
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="https://app.axto.ai/audit"
        className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-600 hover:to-violet-600 font-semibold py-3 px-8 rounded-xl shadow-md transition duration-300 ease-in-out"
      >
        Try Free Audit
      </Link>
      <Link
        href="/contact"
        className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-indigo-600 font-semibold py-3 px-8 rounded-xl transition duration-300"
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