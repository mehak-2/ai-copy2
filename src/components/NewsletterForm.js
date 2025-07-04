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
                <h3 className="text-2xl font-bold text-gray-900 mb-4" id="newsletter-title">
                    {title}
                </h3>
            )}
            {description && (
                <p className="text-gray-800 mb-6" id="newsletter-desc">
                    {description}
                </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" aria-labelledby="newsletter-title" aria-describedby="newsletter-desc">
                <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                </label>
                <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-input flex-1"
                    disabled={isLoading}
                    required
                    aria-required="true"
                    aria-label="Email address"
                />
                <button
                    type="submit"
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                    aria-busy={isLoading}
                >
                    {isLoading ? 'Subscribing...' : buttonText}
                </button>
            </form>
        </div>
    )
} 