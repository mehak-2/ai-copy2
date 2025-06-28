'use client';

import { Share2 } from 'lucide-react';

export default function ShareButton({ title, excerpt, url }) {
    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title,
                    text: excerpt,
                    url: url || window.location.href,
                });
            } else {
                // Fallback to clipboard
                await navigator.clipboard.writeText(url || window.location.href);

                // Show a simple notification
                const notification = document.createElement('div');
                notification.textContent = 'Link copied to clipboard!';
                notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in';
                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.remove();
                }, 3000);
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-200 hover:text-primary-800 dark:hover:text-primary-100 font-medium transition-colors"
        >
            <Share2 className="w-4 h-4" />
            Share
        </button>
    );
} 