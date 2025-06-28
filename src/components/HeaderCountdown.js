'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export default function HeaderCountdown() {
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

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white border-b border-t border-red-100 dark:border-red-900/50"
        >
            <div className="container mx-auto  py-2">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 animate-pulse" />
                        <span className="font-medium text-red-700 dark:text-red-300">
                            EU Accessibility Deadline:
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-red-600 dark:text-red-400">{timeLeft.days}</span>
                            <span className="text-gray-600 dark:text-gray-400">days</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-red-600 dark:text-red-400">{timeLeft.hours}</span>
                            <span className="text-gray-600 dark:text-gray-400">hours</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-red-600 dark:text-red-400">{timeLeft.minutes}</span>
                            <span className="text-gray-600 dark:text-gray-400">min</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-red-600 dark:text-red-400">{timeLeft.seconds}</span>
                            <span className="text-gray-600 dark:text-gray-400">sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 