'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Target, ArrowRight, LogOut, User } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import ProfileDropdown from './ProfileDropdown'
import ConfirmationModal from './ConfirmationModal'
import { useAuth } from '@/contexts/AuthContext'
import HeaderCountdown from './HeaderCountdown'
import HeaderWebinar from './HeaderWebinar'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const { user, isAuthenticated, logout } = useAuth()

    const handleSignOutClick = () => {
        setShowLogoutModal(true)
    }

    const handleConfirmLogout = async () => {
        setShowLogoutModal(false)
        await logout()
    }

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Audit', href: 'https://app.axto.ai/audit' },
        { name: 'Widget', href: 'https://app.axto.ai/widget' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        // { name: 'Upgrade', href: 'https://app.axto.ai/upgrade' },
    ]

    return (
        <header className="bg-[#111111]  shadow-sm   fixed w-full top-0 z-40 transition-colors duration-150">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex flex-row items-center gap-2">
                        <div className='w-8 h-8 relative  p-2 '>
                            <svg className='absolute top-0 left-0 w-full h-full' width="72" height="70" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.6283 34.4969L21.5605 70.0004H0L28.0287 0.143799L27.885 0H43.8398V0.143799L71.7244 70.0004H50.1644L39.0965 34.4969C37.2279 28.46 37.6591 19.9795 37.6591 13.5113H34.0657C34.0657 19.9795 34.6406 28.46 32.6283 34.4969Z" fill="url(#paint0_linear_0_18)" />
                                <defs>
                                    <linearGradient id="paint0_linear_0_18" x1="35.8624" y1="0" x2="35.8624" y2="70.0004" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9234EA" />
                                        <stop offset="1" stopColor="#2862EB" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>


                        <span className="text-[25px] font-bold text-white ">axto.ai</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[#FFFFFF]  hover:text-primary-600  font-medium transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* <ThemeToggle /> */}

                        {isAuthenticated ? (
                            <ProfileDropdown
                                user={user}
                                onSignOut={handleSignOutClick}
                            />
                        ) : (
                            <Link
                                href="/login"
                                className="group relative inline-flex items-center justify-center gap-3  bg-[#444CE7] hover:to-purple-700 text-white font-semibold px-4 py-2.5 rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.0] transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-20">Sign In</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />

                                {/* Shine effect - Fixed */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>

                                {/* Subtle pulse effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center gap-2">
                        {/* <ThemeToggle /> */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-gray-400  hover:text-gray-600  hover:bg-gray-100  transition-colors duration-150"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
                    

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100 ">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600  hover:text-primary-600  font-medium py-2 transition-colors duration-150"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {isAuthenticated ? (
                                <div className="mt-4 pt-4 border-t border-gray-200 ">
                                    <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-gray-50  rounded-lg">
                                        <div className="w-6 h-6 rounded-full overflow-hidden bg-blue-100  flex items-center justify-center">
                                            {user?.picture ? (
                                                <img
                                                    src={user.picture}
                                                    alt={user.name || 'User'}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <User className="w-3 h-3 text-blue-600 " />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-700  truncate">
                                                {user?.name || 'User'}
                                            </p>
                                            <p className="text-xs text-gray-500  truncate">
                                                {user?.email || ''}
                                            </p>
                                        </div>
                                    </div>
                                    <Link href={`https://app.axto.ai/`}>
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2 w-full px-3 py-2 text-gray-600  hover:bg-gray-50  rounded-lg transition-all duration-150"
                                        >
                                            <Target className="w-4 h-4" />
                                            <span className="text-sm font-medium">Dashboard</span>
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleSignOutClick()
                                            setIsMenuOpen(false)
                                        }}
                                        className="flex items-center gap-2 w-full px-3 py-2 text-red-600 hover:bg-red-50  rounded-lg transition-all duration-150"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span className="text-sm font-medium">Sign out</span>
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    href="/login"
                                    className="btn-primary w-full justify-center mt-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {/* <HeaderCountdown /> */}
            {/* <HeaderWebinar /> */}
            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={handleConfirmLogout}
                title="Sign Out"
                message="Are you sure you want to sign out? You'll need to sign in again to access your account."
                confirmText="Sign Out"
                cancelText="Cancel"
                type="warning"
            />
        </header>
    )
} 