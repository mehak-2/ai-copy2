import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight, Calendar } from 'lucide-react';

export default function BlogCardHome({ blog }) {
    const {
        title,
        excerpt,
        slug,
        author,
        createdAt,
        publishedAt,
        featuredImage,
        readingTime,
        category
    } = blog;

    const displayDate = publishedAt || createdAt;
    const formattedDate = displayDate ? new Date(displayDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }) : '';

    // Debug: Log the slug to console

    // Ensure we have a valid slug
    if (!slug) {
        console.error('No slug found for blog:', blog);
        return null;
    }

    return (
        <Link href={`/blog/${slug}`} className="block group">
            <article className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-shadow duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer">
                {/* Featured Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    {featuredImage?.url ? (
                        <Image
                            src={featuredImage.url}
                            alt={featuredImage.altText || title}
                            fill
                            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-800 flex items-center justify-center">
                            <div className="text-gray-400 dark:text-gray-500">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                        </div>
                    )}

                    {/* Category Badge */}
                    {category && (
                        <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 capitalize">
                                {category}
                            </span>
                        </div>
                    )}

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-700 dark:text-gray-300 mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{author}</span>
                        </div>
                        {readingTime && (
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{readingTime} min</span>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
                        {excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 font-semibold text-sm transition-colors duration-300">
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

            </article>
        </Link>
    );
} 