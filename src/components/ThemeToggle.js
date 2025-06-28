'use client'

import { Sun } from 'lucide-react'

export default function ThemeToggle({ className = '' }) {
    // Always use light mode
    const theme = 'light';

    return (
        <div
            className={`
                relative w-10 h-10 rounded-lg border border-gray-400
                bg-white text-gray-800
                hover:bg-gray-100 hover:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent
                transition-all duration-200 ease-in-out
                ${className}
            `}
            aria-label="Light mode"
            title="Light mode"
        >
            <div className="relative flex items-center justify-center w-full h-full">
                {/* Sun icon for light mode */}
                <Sun className="w-5 h-5 opacity-100 rotate-0 scale-100" />
            </div>
        </div>
    )
} 