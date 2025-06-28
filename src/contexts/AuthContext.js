'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [mounted, setMounted] = useState(false)

    // Set mounted to true after component mounts to prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Check authentication status by calling /api/v1/auth/me
    const checkAuthStatus = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
            const response = await fetch(`${baseUrl}/api/v1/auth/me`, {
                method: 'GET',
                credentials: 'include', // Include cookies for authentication
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            // Check if user is authenticated based on response format
            if (data.user && data.user._id) {
                // User is authenticated - response contains user object
                const userData = {
                    id: data.user._id,
                    name: data.user.name,
                    email: data.user.email,
                    picture: data.user.profilePicture,
                    subscription:data.user.subscription,
                    usedAuditCredit: data.user.usedAuditCredit,
                    provider: 'google',
                    createdAt: data.user.createdAt,
                    updatedAt: data.user.updatedAt
                }
                setUser(userData)
                localStorage.setItem('user', JSON.stringify(userData))
            } else if (data.success === false) {
                // User is not authenticated
                setUser(null)
                localStorage.removeItem('user')
            }
        } catch (error) {
            console.error('Error checking auth status:', error)
            // If API call fails, clear user state
            setUser(null)
            localStorage.removeItem('user')
        } finally {
            setLoading(false)
        }
    }

    // Initialize auth state and handle OAuth callback
    useEffect(() => {
        if (mounted) {
            // Check for OAuth callback with user data in URL params
            const urlParams = new URLSearchParams(window.location.search)
            const userParam = urlParams.get('user')
            const token = urlParams.get('token')

            if (userParam && token) {
                try {
                    const decoded = decodeURIComponent(userParam);
                    const userData = JSON.parse(decoded);
                    userData.token = token;
                    setUser(userData);
                    localStorage.setItem('user', JSON.stringify(userData));

                    // Clean up URL
                    window.history.replaceState({}, document.title, window.location.pathname);
                    setLoading(false);
                } catch (error) {
                    console.error('Error parsing OAuth callback data:', error, 'userParam:', userParam);
                    // If callback parsing fails, check auth status with API
                    checkAuthStatus();
                }
            } else {
                // No OAuth callback, check authentication status with API
                checkAuthStatus()
            }
        }
    }, [mounted])

    // Google OAuth login handler
    const loginWithGoogle = () => {
        // Get base URL from environment variables
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
        const googleAuthUrl = `${baseUrl}/api/v1/auth/google`

        // Redirect to Google OAuth
        window.location.href = googleAuthUrl
    }

    // Logout handler
    const logout = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
            await fetch(`${baseUrl}/api/v1/auth/logout`, {
                method: 'GET', // Your route uses GET method
                credentials: 'include', // Include cookies for authentication
                headers: {
                    'Content-Type': 'application/json'
                }
            }).catch(error => {
                console.warn('Logout request failed:', error)
            })
        } catch (error) {
            console.warn('Error during logout:', error)
        } finally {
            // Always clear local state regardless of server response
            setUser(null)
            localStorage.removeItem('user')
        }
    }

    // Check if user is authenticated
    const isAuthenticated = user !== null

    const value = {
        user,
        loading,
        mounted,
        isAuthenticated,
        loginWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
} 