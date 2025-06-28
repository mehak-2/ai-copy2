'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Shield,
    Zap,
    Search,
    FileText,
    Brain,
    BarChart3,
    ArrowUpRight,
    X,
    Check
} from 'lucide-react'

const FeaturesSection = () => {
    const [selectedFeature, setSelectedFeature] = useState(null)

    const features = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Instant Accessibility Check",
            description: "Enter your website domain - Axto.ai instantly scans for EAA & WCAG 2.2 compliance, giving you a detailed report, accessibility widget",
            detailedDescription: "Just enter your website domain - Axto.ai instantly audits your site for EAA and WCAG 2.2 standards using our AI-powered scanner. Alongside your detailed results, you'll receive a downloadable compliance report, an embeddable accessibility widget, and an auto-generated Accessibility Statement - so you can fix issues fast",
            points:"What's Included",
            linkName:"Try this feature",
            linkaddress:"https://app.axto.ai/audit",
            benefits: [
                "Full EAA & WCAG 2.2 Compliance Audit",
                "Line-by-Line Issue Mapping",
                "Downloadable Accessibility Report ",
                "Accessibility Widget (customizable UI overlay for end-users)",
                "Accessibility Statement Generator",
                "Real-Time Scan Results & Monitoring"
            ],
            color: "emerald"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Accessible Marketing Content",
            description: "Axto.ai ensures all your marketing content from visuals to videos meets accessibility standards, helping you reach and engage a wider audience",
            detailedDescription: "Accessibility goes beyond code. Axto.ai helps you make your entire marketing presence more inclusive by scanning for key issues across media, including video captions, transcripts, image text, and language support. We make it easy to spot what needs to be improved, so everyone can engage with your brand",
            points:"What We Support",
             linkName:"Try this service",
            linkaddress:"/contact",
            benefits: [
                "Video Content – Checks for captions, transcripts, and language localization",
           
                "Images & Visuals – Detects missing alt text and contrast issues",
                "Language & Copy – Highlights missing localization or unclear calls to action",
                "Multimedia Experiences – Ensures consistency across formats and devices",
         
            ],
            color: "amber"
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: "How Axto.ai Works",
            description: "From scan to solution - compliance, simplified. Scan → Report → Fixes by development team → Widget",
            detailedDescription: "Axto.ai simplifies accessibility for every team. Start with an instant scan, receive a code-mapped audit report, auto-generate your accessibility statement, and improve usability with our front-end widget. Whether you implement fixes yourself or get support from our dev team, you're covered at every step -  technically, and practically",
            points:"From scan to solution - compliance, simplified",
            linkName:"Try this feature",
            linkaddress:"https://app.axto.ai/audit",
            benefits: [
                "AI-Powered Scan – Instantly audits your site for EAA & WCAG 2.2 compliance.",
                "Detailed Report – Get a developer-ready report highlighting all accessibility issues.",
                "Compliance Tools – Includes an embeddable widget.",
                              
            ],
            color: "blue"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Tech Behind Axto.ai",
            description: "AI that understands accessibility regarding EAA , WCAG & EN 301 549 Standards. Powers Audit, Widget, and Statement Generator with every scan",
            detailedDescription: "Built on deep models trained with WCAG, EAA, and EN 301 549 standards, Axto scans your full HTML, JS, CSS, ARIA, and dynamic content",
            points:"What Powers Your Results",
             linkName:"Try this feature",
            linkaddress:"https://app.axto.ai/audit",
            benefits: [
           
                "Instant Widget Integration with contrast/font etc support",
                "AI Remediation Report with dev guidance and compliance notes",
                " EU-hosted servers",
        
            ],
            color: "purple"
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Industries We Serve",
            description: "Axto.ai ensures accessibility for all digital products under the European Accessibility Act. From e-commerce to banking, every industry benefits from our AI-powered widget and full developer-ready report",
            detailedDescription: "Axto.ai helps every digital product stay accessible under the European Accessibility Act. All industries benefit from: Widget • Compliance Statement • Full Dev-Ready Report",
            points:"Who We Support",
              linkName:"Try this feature",
            linkaddress:"https://app.axto.ai/audit",
            benefits: [
                "Ecommerce & Retail – Fix checkout and navigation for all customers",
                "Banking ,Healthcare & Fintech – Secure, inclusive platforms with full documentation",
              
                "EdTech – Create inclusive learning across all devices" ],
            color: "teal"

        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Benefits of EAA Compliance",
            description: "Accessibility isn't just a requirement - it's a competitive advantage",
            detailedDescription: "Earn user trust • Expand your reach • Improve site performance. Every plan includes an Accessibility Report, Support Widget, and Statement Generator",
            points:"Why It Matters",
              linkName:"Try this feature",
            linkaddress:"https://app.axto.ai/audit",
            benefits: [
                "Stay Ahead with Proactive Improvements",
                "Improve SEO & Site Performance",
                "Unlock More Business Opportunities",
                "Demonstrate Brand Integrity",
                "Adapt Easily to Future Requirements",
                
            ],
            color: "rose"
        }
    ]

    const openModal = (feature, index) => {
        setSelectedFeature({ ...feature, index })
    }

    const closeModal = () => {
        setSelectedFeature(null)
    }

    return (
        <section className="py-24 bg-white dark:bg-gray-900" id="features">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-20">
                    <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
                        Everything you need to optimize your website
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Comprehensive analysis tools designed to identify and try to resolve issues affecting your site's performance
                    </p>
                </div>

                {/* Bordered Grid Container */}
                <div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => {
                         
                            const isLastRow = index >= features.length - (features.length % 3 || 3)
                            const isLastColumn = (index + 1) % 3 === 0
                            const borderClasses = `
                                ${!isLastRow ? 'border-b border-gray-200 dark:border-gray-800' : ''}
                                ${!isLastColumn ? 'md:border-r md:border-gray-200 md:dark:border-gray-800' : ''}
                            `.trim()

                            return (
                                <div key={index} className={borderClasses}>
                                    {selectedFeature?.index !== index && (
                                        <motion.div
                                            layoutId={`feature-${index}`}
                                            className="group cursor-pointer h-full"
                                            onClick={() => openModal(feature, index)}
                                            whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                                            whileTap={{ scale: 0.995 }}
                                        >
                                            <motion.div
                                                className="p-8 lg:p-10 h-full flex flex-col hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-all duration-300"
                                                layout
                                            >

                                                {/* Icon */}
                                                <motion.div
                                                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${feature.color}-50 dark:bg-${feature.color}-500/10 text-${feature.color}-600 dark:text-${feature.color}-400 mb-6 group-hover:scale-105 transition-transform duration-200`}
                                                    layoutId={`feature-icon-${index}`}
                                                >
                                                    {feature.icon}
                                                </motion.div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <motion.h3
                                                        className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200"
                                                        layoutId={`feature-title-${index}`}
                                                    >
                                                        {feature.title}
                                                    </motion.h3>

                                                    <motion.p
                                                        className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6"
                                                        layoutId={`feature-description-${index}`}
                                                    >
                                                        {feature.description}
                                                    </motion.p>
                                                </div>

                                                {/* Learn more link */}
                                                <div className="flex items-center text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200">
                                                    <span>Learn more</span>
                                                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {/* Placeholder when card is selected */}
                                    {selectedFeature?.index === index && (
                                        <div className="p-8 lg:p-10 h-full flex items-center justify-center">
                                            <div className="text-center text-gray-400 dark:text-gray-600">
                                                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto mb-3"></div>
                                                <div className="text-sm">Viewing details</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom CTA - Minimal */}
                <div className="text-center mt-20">
                    <a
                        href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                        Start Analysis
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Animated Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            layoutId={`feature-${selectedFeature.index}`}
                            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl"
                                layout
                            >

                                {/* Header */}
                                <div className="p-8 pb-6 border-b border-gray-100 dark:border-gray-800">

                                    {/* Close Button */}
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: 0.2 }}
                                        onClick={closeModal}
                                        className="absolute top-6 right-6 w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-4 h-4" />
                                    </motion.button>

                                    {/* Icon */}
                                    <motion.div
                                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${selectedFeature.color}-50 dark:bg-${selectedFeature.color}-500/10 text-${selectedFeature.color}-600 dark:text-${selectedFeature.color}-400 mb-4`}
                                        layoutId={`feature-icon-${selectedFeature.index}`}
                                    >
                                        {selectedFeature.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h2
                                        className="text-2xl font-medium text-gray-900 dark:text-white mb-3"
                                        layoutId={`feature-title-${selectedFeature.index}`}
                                    >
                                        {selectedFeature.title}
                                    </motion.h2>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-600 dark:text-gray-400 leading-relaxed"
                                        layoutId={`feature-description-${selectedFeature.index}`}
                                    >
                                        {selectedFeature.description}
                                    </motion.p>
                                </div>

                                {/* Modal Body */}
                                <motion.div
                                    className="p-8 max-h-[50vh] overflow-y-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >

                                    {/* Detailed Description */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                                            Overview
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {selectedFeature.detailedDescription}
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                                           {selectedFeature.points}
                                        </h3>
                                        <div className="space-y-3">
                                            {selectedFeature.benefits.map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + index * 0.1 }}
                                                >
                                                    <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${selectedFeature.color}-50 dark:bg-${selectedFeature.color}-500/10 text-${selectedFeature.color}-600 dark:text-${selectedFeature.color}-400 flex items-center justify-center mt-0.5`}>
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                        {benefit}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <motion.div
                                        className="flex gap-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <a
                                            href={selectedFeature.linkaddress}
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                                        >
                                          {selectedFeature.linkName}
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>

                                        <a
                                            href="/docs"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            Documentation
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default FeaturesSection 