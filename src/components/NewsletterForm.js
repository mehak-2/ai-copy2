'use client'

import { useState } from 'react'

export default function NewsletterForm({ className = '', title, description, buttonText = 'Subscribe' }) {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email.trim()) {
            console.log('Please enter your email address')
            return
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log('Please enter a valid email address')
            return
        }

        // Simulate loading state
        setIsLoading(true)

        // Simulate API call delay
        setTimeout(() => {
            setIsLoading(false)
            console.log('Newsletter subscription:', { email: email.trim() })
            setEmail('')
        }, 1000)
    }

    return (
        <div className={className}>
            {title && (
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {title}
                </h3>
            )}
            {description && (
                <p className="text-gray-800 dark:text-gray-200 mb-6">
                    {description}
                </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-400 dark:border-gray-500 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-700 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors duration-200"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? 'Subscribing...' : buttonText}
                </button>
            </form>
        </div>
    )
} 