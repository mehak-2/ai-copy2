import dynamic from 'next/dynamic';
import {
    ArrowRight,
    FileText,
    Sparkles,
    Target,
    TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';



const BlogCardHome = dynamic(() => import('@/components/BlogCardHome'));
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const Features = dynamic(() => import('@/components/Features'));
const Footer = dynamic(() => import('@/components/Footer'));
const Header = dynamic(() => import('@/components/Header'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const LeadCaptureSection = dynamic(() => import('@/components/LeadCaptureSection'));
const CountdownTimer = dynamic(() => import('@/components/CountdownTimer'));
const LogoMarquee = dynamic(() => import('@/components/LogoMarquee'));
const HeaderCountdown = dynamic(() => import('@/components/HeaderCountdown'));
const Webinar = dynamic(() => import('@/components/Webinar'));
const RealUserTestimonial = dynamic(() => import('@/components/RealUserTestimonial'));
import { fetchBlogs } from '@/lib/api';

export const metadata = {
    title: 'Axto.ai - AI-Powered EAA Scanner | EU Accessibility Compliance',
    description: 'Instantly detect & fix EU Accessibility violations with our AI-powered scanner. Generate detailed PDF reports and boost your rankings while avoiding fines.',
    keywords: ['EU accessibility', 'EAA compliance', 'website audit', 'accessibility scanner', 'WCAG compliance', 'web accessibility'],
    authors: [{ name: 'Axto.ai Team' }],
    openGraph: {
        title: 'Axto.ai - AI-Powered EAA Scanner',
        description: 'Instantly detect & fix EU Accessibility violations with comprehensive website analysis and AI-powered suggestions.',
        type: 'website',
        url: 'https://axto.ai',
        siteName: 'Axto.ai',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Axto.ai - AI-Powered EAA Scanner',
        description: 'Instantly detect & fix EU Accessibility violations with our AI-powered scanner.',
        site: '@axto.ai',
    },
};

export default async function Home() {
    let latestBlogs = [];
    try {
        const blogsResult = await fetchBlogs({
            limit: 3,
            sortBy: 'createdAt',
            sortOrder: 'desc'
        });
        latestBlogs = blogsResult.blogs;
    } catch (error) {
        console.error('Error fetching blogs for homepage:', error);
    }

    return (
        <div className="min-h-screen bg-white transition-colors duration-200">
            <Header />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-14">
           
            <Image
                src="/header-bg.webp"
                alt="Abstract geometric background"
                fill
                priority
                className="object-cover"
            />
           
            <div className="absolute inset-0 z-0"></div>

         
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
              
                <div className="max-w-4xl text-left">
                  
                    <div className="gap-2 py-2 mb-4 md:mb-6 animate-fade-in transition-all duration-300 cursor-default items-start text-left">
                        <span className="text-sm font-medium text-white drop-shadow-sm px-2 py-1 rounded">
                            AI-Powered EAA Scanner
                        </span>
                    </div>

                  
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl mb-10 md:mb-16 animate-fade-in-up text-left max-w-3xl leading-tight">
                        <span className="block text-white font-normal mb-4 drop-shadow-md">
                            Check if your website is
                        </span>
                        <span className="block text-white font-normal mb-4 drop-shadow-md">
                            accessible and EAA compliant
                        </span>
                        <span className="text-white font-normal italic drop-shadow-md">
                            in seconds
                        </span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-up animation-delay-400 mb-8 items-start">
                       
                        <Link
                            href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`}
                           
                            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-[#444CE7] hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                        >
                            <Target className="w-5 h-5 relative z-20" />
                            <span className="relative z-20">Free EAA Audit</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </Link>

                        {/* Secondary Button */}
                        <Link
  href="/about"
  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-[#0A0D12] hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-gray-700 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
>
  <TrendingUp className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-20" />
  <span className="relative z-20">Get Full Access</span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />

  
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>

  
  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</Link>

                    </div>
                </div>
            </div>
        </section>

            <Features />
            <HowItWorks />
            <FeaturesSection />
            <Webinar />
            <LogoMarquee />
            <RealUserTestimonial />
            <section className="py-8">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
                  Our Development Partners
                </h2>
                <div className="flex justify-center">
                  <div className="relative max-w-7xl w-full rounded-3xl p-1 border border-[#D5D7DA]">
                    <div className="relative z-10 flex flex-col items-center text-center rounded-3xl bg-white p-10 md:p-12">
                      <div className="relative mb-6">
                        {/* FIX: Performance "Defer offscreen images" (Issue 11) */}
                        {/* Removed the priority prop. next/image lazy-loads images by default. */}
                        {/* This image is below the fold, so it should not be prioritized. */}
                        <Image
                          src="/darkFullLogo-Dy9Xa75p.webp"
                          alt="Maxtron Innovations Logo"
                          width={96}
                          height={96}
                          loading="lazy"
                          className="rounded-full border-4 border-white shadow-lg object-contain bg-white p-2"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight drop-shadow-sm">
                        Maxtron Innovations
                      </h3>
                      <p className="text-lg text-gray-900 font-medium mb-0 mx-auto">
                        Transform Your Business and Growth with
                        <span className="text-[#444CE7] font-semibold"> 360° Cutting-Edge Tech Solutions</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-white" id="blog">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary-100 rounded-full px-4 py-2 mb-6">
                            <FileText className="w-4 h-4 text-primary-700" />
                            <span className="text-sm font-medium text-[#1a1a1a]">Latest Insights</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Expert Web Optimization Tips
                        </h2>
                        <p className="text-xl text-gray-900 max-w-2xl mx-auto">
                            Stay ahead with the latest accessibility insights, compliance tips, and web optimization strategies
                        </p>
                    </div>
                    {latestBlogs.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                {latestBlogs.map((blog) => (
                                    <BlogCardHome key={blog._id || blog.id} blog={blog} />
                                ))}
                            </div>
                            <div className="text-center mt-16">
                                <Link href="/blog" className="group relative inline-flex items-center justify-center gap-3 bg-[#444CE7] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                                    <FileText className="w-5 h-5" />
                                    <span>Explore All Articles</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="w-8 h-8 text-primary-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                New Articles Coming Soon
                            </h3>
                            <p className="text-gray-900 max-w-md mx-auto mb-8">
                                We're preparing expert insights on web accessibility and EU compliance. Check back soon for the latest updates.
                            </p>
                            <Link href="/blog" className="btn-primary group">
                                Visit Blog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Additional Sections Below */}
            {/* ... */}
            <LeadCaptureSection />

            <Footer />
        </div>
    );
}
