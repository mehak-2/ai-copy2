'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { User, LogOut, ChevronDown, Target } from 'lucide-react'
import Link from 'next/link'

export default function ProfileDropdown({ user, onSignOut }) {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const dropdownRef = useRef(null)
    const buttonRef = useRef(null)
    const [buttonRect, setButtonRect] = useState(null)

    // Set mounted state
    useEffect(() => {
        setMounted(true)
    }, [])

    // Update button position when dropdown opens
    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            setButtonRect(rect)
        }
    }, [isOpen])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Close dropdown on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    const handleSignOut = () => {
        setIsOpen(false)
        onSignOut()
    }

    return (
        <div className="relative">
            {/* Profile Button */}
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-150 group"
            >
                {/* Profile Picture or Icon */}
                <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    {user?.picture ? (
                        <img
                            src={user.picture}
                            alt={user.name || 'User'}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    )}
                </div>

                {/* User Name */}
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 max-w-24 truncate">
                    {user?.name?.split(' ')[0] || 'User'}
                </span>

                {/* Dropdown Arrow */}
                <ChevronDown
                    className={`w-4 h-4 text-gray-700 dark:text-gray-300 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu - Rendered in Portal */}
            {isOpen && mounted && buttonRect && createPortal(
                <div
                    ref={dropdownRef}
                    className="fixed w-64 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-300 dark:border-gray-600 py-2 z-[60]"
                    style={{
                        top: `${buttonRect.bottom + 8}px`,
                        right: `${window.innerWidth - buttonRect.right}px`,
                        animation: 'fade-in-up 0.2s ease-out'
                    }}
                >
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-200/30 dark:border-gray-700/30">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                {user?.picture ? (
                                    <img
                                        src={user.picture}
                                        alt={user.name || 'User'}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    {user?.name || 'User'}
                                </p>
                                <p className="text-xs text-gray-700 dark:text-gray-300 truncate">
                                    {user?.email || ''}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                         <Link href={`https://app.axto.ai/`}>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 w-full px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-150"
                                        >
                                            <Target className="w-4 h-4" />
                                            <span className="text-sm font-medium">Dashboard</span>
                                        </button>
                                    </Link>
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-gray-800 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-200 transition-all duration-100"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="text-sm font-medium">Sign out</span>
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
} 