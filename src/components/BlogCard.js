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
    const formattedDate = displayDate
        ? new Date(displayDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
          })
        : '';

    // FEATURED CARD
    if (featured) {
        return (
           <article className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
    {/* Left Image */}
  <div className="w-full lg:w-1/2 xl:w-1/3 ">
  <div className="relative w-full h-48 md:h-64 lg:h-full  bg-white overflow-hidden lg:rounded-r-2xl rounded-t-2xl">
    {featuredImage?.url ? (
      <Image
        src={featuredImage.url}
        alt={featuredImage.altText || title}
        fill
        className="object-fit group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority
      />
    ) : (
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg font-medium">
        Featured
      </div>
    )}
  </div>
</div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 xl:w-2/3 p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center text-sm text-gray-600 mb-3 flex-wrap gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-purple-500" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4 text-purple-500" />
            {author}
          </span>
          {readingTime && <span>{readingTime} min read</span>}
          {views !== undefined && (
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-purple-500" />
              {views} views
            </span>
          )}
        </div>

        {category && (
          <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full capitalize mb-3">
            {category}
          </span>
        )}

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500">+{tags.length - 3} more</span>
            )}
          </div>
        )}

        <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-purple-600 transition-colors"
            aria-label={`Read more about ${title}`}
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-700 mb-6 text-sm line-clamp-3">{excerpt}</p>
      </div>

      <Link
        href={`/blog/${slug}`}
        className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors"
        aria-label={`Read full article about ${title}`}
      >
        Read Article →
      </Link>
    </div>
  </div>
</article>

        );                     
    }

    // DEFAULT CARD
    return (
        <article className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group">
            {/* Top Image */}
           <div className="w-full lg:w-1/2 xl:w-1/3 ">
  <div className="relative w-full  h-48 md:h-64 lg:h-full bg-white overflow-hidden rounded-2xl">
    {featuredImage?.url ? (
      <Image
        src={featuredImage.url}
        alt={featuredImage.altText || title}
        fill
        className="object-contain group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority
      />
    ) : (
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg font-medium">
        Featured
      </div>
    )}
  </div>
</div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center text-sm text-gray-600 mb-3 flex-wrap gap-4">
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-purple-500" />
                        {formattedDate}
                    </span>
                    <span className="flex items-center gap-1">
                        <User className="w-4 h-4 text-purple-500" />
                        {author}
                    </span>
                    {readingTime && <span>{readingTime} min</span>}
                </div>

                {category && (
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full capitalize mb-3">
                        {category}
                    </span>
                )}

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200"
                            >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                            </span>
                        ))}
                        {tags.length > 2 && (
                            <span className="text-xs text-gray-500">+{tags.length - 2} more</span>
                        )}
                    </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm line-clamp-3">{excerpt}</p>

                <div className="flex items-center justify-between">
                    <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-md hover:from-indigo-600 hover:to-purple-700 transition-colors"
                    >
                        Read Article <ArrowRight className="w-4 h-4" />
                    </Link>

                    {views !== undefined && (
                        <div className="flex items-center text-sm text-gray-500">
                            <Eye className="w-4 h-4 mr-1 text-purple-500" />
                            {views}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
