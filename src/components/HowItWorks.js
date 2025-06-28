'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, Search, Zap, FileCheck, CheckCircle, Clock, Target } from 'lucide-react'
import Link from 'next/link'

const HowItWorks = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" }) // Allow multiple triggers

    // Enhanced state for looping animation
    const [typedText, setTypedText] = useState('')
    const [showButton, setShowButton] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [analysisProgress, setAnalysisProgress] = useState(0)
    const [completedChecks, setCompletedChecks] = useState([])
    const [showReport, setShowReport] = useState(false)
    const [animationCycle, setAnimationCycle] = useState(0)

    const fullUrl = 'https://yourwebsite.com'
    const checks = ['Performance', 'Accessibility', 'SEO', 'Best Practices']

    // Looping animation with 5s delay
    useEffect(() => {
        if (!isInView) return

        const runAnimationCycle = () => {
            // Reset all states first
            setTypedText('')
            setShowButton(false)
            setButtonClicked(false)
            setIsAnalyzing(false)
            setAnalysisProgress(0)
            setCompletedChecks([])
            setShowReport(false)

            // Start the animation sequence
            const startDelay = setTimeout(() => {
                // Step 1: Type URL
                let currentIndex = 0
                const typeTimer = setInterval(() => {
                    if (currentIndex < fullUrl.length) {
                        setTypedText(fullUrl.slice(0, currentIndex + 1))
                        currentIndex++
                    } else {
                        clearInterval(typeTimer)
                    }
                }, 120)

                // Step 2: Show button after typing
                const buttonTimer = setTimeout(() => {
                    setShowButton(true)
                }, fullUrl.length * 120 + 800)

                // Step 3: Auto-click button
                const clickTimer = setTimeout(() => {
                    setButtonClicked(true)
                    setIsAnalyzing(true)
                    setTimeout(() => setButtonClicked(false), 200)
                }, fullUrl.length * 120 + 1500)

                return () => {
                    clearInterval(typeTimer)
                    clearTimeout(buttonTimer)
                    clearTimeout(clickTimer)
                }
            }, 1000)

            return () => clearTimeout(startDelay)
        }

        // Initial run
        const cleanup1 = runAnimationCycle()

        // Calculate total animation duration
        const totalAnimationTime =
            1000 + // Initial delay
            (fullUrl.length * 120) + // Typing time
            1500 + // Button delay
            4000 + // Analysis time (estimated)
            2000   // Report generation time

        // Set up looping with 5s delay
        const loopTimer = setInterval(() => {
            setAnimationCycle(prev => prev + 1)
            runAnimationCycle()
        }, totalAnimationTime + 5000) // 5 second delay between cycles

        return () => {
            cleanup1?.()
            clearInterval(loopTimer)
        }
    }, [isInView, fullUrl])

    // Analysis simulation (with completion detection)
    useEffect(() => {
        if (!isAnalyzing) return

        const progressTimer = setInterval(() => {
            setAnalysisProgress(prev => {
                const newProgress = prev + Math.random() * 12 // Slightly faster for looping
                if (newProgress >= 100) {
                    setIsAnalyzing(false)
                    setShowReport(true)
                    return 100
                }
                return newProgress
            })
        }, 250) // Slightly faster updates

        const checkTimer = setInterval(() => {
            setCompletedChecks(prev => {
                if (prev.length < checks.length) {
                    return [...prev, checks[prev.length]]
                }
                return prev
            })
        }, 1000) // Faster check completion

        return () => {
            clearInterval(progressTimer)
            clearInterval(checkTimer)
        }
    }, [isAnalyzing])

    const steps = [
        {
            number: "01",
            title: "Enter Your Website URL",
            description: "Just enter your website URL - Axto instantly scans any valid site with zero setup or technical hassle.",
            icon: <Search className="w-5 h-5" />,
        },
        {
            number: "02",
            title: "AI-Powered Analysis",
            description: "Our AI engine performs deep audits using Google Lighthouse to assess performance, accessibility, SEO, and best practices - all in one scan.",
            icon: <Zap className="w-5 h-5" />,
        },
        {
            number: "03",
            title: "Get Detailed Report",
            description: "Receive a professional PDF report with AI-generated recommendations and actionable insights.",
            icon: <FileCheck className="w-5 h-5" />,
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const stepVariants = {
        hidden: {
            opacity: 0
        },
        visible: (index) => ({
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    }

    return ( 
        <section ref={ref} className="py-24 bg-white dark:bg-gray-900" id="how-it-works">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        How it works?
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto"
                    >
                        Get comprehensive website analysis in three simple steps
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                custom={index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="group"
                            >
                                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                                    }`}>
                                    {/* Content */}
                                    <motion.div
                                        className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                className="flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-lg"
                                            >
                                                {step.icon}
                                            </motion.div>
                                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider">
                                                STEP {step.number}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                            {step.title}
                                        </h3>

                                        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>

                                    {/* Interactive Mocks */}
                                    <motion.div
                                        className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}
                                    >
                                        <div className="relative">
                                            <motion.div
                                                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-300 dark:border-gray-600"
                                            >
                                                {/* Step 1: Looping URL Animation */}
                                                {index === 0 && (
                                                    <div className="space-y-4">
                                                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 relative overflow-hidden">
                                                            <Search className="w-5 h-5 text-gray-700" />
                                                            <div className="flex-1 relative">
                                                                <AnimatePresence mode="wait">
                                                                    <motion.span
                                                                        key={animationCycle} // Force re-render on cycle
                                                                        className="text-gray-800 dark:text-gray-200"
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: typedText ? 1 : 0 }}
                                                                        exit={{ opacity: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        {typedText}
                                                                    </motion.span>
                                                                </AnimatePresence>
                                                                <motion.div
                                                                    className="absolute top-0 w-0.5 h-5 bg-blue-500"
                                                                    animate={{
                                                                        opacity: typedText.length < fullUrl.length ? [1, 0, 1] : 0,
                                                                        left: `${typedText.length * 8.5}px`
                                                                    }}
                                                                    transition={{
                                                                        opacity: { duration: 1, repeat: Infinity },
                                                                        left: { duration: 0.1 }
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <AnimatePresence mode="wait">
                                                            {showButton && (
                                                                <motion.button
                                                                    key={`button-${animationCycle}`}
                                                                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium relative overflow-hidden"
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                        backgroundColor: buttonClicked ? "#1d4ed8" : "#2563eb"
                                                                    }}
                                                                    exit={{ opacity: 0, y: -20 }}
                                                                    transition={{ duration: 0.4 }}
                                                                >
                                                                    <motion.span
                                                                        animate={buttonClicked ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
                                                                        transition={{ duration: 0.2 }}
                                                                    >
                                                                        Analyze Website
                                                                    </motion.span>
                                                                    <motion.span
                                                                        className="absolute inset-0 flex items-center justify-center"
                                                                        initial={{ y: 30, opacity: 0 }}
                                                                        animate={buttonClicked ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                    >
                                                                        Analyzing...
                                                                    </motion.span>

                                                                    {/* Click ripple effect */}
                                                                    <AnimatePresence>
                                                                        {buttonClicked && (
                                                                            <motion.div
                                                                                className="absolute inset-0 bg-white/20 rounded-xl"
                                                                                initial={{ scale: 0, opacity: 1 }}
                                                                                animate={{ scale: 1, opacity: 0 }}
                                                                                exit={{ opacity: 0 }}
                                                                                transition={{ duration: 0.4 }}
                                                                            />
                                                                        )}
                                                                    </AnimatePresence>
                                                                </motion.button>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                )}

                                                {/* Step 2: Analysis Animation */}
                                                {index === 1 && (
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <motion.span
                                                                className="text-sm font-medium text-gray-800 dark:text-gray-200"
                                                                animate={isAnalyzing ? { opacity: [1, 0.7, 1] } : {}}
                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                            >
                                                                {isAnalyzing ? 'Analyzing...' : 'Analysis Complete'}
                                                            </motion.span>
                                                            <motion.span
                                                                className="text-sm text-blue-600 dark:text-blue-400 font-mono"
                                                                key={`progress-${Math.floor(analysisProgress)}-${animationCycle}`}
                                                            >
                                                                {Math.floor(analysisProgress)}%
                                                            </motion.span>
                                                        </div>

                                                        <div className="space-y-3">
                                                            {/* Animated Progress Bar */}
                                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                                                    initial={{ width: "0%" }}
                                                                    animate={{ width: `${analysisProgress}%` }}
                                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                                />
                                                            </div>

                                                            {/* Dynamic Check Items */}
                                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                                {checks.map((check, checkIndex) => (
                                                                    <motion.div
                                                                        key={`${check}-${animationCycle}`}
                                                                        className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${completedChecks.includes(check)
                                                                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                                                                            : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300'
                                                                            }`}
                                                                        initial={{ scale: 0.9, opacity: 0.5 }}
                                                                        animate={{
                                                                            scale: completedChecks.includes(check) ? 1 : 0.9,
                                                                            opacity: completedChecks.includes(check) ? 1 : 0.5
                                                                        }}
                                                                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                                                    >
                                                                        <AnimatePresence mode="wait">
                                                                            {completedChecks.includes(check) ? (
                                                                                <motion.div
                                                                                    initial={{ scale: 0, rotate: -90 }}
                                                                                    animate={{ scale: 1, rotate: 0 }}
                                                                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                                                                >
                                                                                    <CheckCircle className="w-3 h-3" />
                                                                                </motion.div>
                                                                            ) : (
                                                                                <motion.div
                                                                                    animate={{ rotate: 360 }}
                                                                                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                                                                                >
                                                                                    <Clock className="w-3 h-3" />
                                                                                </motion.div>
                                                                            )}
                                                                        </AnimatePresence>
                                                                        <span>{check}</span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Step 3: Report with Layout Animation */}
                                                {index === 2 && (
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={showReport ? `report-${animationCycle}` : `placeholder-${animationCycle}`}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.4 }}
                                                            className="space-y-4"
                                                        >
                                                            {showReport ? (
                                                                <>
                                                                    <motion.div
                                                                        className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600"
                                                                        initial={{ scale: 0.95, opacity: 0 }}
                                                                        animate={{ scale: 1, opacity: 1 }}
                                                                        transition={{ delay: 0.1, duration: 0.4 }}
                                                                    >
                                                                        <div className="flex items-center gap-3">
                                                                            <motion.div
                                                                                initial={{ scale: 0 }}
                                                                                animate={{ scale: 1 }}
                                                                                transition={{ type: "spring", delay: 0.2, stiffness: 300, damping: 20 }}
                                                                            >
                                                                                <FileCheck className="w-5 h-5 text-green-500" />
                                                                            </motion.div>
                                                                            <div>
                                                                                <div className="font-medium text-gray-900 dark:text-white">Website Report</div>
                                                                                <div className="text-sm text-gray-700 dark:text-gray-300">PDF • 2.4 MB</div>
                                                                            </div>
                                                                        </div>
                                                                        <motion.button
                                                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
                                                                            initial={{ x: 20, opacity: 0 }}
                                                                            animate={{ x: 0, opacity: 1 }}
                                                                            transition={{ delay: 0.4, duration: 0.4 }}
                                                                        >
                                                                            Download
                                                                        </motion.button>
                                                                    </motion.div>

                                                                    <motion.div
                                                                        className="grid grid-cols-3 gap-2 text-xs"
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: 0.6, duration: 0.4 }}
                                                                    >
                                                                        {[
                                                                            { score: 85, label: 'Performance', color: 'green' },
                                                                            { score: 78, label: 'Accessibility', color: 'yellow' },
                                                                            { score: 92, label: 'SEO', color: 'blue' }
                                                                        ].map((item, i) => (
                                                                            <motion.div
                                                                                key={`${item.label}-${animationCycle}`}
                                                                                className={`text-center p-2 bg-${item.color}-50 dark:bg-${item.color}-900/20 rounded-lg`}
                                                                                initial={{ scale: 0.8, opacity: 0 }}
                                                                                animate={{ scale: 1, opacity: 1 }}
                                                                                transition={{ delay: 0.8 + i * 0.1, type: "spring", duration: 0.5 }}
                                                                            >
                                                                                <motion.div
                                                                                    className={`font-bold text-${item.color}-600 dark:text-${item.color}-400`}
                                                                                    initial={{ scale: 0 }}
                                                                                    animate={{ scale: 1 }}
                                                                                    transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 400, duration: 0.5 }}
                                                                                >
                                                                                    {item.score}
                                                                                </motion.div>
                                                                                <div className="text-gray-800 dark:text-gray-200">{item.label}</div>
                                                                            </motion.div>
                                                                        ))}
                                                                    </motion.div>
                                                                </>
                                                            ) : (
                                                                <div className="space-y-4 opacity-50">
                                                                    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600">
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                                                                            <div>
                                                                                <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
                                                                                <div className="w-16 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                                                                    </div>
                                                                    <div className="grid grid-cols-3 gap-2">
                                                                        {[1, 2, 3].map(i => (
                                                                            <div key={i} className="text-center p-2 bg-gray-100 dark:bg-gray-900 rounded-lg">
                                                                                <div className="w-8 h-6 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-1"></div>
                                                                                <div className="w-12 h-3 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    </AnimatePresence>
                                                )}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-center mt-20"
                    >
                        <Link
                            href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`}
                            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                        >
                            <Target className="w-5 h-5 relative z-20" />
                            <span className="relative z-20">Start Free Audit</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />

                            {/* Shine effect - Fixed */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>

                            {/* Subtle pulse effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks

