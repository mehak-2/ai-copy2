'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function BlogSearch({ onSearch, initialValue = '' }) {
    const [searchTerm, setSearchTerm] = useState(initialValue);
    const [debouncedTerm, setDebouncedTerm] = useState(initialValue);

    // Debounce search term
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Call onSearch when debounced term changes
    useEffect(() => {
        onSearch(debouncedTerm);
    }, [debouncedTerm, onSearch]);

    const handleClear = () => {
        setSearchTerm('');
    };

    return (
        <div className="relative max-w-md mx-auto mb-8">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search blog posts..."
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                />
                {searchTerm && (
                    <button
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        type="button"
                        aria-label="Clear search"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>
            {debouncedTerm && (
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Searching for: <span className="font-medium">{debouncedTerm}</span>
                </div>
            )}
        </div>
    );
} 