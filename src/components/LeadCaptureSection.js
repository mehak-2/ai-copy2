'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react'
import LeadCaptureForm from './LeadCaptureForm'

const LeadCaptureSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    const layoutVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    return (
        <section ref={ref} className="relative py-24 overflow-hidden">
            {/* Minimal background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white "></div>

            {/* Subtle texture */}
            <div className="absolute inset-0 opacity-[0.015] ">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center">
                        {/* Subtle icon */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center justify-center w-12 h-12 bg-blue-50  rounded-xl mb-8"
                        >
                            <Sparkles className="w-5 h-5 text-blue-600 " />
                        </motion.div>

                        {/* Refined heading */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900  mb-4 leading-tight tracking-tight"
                        >
                           Let's Connect
                        </motion.h2>

                        {/* Minimal subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base text-gray-800  mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                        >
                        Together, we'll make your website fully accessible and EAA compliant
                        </motion.p>

                        {/* Form Container with Layout Animation */}
                        <motion.div
                            variants={layoutVariants}
                            layout
                            className="max-w-xl mx-auto"
                        >
                            {!isSubmitted ? (
                                <motion.div
                                    layout
                                    className="bg-white/90  backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5  border border-gray-300/30 "
                                >
                                    <LeadCaptureForm onSuccess={() => setIsSubmitted(true)} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="bg-green-50/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-green-200/30  shadow-lg shadow-green-500/5"
                                >
                                    <div className="text-center">
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                                            className="inline-flex items-center justify-center w-12 h-12 bg-green-100  rounded-xl mb-6"
                                        >
                                            <CheckCircle className="w-6 h-6 text-green-600 " />
                                        </motion.div>

                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="text-xl md:text-2xl font-semibold text-gray-900  mb-3"
                                        >
                                            Thank you for connecting with us.
                                        </motion.h3>

                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            className="text-gray-800  mb-6 font-light"
                                        >
                                           We'll reach out to you soon.
                                        </motion.p>

                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                      
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 "
                            >
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                                    <span>Kickstart your journey with one month of free credits</span>
                                </div>
                               
                               
                            </motion.div>
                        
                    </div>
                </motion.div>
            </div>

            {/* Subtle floating elements */}
            <motion.div
                className="absolute top-1/4 left-8 w-2 h-2 bg-blue-400/20 rounded-full hidden lg:block"
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-purple-400/20 rounded-full hidden lg:block"
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute bottom-1/4 left-16 w-1 h-1 bg-green-400/20 rounded-full hidden lg:block"
                animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </section>
    )
}

export default LeadCaptureSection 