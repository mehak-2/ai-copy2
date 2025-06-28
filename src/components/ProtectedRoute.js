'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading, mounted } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (mounted && !loading && !isAuthenticated) {
            router.push('/login')
        }
    }, [mounted, loading, isAuthenticated, router])

    // Show skeleton loader while checking authentication
    if (!mounted || loading) {
        return (
            <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900">
                {/* Header Skeleton */}
                <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700 fixed w-full top-0 z-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            <div className="hidden md:flex items-center space-x-8">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Skeleton */}
                <div className="pt-24 pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header Section */}
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto mb-6 animate-pulse"></div>
                            <div className="h-8 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
                            <div className="h-6 w-80 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
                        </div>

                        {/* Form Skeleton */}
                        <div className="max-w-2xl mx-auto mb-16">
                            <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200/30 dark:border-gray-700/30">
                                <div className="space-y-4">
                                    <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                                    <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Don't render children if not authenticated
    if (!isAuthenticated) {
        return null
    }

    // Render protected content
    return children
} 