'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme, mounted } = useTheme()

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <div className={`w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 ${className}`}>
                {/* Placeholder while loading */}
            </div>
        )
    }

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative w-10 h-10 rounded-lg border border-gray-400 dark:border-gray-500
                bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100
                hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-600 dark:hover:border-gray-400
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent
                transition-all duration-200 ease-in-out
                ${className}
            `}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="relative flex items-center justify-center w-full h-full">
                {/* Sun icon for light mode */}
                <Sun
                    className={`
                        absolute w-5 h-5 transition-all duration-300 ease-in-out
                        ${theme === 'light'
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 rotate-90 scale-75'
                        }
                    `}
                />

                {/* Moon icon for dark mode */}
                <Moon
                    className={`
                        absolute w-5 h-5 transition-all duration-300 ease-in-out
                        ${theme === 'dark'
                            ? 'opacity-100 rotate-0 scale-100'
                            : 'opacity-0 -rotate-90 scale-75'
                        }
                    `}
                />
            </div>
        </button>
    )
} 