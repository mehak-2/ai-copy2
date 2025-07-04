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
        <article className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
                {featuredImage?.url ? (
                    <Image
                        src={featuredImage.url}
                        alt={featuredImage.altText || title}
                        width={600}
                        height={300}
                        className="w-full h-56 object-fit rounded-t-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center rounded-t-2xl">
                        <div className="text-gray-400">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                    </div>
                )}
                {category && (
                    <span className="absolute top-4 left-4 bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-xs font-medium shadow">
                        {category}
                    </span>
                )}
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-3 gap-4">
                    <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formattedDate}
                    </span>
                    <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {author}
                    </span>
                    {readingTime && (
                        <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {readingTime}
                        </span>
                    )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {excerpt}
                </p>
                <Link
                    href={`/blog/${slug}`}
                    className="mt-auto text-primary-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-1"
                >
                    Read Article <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </article>
    );
} 