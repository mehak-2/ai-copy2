'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const [mounted, setMounted] = useState(false)

    // Set mounted to true after component mounts to prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Initialize theme from localStorage or default to dark theme
    useEffect(() => {
        if (mounted) {
            const savedTheme = localStorage.getItem('theme')
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            const initialTheme = savedTheme || 'dark' // Default to dark theme

            setTheme(initialTheme)
            updateDocumentClass(initialTheme)
        }
    }, [mounted])

    // Update document class when theme changes
    const updateDocumentClass = (newTheme) => {
        const root = document.documentElement
        if (newTheme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        updateDocumentClass(newTheme)
    }

    const setLightTheme = () => {
        setTheme('light')
        localStorage.setItem('theme', 'light')
        updateDocumentClass('light')
    }

    const setDarkTheme = () => {
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
        updateDocumentClass('dark')
    }

    const value = {
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        mounted
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
} 