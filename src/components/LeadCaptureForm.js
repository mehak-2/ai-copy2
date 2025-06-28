'use client'

import { useState } from 'react'
import { Mail, Phone, Send, Loader } from 'lucide-react'
import { useCta } from '../contexts/CtaContext'

// HELPER: Make sure this utility class exists in your global CSS file (e.g., globals.css)
// .sr-only {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   margin: -1px;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border-width: 0;
// }

export default function LeadCaptureForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        email: '',
        number: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const { createCta } = useCta()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.email.trim() || !formData.number.trim()) {
            console.log('Please fill in all fields')
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            console.log('Please enter a valid email address')
            return
        }

        setIsLoading(true)
        const result = await createCta({ email: formData.email.trim(), number: formData.number.trim() })
        setIsLoading(false)

        if (result.success) {
            console.log(result.data.message || 'CTA created successfully')
            setFormData({ email: '', number: '' })
            onSuccess && onSuccess()
        } else if (result.data.errors) {
            console.log(result.data.errors[0]?.msg || 'Validation error')
        } else if (result.data.error) {
            console.log(result.data.error)
        } else {
            console.log('Unknown error')
        }
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-3">
                    {/* Email Input */}
                    <div className="flex-1 relative">
                        <label htmlFor="lead-email" className="sr-only">Email address</label>
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 w-4 h-4" />
                        <input
                            id="lead-email"
                            type="email"
                            name="email"
                            placeholder="user@gmail.com"
                            // FIX 1: Removed redundant aria-label. The <label> is correctly associated.
                            value={formData.email}
                            onChange={handleInputChange}
                            required // Add required for native browser validation
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-400 bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-gray-900 placeholder-gray-700 transition-all duration-200 text-sm font-medium"
                            disabled={isLoading}
                        />
                    </div>

                    {/* Number Input */}
                    <div className="flex-1 relative">
                        <label htmlFor="lead-number" className="sr-only">Phone number</label>
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 w-4 h-4" />
                        <input
                            id="lead-number"
                            type="tel" // FIX 2: Changed type to "tel" for better semantics and mobile UX
                            name="number"
                            placeholder="+919762422222"
                            // FIX 1: Removed redundant aria-label. The <label> is correctly associated.
                            value={formData.number}
                            onChange={handleInputChange}
                            required // Add required for native browser validation
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-400 bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-gray-900 placeholder-gray-700 transition-all duration-200 text-sm font-medium"
                            disabled={isLoading}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-shrink-0 bg-gray-900 text-white hover:bg-gray-800 font-medium py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px] shadow-sm"
                    >
                        {isLoading ? (
                            <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                            <>
                                <span className="text-sm">Send</span>
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}