import Link from 'next/link'
import Image from 'next/image'
import { Clock, User, ArrowLeft, Tag, Eye, Calendar } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import ShareButton from '@/components/ShareButton'
import { fetchBlogBySlug, fetchBlogs } from '@/lib/api'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    try {
        const result = await fetchBlogs({ limit: 100 }) 
        return result.blogs.map((blog) => ({
            slug: blog.slug,
        }))
    } catch (error) {
        console.error('Error generating static params:', error)
        return []
    }
}

export async function generateMetadata({ params }) {
    try {
        const resolvedParams = await params;
        const blog = await fetchBlogBySlug(resolvedParams.slug)

        if (!blog) {
            return {
                title: 'Blog Post Not Found | WebsiteAuditor',
                description: 'The requested blog post could not be found.',
            }
        }

        const seo = blog.seo || {}
        const openGraph = seo.openGraph || {}
        const twitter = seo.twitter || {}

        return {
            title: seo.metaTitle || `${blog.title} | WebsiteAuditor Blog`,
            description: seo.metaDescription || blog.excerpt,
            keywords: seo.metaKeywords || blog.tags,
            authors: [{ name: blog.author }],

            openGraph: {
                title: openGraph.title || blog.title,
                description: openGraph.description || blog.excerpt,
                type: 'article',
                url: openGraph.url || `https://yoursite.com/blog/${resolvedParams.slug}`,
                siteName: openGraph.siteName || 'WebsiteAuditor',
                locale: openGraph.locale || 'en_US',
                publishedTime: blog.publishedAt || blog.createdAt,
                modifiedTime: openGraph.modifiedTime || blog.updatedAt,
                section: openGraph.section || blog.category,
                tags: openGraph.tags || blog.tags,
                ...(openGraph.image?.url && {
                    images: [{
                        url: openGraph.image.url,
                        width: openGraph.image.width || 1200,
                        height: openGraph.image.height || 630,
                        alt: openGraph.image.altText || blog.title,
                    }]
                }),
            },

            twitter: {
                card: twitter.card || 'summary_large_image',
                site: twitter.site || '@yourhandle',
                creator: twitter.creator || '@yourhandle',
                title: twitter.title || blog.title,
                description: twitter.description || blog.excerpt,
                ...(twitter.image?.url && {
                    images: [twitter.image.url]
                }),
            },

            robots: {
                index: seo.robots?.index !== false,
                follow: seo.robots?.follow !== false,
                noarchive: seo.robots?.noarchive || false,
                nosnippet: seo.robots?.nosnippet || false,
                googleBot: {
                    index: seo.robots?.index !== false,
                    follow: seo.robots?.follow !== false,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },

            alternates: {
                canonical: seo.canonicalUrl || `https://yoursite.com/blog/${resolvedParams.slug}`,
            },
        }
    } catch (error) {
        console.error('Error generating metadata:', error)
        return {
            title: 'Blog Post | WebsiteAuditor',
            description: 'Read our latest blog post on web optimization and best practices.',
        }
    }
}

export default async function BlogPostPage({ params }) {
    let blog
    let relatedBlogs = []

    try {
        const resolvedParams = await params;
        blog = await fetchBlogBySlug(resolvedParams.slug)

        if (!blog) {
            notFound()
        }

        // Fetch related blogs (same category or tags)
        const relatedResult = await fetchBlogs({
            limit: 4,
            search: blog.category || (blog.tags && blog.tags[0]) || ''
        })

        relatedBlogs = relatedResult.blogs
            .filter(relatedBlog => relatedBlog.slug !== blog.slug)
            .slice(0, 3)

    } catch (error) {
        console.error('Error fetching blog:', error)
        notFound()
    }

    const displayDate = blog.publishedAt || blog.createdAt
    const formattedDate = displayDate ? new Date(displayDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : ''

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            {/* Structured Data JSON-LD */}
            {blog.structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(blog.structuredData)
                    }}
                />
            )}

            <Header />

            <div className="pt-20 mt-28 md:mt-20 lg:mt-20  pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back to Blog */}
                    <div className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </div>

                    {/* Article Header */}
                    <article className="max-w-4xl mx-auto">
                        <header className="mb-12">
                            {/* Featured Image */}
                            {blog.featuredImage?.url && (
                                <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                                    <Image
                                        src={blog.featuredImage.url}
                                        alt={blog.featuredImage.altText || blog.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                                    />
                                </div>
                            )}

                            {/* Category */}
                            {blog.category && (
                                <div className="mb-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 capitalize">
                                        {blog.category}
                                    </span>
                                </div>
                            )}

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6 gap-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {formattedDate}
                                </div>
                                <div className="flex items-center">
                                    <User className="w-4 h-4 mr-2" />
                                    {blog.author}
                                </div>
                                {blog.readingTime && (
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {blog.readingTime} min read
                                    </div>
                                )}
                                {blog.views !== undefined && (
                                    <div className="flex items-center">
                                        <Eye className="w-4 h-4 mr-2" />
                                        {blog.views} {blog.views === 1 ? 'view' : 'views'}
                                    </div>
                                )}
                                {blog.seo?.schema?.wordCount && (
                                    <div className="flex items-center">
                                        <span className="mr-2">📝</span>
                                        {blog.seo.schema.wordCount} words
                                    </div>
                                )}
                            </div>

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {blog.tags.map((tag, index) => (
                                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                                            <Tag className="w-3 h-3 mr-1" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                {blog.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                {blog.excerpt}
                            </p>

                            {/* Share Button */}
                            <div className="flex items-center justify-between border-t border-b border-gray-200 dark:border-gray-700 py-6 mt-8">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Share this article
                                </div>
                                <ShareButton
                                    title={blog.title}
                                    excerpt={blog.excerpt}
                                    url={blog.seo?.canonicalUrl}
                                />
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="blog-content prose prose-lg dark:prose-invert max-w-none">
                            {/* Render the main content */}
                            {blog.content && (
                                <div
                                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                            )}

                            {/* Fallback to excerpt if no content */}
                            {!blog.content && blog.excerpt && (
                                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {blog.excerpt.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4">{paragraph}</p>
                                    ))}
                                </div>
                            )}

                            {/* Content Images */}
                            {blog.contentImages && blog.contentImages.length > 0 && (
                                <div className="mt-8 space-y-6">
                                    {blog.contentImages.map((image, index) => (
                                        <div key={image._id || image.id || index} className="relative">
                                            <Image
                                                src={image.url}
                                                alt={image.altText || `${blog.title} - Image ${index + 1}`}
                                                width={800}
                                                height={400}
                                                className="rounded-lg w-full h-auto"
                                                sizes="(max-width: 768px) 100vw, 800px"
                                            />
                                            {image.altText && (
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
                                                    {image.altText}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Author Bio */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
                            <div className="flex items-start space-x-4">
                                <div className="w-16 h-16 aspect-square bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                                    <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{blog.author}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                                        Web optimization expert and developer advocate passionate about creating
                                        high-performance, accessible digital experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Related Posts */}
                    {relatedBlogs.length > 0 && (
                        <div className="max-w-6xl mx-auto mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedBlogs.map((relatedBlog) => (
                                    <article key={relatedBlog._id || relatedBlog.id} className="card hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300 group">
                                        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                            {relatedBlog.featuredImage?.url ? (
                                                <Image
                                                    src={relatedBlog.featuredImage.url}
                                                    alt={relatedBlog.featuredImage.altText || relatedBlog.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            ) : (
                                                <div className="bg-gradient-to-br from-gray-100 dark:from-gray-700 to-gray-200 dark:to-gray-800 w-full h-full flex items-center justify-center">
                                                    <span className="text-gray-500 dark:text-gray-400 text-sm">Related Post</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {relatedBlog.publishedAt || relatedBlog.createdAt ?
                                                new Date(relatedBlog.publishedAt || relatedBlog.createdAt).toLocaleDateString() :
                                                'Recently'
                                            }
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                                            {relatedBlog.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                                            {relatedBlog.excerpt}
                                        </p>
                                        <Link href={`/blog/${relatedBlog.slug}`} className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
                                            Read More →
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Newsletter CTA */}
                    <div className="max-w-4xl mx-auto mt-16">
                        <div className="card bg-gradient-to-r from-primary-50 dark:from-primary-900/20 to-purple-50 dark:to-purple-900/20 text-center">
                            <NewsletterForm
                                title="Get More Web Optimization Tips"
                                description="Subscribe to our newsletter for the latest insights on web accessibility, performance, and SEO best practices."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
} 