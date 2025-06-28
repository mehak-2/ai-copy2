'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BlogSearch from '@/components/BlogSearch';
import BlogCard from '@/components/BlogCard';
import BlogCardHome from '@/components/BlogCardHome';
import { fetchBlogs } from '@/lib/api';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

export default function BlogContent({ initialSearch = '', initialPage = 1 }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [blogs, setBlogs] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalBlogs: 0,
        hasNextPage: false,
        hasPrevPage: false
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [currentPage, setCurrentPage] = useState(initialPage);

    // Fetch blogs function
    const loadBlogs = useCallback(async (search = '', page = 1) => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchBlogs({
                page,
                limit: 9, // 9 posts per page for nice grid layout
                search,
                sortBy: 'createdAt',
                sortOrder: 'desc'
            });

            setBlogs(result.blogs);
            setPagination(result.pagination);
        } catch (err) {
            console.error('Error loading blogs:', err);
            setError('Failed to load blog posts. Please try again later.');
            setBlogs([]);
            setPagination({
                currentPage: 1,
                totalPages: 1,
                totalBlogs: 0,
                hasNextPage: false,
                hasPrevPage: false
            });
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial load
    useEffect(() => {
        loadBlogs(initialSearch, initialPage);
    }, [loadBlogs, initialSearch, initialPage]);

    // Handle search
    const handleSearch = useCallback((search) => {
        setSearchTerm(search);
        setCurrentPage(1);

        // Update URL
        const params = new URLSearchParams(searchParams);
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }
        params.delete('page'); // Reset to first page on search

        const newUrl = `/blog${params.toString() ? `?${params.toString()}` : ''}`;
        router.push(newUrl, { shallow: true });

        loadBlogs(search, 1);
    }, [searchParams, router, loadBlogs]);

    // Handle pagination
    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);

        // Update URL
        const params = new URLSearchParams(searchParams);
        if (page > 1) {
            params.set('page', page.toString());
        } else {
            params.delete('page');
        }

        const newUrl = `/blog${params.toString() ? `?${params.toString()}` : ''}`;
        router.push(newUrl, { shallow: true });

        loadBlogs(searchTerm, page);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [searchParams, router, loadBlogs, searchTerm]);

    // Error state
    if (error) {
        return (
            <div className="text-center py-12">
                <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    Oops! Something went wrong
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {error}
                </p>
                <button
                    onClick={() => loadBlogs(searchTerm, currentPage)}
                    className="btn btn-primary"
                >
                    Try Again
                </button>
            </div>
        );
    }

    // Featured post (first blog if available)
    const featuredPost = blogs.length > 0 ? blogs[0] : null;
    const otherPosts = blogs.slice(1);

    return (
        <>
            {/* Search */}
            <BlogSearch onSearch={handleSearch} initialValue={searchTerm} />

            {/* Loading State */}
            {loading && (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
                </div>
            )}

            {/* Content */}
            {!loading && (
                <>
                    {/* Results info */}
                    {searchTerm && (
                        <div className="mb-8 text-center">
                            <p className="text-gray-600 dark:text-gray-400">
                                {pagination.totalBlogs > 0
                                    ? `Found ${pagination.totalBlogs} ${pagination.totalBlogs === 1 ? 'result' : 'results'} for "${searchTerm}"`
                                    : `No results found for "${searchTerm}"`
                                }
                            </p>
                        </div>
                    )}

                    {blogs.length > 0 ? (
                        <>
                            {/* Featured Post */}
                            {featuredPost && !searchTerm && currentPage === 1 && (
                                <div className="mb-16">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Post</h2>
                                    <BlogCard blog={featuredPost} featured={true} />
                                </div>
                            )}

                            {/* All Posts Grid */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                                    {featuredPost && !searchTerm && currentPage === 1 ? 'Latest Posts' : 'All Posts'}
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {(featuredPost && !searchTerm && currentPage === 1 ? otherPosts : blogs).map((blog) => (
                                        <BlogCardHome key={blog._id || blog.id} blog={blog} />
                                    ))}
                                </div>
                            </div>

                            {/* Pagination */}
                            {pagination.totalPages > 1 && (
                                <div className="mt-12 flex items-center justify-center space-x-4">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={!pagination.hasPrevPage}
                                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
                                    >
                                        <ChevronLeft className="w-4 h-4 mr-1" />
                                        Previous
                                    </button>

                                    <div className="flex items-center space-x-2">
                                        {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => {
                                            let pageNum;
                                            if (pagination.totalPages <= 5) {
                                                pageNum = i + 1;
                                            } else if (currentPage <= 3) {
                                                pageNum = i + 1;
                                            } else if (currentPage >= pagination.totalPages - 2) {
                                                pageNum = pagination.totalPages - 4 + i;
                                            } else {
                                                pageNum = currentPage - 2 + i;
                                            }

                                            return (
                                                <button
                                                    key={pageNum}
                                                    onClick={() => handlePageChange(pageNum)}
                                                    className={`px-3 py-2 text-sm font-medium rounded-md ${pageNum === currentPage
                                                        ? 'text-white bg-primary-600 border border-primary-600'
                                                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700'
                                                        }`}
                                                >
                                                    {pageNum}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={!pagination.hasNextPage}
                                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        !loading && (
                            <div className="text-center py-12">
                                <div className="text-gray-500 dark:text-gray-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                                    {searchTerm ? 'No posts found' : 'No blog posts yet'}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {searchTerm
                                        ? 'Try adjusting your search terms or browse all posts.'
                                        : 'Check back soon for new content about web optimization and best practices.'
                                    }
                                </p>
                                {searchTerm && (
                                    <button
                                        onClick={() => handleSearch('')}
                                        className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                                    >
                                        View all posts
                                    </button>
                                )}
                            </div>
                        )
                    )}
                </>
            )}
        </>
    );
} 