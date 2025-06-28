'use client'

import { X, AlertTriangle } from 'lucide-react'

export default function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message = "Are you sure you want to proceed?",
    confirmText = "Confirm",
    cancelText = "Cancel",
    type = "warning" // warning, danger, info
}) {
    if (!isOpen) return null

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }
 
    const getIconColor = () => {
        switch (type) {
            case 'danger':
                return 'text-red-600 dark:text-red-400'
            case 'info':
                return 'text-blue-600 dark:text-blue-400'
            default:
                return 'text-amber-600 dark:text-amber-400'
        }
    }

    const getIconBg = () => {
        switch (type) {
            case 'danger':
                return 'bg-red-100 dark:bg-red-900/50'
            case 'info':
                return 'bg-blue-100 dark:bg-blue-900/50'
            default:
                return 'bg-amber-100 dark:bg-amber-900/50'
        }
    }

    const getConfirmButtonStyle = () => {
        switch (type) {
            case 'danger':
                return 'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600'
            case 'info':
                return 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
            default:
                return 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600'
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[100]"
            onClick={handleBackdropClick}
        >
            <div
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full border border-gray-200/30 dark:border-gray-700/30"
                style={{ animation: 'fade-in-up 0.2s ease-out' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/30 dark:border-gray-700/30">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getIconBg()}`}>
                            <AlertTriangle className={`w-5 h-5 ${getIconColor()}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150"
                        aria-label="Close modal"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                        {message}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 p-6 pt-0">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-150"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`flex-1 px-4 py-2.5 ${getConfirmButtonStyle()} text-white font-medium rounded-xl transition-all duration-150 shadow-lg hover:shadow-xl`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
} 