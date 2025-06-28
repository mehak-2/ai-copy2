"use client"
import Image from 'next/image'

const LogoMarquee = () => {
    const companies = [
        { name: 'Airtable', logo: '/airtable.webp' },
        { name: 'Calendly', logo: '/calendly.svg' },
        { name: 'Flabs', logo: '/flabs.webp' },
        { name: 'Fullstory', logo: '/fullstory.webp' },
        { name: 'Google Cloud', logo: '/googlecloud.webp' },
        { name: 'Google Workspace', logo: '/googleworkspace.webp' },
        { name: 'Hubspot', logo: '/hubspot.png' },
        { name: 'Intercom', logo: '/intercom.svg' },
        { name: 'Notion', logo: '/notion.webp' },
        { name: 'Shopify', logo: '/shopify.webp' },
        { name: 'Typeform', logo: '/typeform.webp' },
        { name: 'Zapier', logo: '/zapier.webp' },
       
        { name: 'Z', logo: '/z.webp' },
    ]

    return (
        <section className="py-9 md:py-12 lg:py-16  overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    {/* <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Companies across industries count on our AI tool to make their digital platforms more inclusive, usable, and legally compliant.
                    </p> */}
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex space-x-8 animate-marquee">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-32 h-16"
                            >
                                <div className="w-full h-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-gray-600 p-4 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={company.logo}
                                            alt={`${company.name} logo`}
                                            width={80}
                                            height={40}
                                            className="object-contain w-auto h-8 filter dark:brightness-0 dark:invert transition-all duration-300"
                                            style={{
                                                filter: 'brightness(0.9) contrast(1.1)',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                        {companies.map((company, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="flex-shrink-0 w-32 h-16"
                            >
                                <div className="w-full h-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-gray-600 p-4 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={company.logo}
                                            alt={`${company.name} logo`}
                                            width={80}
                                            height={40}
                                            className="object-contain w-auto h-8 filter dark:brightness-0 dark:invert transition-all duration-300"
                                            style={{
                                                filter: 'brightness(0.9) contrast(1.1)',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogoMarquee 