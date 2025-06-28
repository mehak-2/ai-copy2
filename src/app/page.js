import dynamic from 'next/dynamic';
import {
    ArrowRight,
    FileText,
    Sparkles,
    Target,
    TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
import { fetchBlogs } from '@/lib/api'

// Generate metadata for SEO
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
}

export default async function Home() {
    // Fetch latest blog posts for the homepage
    let latestBlogs = []
    try {
        const blogsResult = await fetchBlogs({
            limit: 3, // Only show 3 posts on homepage
            sortBy: 'createdAt',
            sortOrder: 'desc'
        })
        latestBlogs = blogsResult.blogs
    } catch (error) {
        console.error('Error fetching blogs for homepage:', error)
        // Continue without blogs if API fails
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950  transition-colors duration-200">
         
            <Header /> 
          

            <section className="relative min-h-screen flex  items-center justify-center overflow-hidden " style={{
                backgroundImage: 'url(/header-bg.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
               

                <div className="relative z-10 container mx-auto pt-20 ">
                    <div className="text-center max-w-4xl ">
                        {/* Badge */}
                        <div className="  gap-2 py-2 mb-6 animate-fade-in dark:hover:bg-gray-900/80 transition-all duration-300 cursor-default items-start  text-left">
                           
                            <span className="text-sm font-medium text-[#FFFFFF] dark:text-gray-100  ">
                                AI-Powered EAA Scanner
                            </span>
                        </div>
 
                        {/* Main Heading with Animated Gradients */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl  mb-6  animate-fade-in-up items-start  text-left max-w-3xl">
                           <span className="block text-[#FFFFFF] font-normal mb-2">
                           Check if your website is accessible and EAA compliant
                           </span>
                           <span className='text-[#FFFFFF] font-normal italic'>
                           in seconds
</span>
                            {/* <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-extrabold">
                                Instantly Detect & Fix
                            </span>
                            <span className="block text-gray-900 dark:text-gray-100 mt-2">
                                
                                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-extrabold">
                                    EU Accessibility Violations
                                </span>{' '}
 
                            </span> */}
                        </h1>

                        {/* Subtitle */}
                        

                        {/* Compliance Standards Line */}
                        {/* <p className="text-lg md:text-xl text-[#FFFFFF] dark:text-gray-100 mb-12 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-300 font-medium  items-left text-left">
                            Scan your website for{' '} WCAG 2.2 EN 301 549, and{' '} WSG 1.0 {' '}compliance!
                        </p> */}

                        {/* CTA Buttons - Fixed Animation */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-up animation-delay-400 mb-8 items-start ">
                            <Link
                                href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`}
                                className="group relative inline-flex items-center justify-center gap-3 bg-[#444CE7] hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                            >
                                <Target className="w-5 h-5 relative z-20" />
                                <span className="relative z-20">Free EAA Audit</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />

                                {/* Shine effect - Fixed */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>

                                {/* Subtle pulse effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </Link>

                            <Link
                                href="/about"
                                className="group relative inline-flex items-center justify-center gap-3  backdrop-blur-sm   font-semibold px-8 py-4 rounded-xl transform  transition-all duration-300 text-white bg-black"
                            >
                                <TrendingUp className="w-5 h-5  transition-transform duration-300" />
                                <span >Get Full Access</span>
                            </Link>
                        </div>

                        {/* Animated Card Section: Scan, Detect, Solution, Solve */}
                       

                        {/* Stats Row - Enhanced */}
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hoveriv>:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">10K+</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Websites Analyzed</div>
                            </div>
                           
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hoveriv>:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">AI Monitoring</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hoveriv>:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 hover:bg-white/15 dark:hover:bg-gray-800/40 hover:border-white/30 dark:hover:border-gray-600/40 transition-all duration-300 group cursor-default">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300">200+</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Expert Developers</div>
                            </div>
                        </div> */}
                    

{/* Our Developer Partners Section */}




                        {/* Floating Elements - Enhanced */}
                        {/* <div className="absolute top-1/4 left-8 hidden lg:block animate-float">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl rotate-12 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"></div>
                        </div>
                        <div className="absolute top-1/3 right-8 hidden lg:block animate-float animation-delay-1000">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"></div>
                        </div>
                        <div className="absolute bottom-1/4 left-16 hidden lg:block animate-float animation-delay-2000">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl -rotate-12 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"></div>
                        </div> */}
                    </div>
                </div>
            </section>
         

        
           {/*Features*/}
           <Features/>

            {/* How It Works Section - New Framer Motion Component */}
            <HowItWorks />

            {/* Enhanced Features Section with Modal */}
            <FeaturesSection />
                
            {/* <CountdownTimer /> */}
            <Webinar/>
            
            {/* Logo Marquee Section */}
            <LogoMarquee />
            
            
            <RealUserTestimonial />
            <section className="py-8  ">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center tracking-tight ">
      Our Development Partners
    </h2>
    <div className="flex justify-center">
      <div className="relative max-w-7xl w-full rounded-3xl p-1  border border-[#D5D7DA]  ">
        <div className="relative z-10 flex flex-col items-center text-center rounded-3xl bg-white/70  p-10 md:p-12 border border-white/30 dark:border-gray-800/60">
         
          {/* Logo */}
          <div className="relative mb-6">
            <Image
              src="/darkFullLogo-Dy9Xa75p.webp"
              alt="Maxtron Innovations Logo"
              width={96}
              height={96}
              className="rounded-full border-4 border-white  shadow-lg object-contain bg-white p-2 "
              priority
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight drop-shadow-sm">
            Maxtron Innovations
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-0  mx-auto">
            Transform Your Business and Growth with <span className="bg-[#444CE7] to-pink-600 bg-clip-text text-transparent font-semibold">360° Cutting-Edge Tech Solutions</span>
          </p>
        </div>
        {/* Glassmorphism border shine */}
      
      </div>
    </div>
  </div>
</section>

            {/* Blog Section - Enhanced with Real API Data */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" id="blog">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/40 rounded-full px-4 py-2 mb-6">
                            <FileText className="w-4 h-4 text-primary-700 dark:text-primary-200" />
                            <span className="text-sm font-medium text-primary-800 dark:text-primary-200">Latest Insights</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Expert Web Optimization Tips
                        </h2>
                        <p className="text-xl text-gray-900 dark:text-gray-100 max-w-2xl mx-auto">
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
                        // Fallback content when no blogs are available
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="w-8 h-8 text-primary-700 dark:text-primary-200" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                New Articles Coming Soon
                            </h3>
                            <p className="text-gray-900 dark:text-gray-300 max-w-md mx-auto mb-8">
                                We're preparing expert insights on web accessibility and EU compliance. Check back soon for the latest updates.
                            </p>
                            <Link href="/blog" className="btn-primary group">
                                Visit Blog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Lead Capture Section - New Minimal Component */}
            <LeadCaptureSection />

            <Footer />
        </div>
    )
} 