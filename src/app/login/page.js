'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { Shield, Sparkles } from 'lucide-react'

export default function LoginPage() {
    const { user, isAuthenticated, loginWithGoogle, loading, mounted } = useAuth()
    const router = useRouter()

    // Redirect if already authenticated
    useEffect(() => {
        if (mounted && isAuthenticated) {
            router.push('/audit')
        }
    }, [mounted, isAuthenticated, router])

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted || loading) {
        return (
            <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-blue-400/10 dark:bg-blue-600/10 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-400/10 dark:bg-pink-600/10 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
                    {/* Header Skeleton */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mx-auto mb-6 animate-pulse"></div>
                        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>
                        <div className="h-5 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                    </div>

                    {/* Login Card Skeleton */}
                    <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/30 dark:border-gray-700/30 p-8">
                        <div className="space-y-6">
                            {/* Security Notice Skeleton */}
                            <div className="bg-blue-50/80 dark:bg-blue-950/30 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/30">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                    <div className="flex-1">
                                        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-1 animate-pulse"></div>
                                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Sign In Button Skeleton */}
                            <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>

                            {/* Terms Skeleton */}
                            <div className="text-center">
                                <div className="h-3 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Skeleton */}
                    <div className="mt-8 text-center">
                        <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                    </div>
                </div>
            </div>
        )
    }

    // Don't render login form if already authenticated
    if (isAuthenticated) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-blue-400/10 dark:bg-blue-600/10 animate-blob"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-400/10 dark:bg-pink-600/10 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-950/50 rounded-2xl mb-6 backdrop-blur-sm">
                        <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 font-light">
                        Sign in to access your website audit dashboard
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/30 dark:border-gray-700/30 p-8">
                    <div className="space-y-6">
                        {/* Security Notice */}
                        <div className="bg-blue-50/80 dark:bg-blue-950/30 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/30">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">
                                        Secure Authentication
                                    </h3>
                                    <p className="text-xs text-blue-700 dark:text-blue-300 font-light">
                                        We use Google OAuth for secure, passwordless authentication. Your data is protected.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Sign In Button */}
                        <div>
                            <button
                                onClick={loginWithGoogle}
                                className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 font-medium py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md group"
                            >
                                {/* Google Icon */}
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span className="text-base">Continue with Google</span>
                            </button>
                        </div>

                        {/* Terms and Privacy */}
                        <div className="text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-light">
                                By signing in, you agree to our{' '}
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                        New to our platform?{' '}
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                            Get started with a free audit
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
} 