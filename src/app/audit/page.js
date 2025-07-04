'use client'

import { useState } from 'react'
import { Search, Download, Loader, CheckCircle, AlertCircle, XCircle, Globe, Zap, Shield, BarChart3, Brain, Sparkles } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function AuditPage() {
    const [url, setUrl] = useState('')
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [results, setResults] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!url.trim()) return

        setIsAnalyzing(true)
        setError('')
        setResults(null)

        // Validate and format URL
        let websiteUrl = url.trim()
        if (!websiteUrl.startsWith('http://') && !websiteUrl.startsWith('https://')) {
            websiteUrl = 'https://' + websiteUrl
        }

        try {
            // Validate URL format
            new URL(websiteUrl)

            // Make actual API call to the audit endpoint
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/audit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                credentials: 'include', // Include cookies if authentication is needed
                body: JSON.stringify({ websiteUrl })
            })

            const data = await response.json()

            if (response.ok && data.success) {
                // Use only the actual data from API response
                const transformedResults = {
                    auditId: data.data.auditId,
                    url: data.data.url,
                    scores: {
                        performance: data.data.scores.performance || 0,
                        accessibility: data.data.scores.accessibility || 0,
                        seo: data.data.scores.seo || 0
                    },
                    totalIssues: data.data.totalIssues || 0,
                    timestamp: data.data.timestamp,
                    summary: data.data.summary
                }

                setResults(transformedResults)
                console.log('Audit completed for:', websiteUrl)
            } else {
                // Handle API errors
                if (data.errors && data.errors.length > 0) {
                    setError(data.errors[0].msg || 'Validation error occurred')
                } else if (data.error) {
                    setError(data.error)
                } else {
                    setError('Failed to analyze website. Please try again.')
                }
            }
        } catch (err) {
            console.error('Audit error:', err)
            if (err.name === 'TypeError' && err.message.includes('URL')) {
                setError('Please enter a valid website URL')
            } else if (err.message.includes('fetch')) {
                setError('Unable to connect to audit service. Please ensure the server is running.')
            } else {
                setError('An unexpected error occurred. Please try again.')
            }
        } finally {
            setIsAnalyzing(false)
        }
    }



    const handleDownloadReport = async () => {
        if (!results?.auditId) return

        try {
            // Make API call to get detailed report
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/audit/${results.auditId}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                },
                credentials: 'include'
            })

            if (response.ok) {
                const contentType = response.headers.get('content-type')

                if (contentType && contentType.includes('application/pdf')) {
                    // Handle PDF response
                    const blob = await response.blob()
                    const url = window.URL.createObjectURL(blob)
                    const link = document.createElement('a')
                    link.href = url
                    link.download = `website-audit-report-${results.auditId}.pdf`
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    window.URL.revokeObjectURL(url)
                } else {
                    // Handle JSON response and create formatted report
                    const reportData = await response.json()

                    // Create comprehensive report content
                    const reportContent = `
Website Audit Report
===================
URL: ${reportData.url}
Generated: ${new Date(reportData.timestamp).toLocaleString()}
Audit ID: ${results.auditId}

PERFORMANCE SCORES
-----------------
Performance: ${reportData.scores.performance}/100
Accessibility: ${reportData.scores.accessibility}/100
SEO: ${reportData.scores.seo}/100
${reportData.scores.bestPractices ? `Best Practices: ${reportData.scores.bestPractices}/100` : ''}

ISSUES SUMMARY
--------------
Total Issues Found: ${reportData.totalIssues}
Critical Issues: ${results.summary.critical}
Moderate Issues: ${results.summary.moderate}
Minor Issues: ${results.summary.minor}

DETAILED ANALYSIS
----------------
${reportData.issues ? reportData.issues.map((issue, index) => `
${index + 1}. ${issue.title || 'Issue'}
   Impact: ${issue.impact || 'Unknown'}
   Category: ${issue.category || 'General'}
   Description: ${issue.description || 'No description available'}
   ${issue.element ? `Element: ${issue.element}` : ''}
`).join('\n') : 'No detailed issues available'}

RECOMMENDATIONS
--------------
${reportData.issues ? reportData.issues.filter(issue => issue.aiSuggestion).map((issue, index) => `
${index + 1}. ${issue.title}
   Suggestion: ${issue.aiSuggestion}
`).join('\n') : 'No specific recommendations available'}

METADATA
--------
Audit Runtime: ${reportData.metadata?.runtime ? `${reportData.metadata.runtime}ms` : 'N/A'}
User Agent: ${reportData.metadata?.userAgent || 'N/A'}
Timestamp: ${reportData.timestamp}

---
Report generated by Axto.ai Website Auditor
                    `.trim()

                    const blob = new Blob([reportContent], { type: 'text/plain; charset=utf-8' })
                    const url = window.URL.createObjectURL(blob)
                    const link = document.createElement('a')
                    link.href = url
                    link.download = `website-audit-report-${results.auditId}-${new Date().toISOString().split('T')[0]}.txt`
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    window.URL.revokeObjectURL(url)
                }
            } else {
                console.error('Failed to download report:', response.status, response.statusText)
                setError('Failed to download report. Please try again.')
            }
        } catch (err) {
            console.error('Error downloading report:', err)
            setError('Error downloading report. Please check your connection.')
        }
    }

    const getScoreColor = (score) => {
        if (score >= 90) return 'text-emerald-600 dark:text-emerald-400'
        if (score >= 75) return 'text-amber-600 dark:text-amber-400'
        return 'text-red-500 dark:text-red-400'
    }

    const getScoreBgColor = (score) => {
        if (score >= 90) return 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/30'
        if (score >= 75) return 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/30'
        return 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800/30'
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900">
                <Header />

                <div className="pt-24 mt-28 md:mt-16 lg:mt-20  pb-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-950/50 rounded-xl mb-6">
                                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
                                Website Analysis Tool
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                Get comprehensive insights into your website's performance, accessibility, and SEO optimization
                            </p>
                        </div>

                        {/* URL Input Form */}
                        <div className="max-w-2xl mx-auto mb-16">
                            <form onSubmit={handleSubmit} className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200/30 dark:border-gray-700/30">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                                        <input
                                            type="text"
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            placeholder="Enter website URL (e.g., example.com)"
                                            className="w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-gray-50/80 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white dark:focus:bg-gray-800 transition-all duration-300 text-lg"
                                            disabled={isAnalyzing}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isAnalyzing || !url.trim()}
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-4 rounded-xl transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                                    >
                                        {isAnalyzing ? (
                                            <>
                                                <Loader className="w-5 h-5 animate-spin" />
                                                <span>Analyzing Website...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Search className="w-5 h-5" />
                                                <span>Start Analysis</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="max-w-2xl mx-auto mb-8">
                                <div className="bg-red-50/80 dark:bg-red-950/30 backdrop-blur-sm border border-red-200/50 dark:border-red-800/30 rounded-xl p-4 flex items-center">
                                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center mr-3">
                                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <span className="text-red-700 dark:text-red-300 font-medium">{error}</span>
                                </div>
                            </div>
                        )}

                        {/* Loading State */}
                        {isAnalyzing && (
                            <div className="max-w-2xl mx-auto">
                                <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200/30 dark:border-gray-700/30 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-950/50 rounded-2xl mb-6">
                                        <Loader className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        Analyzing Your Website
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-light">
                                        Running comprehensive performance, accessibility, and SEO tests...
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Results */}
                        {results && (
                            <div className="max-w-6xl mx-auto space-y-8">
                                {/* Scores Overview */}
                                <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200/30 dark:border-gray-700/30">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                                        <div>
                                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Analysis Results</h2>
                                            <p className="text-gray-600 dark:text-gray-400 font-light">Comprehensive website evaluation</p>
                                        </div>
                                        <button
                                            onClick={handleDownloadReport}
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Download Report</span>
                                        </button>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        {[
                                            { key: 'performance', label: 'Performance', icon: Zap },
                                            { key: 'accessibility', label: 'Accessibility', icon: Shield },
                                            { key: 'seo', label: 'SEO', icon: BarChart3 }
                                        ].filter(({ key }) => results.scores[key] !== undefined).map(({ key, label, icon: Icon }) => (
                                            <div key={key} className={`text-center p-6 rounded-xl border ${getScoreBgColor(results.scores[key])}`}>
                                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/60 dark:bg-gray-800/60 mb-4">
                                                    <Icon className={`w-7 h-7 ${getScoreColor(results.scores[key])}`} />
                                                </div>
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{label}</h3>
                                                <div className={`text-3xl font-bold ${getScoreColor(results.scores[key])}`}>
                                                    {results.scores[key]}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Issues Summary */}
                                {results.summary && (results.summary.critical > 0 || results.summary.moderate > 0 || results.summary.minor > 0) && (
                                    <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200/30 dark:border-gray-700/30">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 dark:bg-orange-950/50 rounded-xl">
                                                <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Issues Summary</h2>
                                                <p className="text-gray-600 dark:text-gray-400 font-light">Total of {results.totalIssues} issues found</p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            {[
                                                { key: 'critical', label: 'Critical', color: 'red', icon: XCircle },
                                                { key: 'moderate', label: 'Moderate', color: 'amber', icon: AlertCircle },
                                                { key: 'minor', label: 'Minor', color: 'blue', icon: CheckCircle }
                                            ].map(({ key, label, color, icon: Icon }) => (
                                                <div key={key} className={`text-center p-6 rounded-xl border bg-${color}-50/60 dark:bg-${color}-950/30 border-${color}-200/30 dark:border-${color}-800/30`}>
                                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/60 dark:bg-gray-800/60 mb-4">
                                                        <Icon className={`w-7 h-7 text-${color}-600 dark:text-${color}-400`} />
                                                    </div>
                                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{label}</h3>
                                                    <div className={`text-3xl font-bold text-${color}-600 dark:text-${color}-400`}>
                                                        {results.summary[key] || 0}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <Footer />
            </div>
        </ProtectedRoute>
    )
} 