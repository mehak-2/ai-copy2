"use client"
import React, { createContext, useContext } from 'react'

const CtaContext = createContext()

export const useCta = () => {
    const context = useContext(CtaContext)
    if (context === undefined) {
        throw new Error('useCta must be used within a CtaProvider')
    }
    return context
}

export const CtaProvider = ({ children }) => {
    // Function to call the CTA API
    const createCta = async ({ email, number }) => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'
            const response = await fetch(`${baseUrl}/api/v1/cta/create`, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, number })
            })
            const data = await response.json()
            if (response.ok) {
                return { success: true, data }
            } else {
                return { success: false, data }
            }
        } catch (error) {
            return { success: false, data: { error: 'Internal server error' } }
        }
    }

    return (
        <CtaContext.Provider value={{ createCta }}>
            {children}
        </CtaContext.Provider>
    )
} 