import { Suspense } from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import BlogContent from './BlogContent'

// Generate dynamic metadata for SEO
export async function generateMetadata({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams?.search || '';
    const page = parseInt(resolvedSearchParams?.page) || 1;

    let title = 'Blog - WebsiteAuditor | Web Optimization Tips & Guides';
    let description = 'Learn about web accessibility, SEO best practices, performance optimization, and modern web development techniques.';

    if (search) {
        title = `Search Results for "${search}" - Blog | WebsiteAuditor`;
        description = `Find blog posts about "${search}" - web optimization tips, SEO guides, and development techniques.`;
    } else if (page > 1) {
        title = `Blog - Page ${page} | WebsiteAuditor`;
        description = `Browse our latest web optimization tips and guides - page ${page}.`;
    }

    return {
        title,
        description,
        keywords: ['web optimization', 'SEO tips', 'web accessibility', 'performance optimization', 'web development', 'website audit'],
        authors: [{ name: 'WebsiteAuditor Team' }],
        openGraph: {
            title,
            description,
            type: 'website',
            url: 'https://yoursite.com/blog',
            siteName: 'WebsiteAuditor',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            site: '@yourhandle',
            creator: '@yourhandle',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: 'https://yoursite.com/blog',
        },
    };
}

// Loading component
function BlogLoading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 transition-colors duration-200">
            <Header />
            <main className="pt-20 mt-28 md:mt-20 lg:mt-20 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Blog
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stay updated with the latest web optimization tips, best practices, and industry insights
                        </p>
                    </div>

                    <section aria-label="Loading Blog Content">
                        <h2 className="sr-only">Blog Posts</h2>
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Blog
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Stay updated with the latest web optimization tips, best practices, and industry insights
                            </p>
                        </div>

                        {/* Search Skeleton */}
                        <div className="max-w-md mx-auto mb-8">
                            <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>

                        {/* Featured Post Skeleton */}
                        <div className="mb-16">
                            <div className="h-6 bg-gray-200 rounded w-48 mb-8 animate-pulse"></div>
                            <div className="bg-white rounded-xl p-8 shadow-lg">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-1/3">
                                        <div className="aspect-video bg-gray-200 rounded-lg animate-pulse"></div>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
                                        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                                        <div className="space-y-2 mb-6">
                                            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                            <div className="h-4 bg-gray-200 w-5/6 animate-pulse"></div>
                                            <div className="h-4 bg-gray-200 w-4/6 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="h-6 bg-gray-200 rounded w-32 mb-8 animate-pulse"></div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                                        <div className="aspect-video bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-3 animate-pulse"></div>
                                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                                        <div className="space-y-2 mb-4">
                                            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                                            <div className="h-4 bg-gray-200 w-5/6 animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default async function BlogPage({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const search = resolvedSearchParams?.search || '';
    const page = parseInt(resolvedSearchParams?.page) || 1;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 transition-colors duration-200">
            <Header />

            <main className="pt-20 mt-28 md:mt-20 lg:mt-20 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Blog
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stay updated with the latest web optimization tips, best practices, and industry insights
                        </p>
                    </div>

                    <section aria-label="Blog Content">
                        <h2 className="sr-only">Blog Posts</h2>
                        <Suspense fallback={<BlogLoading />}>
                            <BlogContent initialSearch={search} initialPage={page} />
                        </Suspense>
                    </section>

                    <section className="mt-16 text-center">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Newsletter</h2>
                        <div className="card max-w-2xl mx-auto bg-gradient-to-r from-primary-50 to-purple-50">
                            <NewsletterForm
                                title="Stay Updated"
                                description="Get the latest web optimization tips and best practices delivered to your inbox"
                            />
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
} 