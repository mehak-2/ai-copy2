import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight, Tag, Eye } from 'lucide-react';

export default function BlogCard({ blog, featured = false }) {
    const {
        title,
        excerpt,
        slug,
        author,
        createdAt,
        publishedAt,
        tags,
        category,
        featuredImage,
        views,
        readingTime
    } = blog;

    const displayDate = publishedAt || createdAt;
    const formattedDate = displayDate ? new Date(displayDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

    if (featured) {
        return (
            <article className="card hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300 group">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            {featuredImage?.url ? (
                                <Image
                                    src={featuredImage.url}
                                    alt={featuredImage.altText || title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            ) : (
                                <div className="bg-gradient-to-br from-primary-500 to-purple-600 w-full h-full flex items-center justify-center">
                                    <span className="text-white text-lg font-medium">Featured</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-4">
                            <Clock className="w-4 h-4 mr-2" />
                            {formattedDate}
                            <User className="w-4 h-4 ml-4 mr-2" />
                            {author}
                            {readingTime && (
                                <>
                                    <span className="ml-4 mr-2">•</span>
                                    {readingTime} min read
                                </>
                            )}
                            {views !== undefined && (
                                <>
                                    <Eye className="w-4 h-4 ml-4 mr-2" />
                                    {views} views
                                </>
                            )}
                        </div>

                        {category && (
                            <div className="mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 capitalize">
                                    {category}
                                </span>
                            </div>
                        )}

                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.slice(0, 3).map((tag, index) => (
                                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                                        <Tag className="w-3 h-3 mr-1" />
                                        {tag}
                                    </span>
                                ))}
                                {tags.length > 3 && (
                                    <span className="text-xs text-gray-500 dark:text-gray-400">+{tags.length - 3} more</span>
                                )}
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-gray-800 dark:text-gray-200 mb-6 text-lg line-clamp-3">
                            {excerpt}
                        </p>
                        <Link
                            href={`/blog/${slug}`}
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold inline-flex items-center gap-2"
                        >
                            Read Full Article <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="card hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                {featuredImage?.url ? (
                    <Image
                        src={featuredImage.url}
                        alt={featuredImage.altText || title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="bg-gradient-to-br from-gray-100 dark:from-gray-700 to-gray-200 dark:to-gray-800 w-full h-full flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">Blog Post</span>
                    </div>
                )}
            </div>

            <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-3">
                <Clock className="w-4 h-4 mr-2" />
                {formattedDate}
                <User className="w-4 h-4 ml-4 mr-2" />
                {author}
                {readingTime && (
                    <>
                        <span className="ml-2 mr-2">•</span>
                        {readingTime} min
                    </>
                )}
            </div>

            {category && (
                <div className="mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 capitalize">
                        {category}
                    </span>
                </div>
            )}

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                        </span>
                    ))}
                    {tags.length > 2 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">+{tags.length - 2} more</span>
                    )}
                </div>
            )}

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {title}
            </h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4 line-clamp-3">
                {excerpt}
            </p>

            <div className="flex items-center justify-between">
                <Link
                    href={`/blog/${slug}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center gap-2"
                >
                    Read More <ArrowRight className="w-4 h-4" />
                </Link>
                {views !== undefined && (
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Eye className="w-4 h-4 mr-1" />
                        {views}
                    </div>
                )}
            </div>
        </article>
    );
} 