'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {   Clock } from 'lucide-react'


export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const targetDate = new Date('2025-06-27T22:00:00Z')

        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = targetDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    const timeBlocks = [
        { value: timeLeft.days, label: 'DAYS' },
        { value: timeLeft.hours, label: 'HOURS' },
        { value: timeLeft.minutes, label: 'MINUTES' },
        { value: timeLeft.seconds, label: 'SECONDS' }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br mb-[100px] from-red-50 via-white to-red-50 dark:from-red-950/30 dark:via-gray-900 dark:to-red-950/30 rounded-2xl shadow-xl border border-red-100 dark:border-red-900/50 backdrop-blur-sm relative overflow-hidden mt-8"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-8 relative"
            >
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 rounded-full px-6 py-2 mb-4"
                >
                    <Clock className="w-5 h-5 text-red-600 dark:text-red-400 animate-pulse" />
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">Act Now</span>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    You could be fined up to {" "}
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                          €100,000
                    </span>
                    {' '}if you’re not compliant by{' '}
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        June 28, 2025
                    </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Don't wait until it's too late. Start your compliance journey today and avoid potential fines and legal issues
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                {timeBlocks.map((block, index) => (
                    <motion.div
                        key={block.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-lg">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={block.value}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
                                >
                                    {block.value.toString().padStart(2, '0')}
                                </motion.div>
                            </AnimatePresence>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">
                                {block.label}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            
        </motion.div>
    )
} 