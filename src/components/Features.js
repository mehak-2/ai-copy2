"use client";

import React from 'react'
import {
    ArrowRight,
    FileText,
    Sparkles,
    Target,
    TrendingUp
} from 'lucide-react'

const Features = () => {
  return (
    
    <div className="py-8 px-4 sm:py-16 sm:px-8 lg:py-24 lg:px-32">
            <div className='flex flex-row justify-center gap-8 '>
            <div>
                    <p className="rounded-full border border-[#444CE7] px-6 py-1 md:px-7 md:py-2 text-[#444CE7] text-base sm:text-2xl md:text-4xl">100K +</p>
                    </div>
                    <div>
                <p className=' text-base sm:text-3xl md:text-5xl font-normal text-[#0A0D12]'>Scans Performed Annually</p>
            </div>
            </div>
  {/* Scan Card */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto  m-10 animate-fade-in-up">
  {/* Detect Card */}
  <div className="relative  border-[#D5D7DA] border  rounded-2xl  p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up">
    <Target className="w-8 h-8 text-[#444CE7] mb-2 " />
    <div className='flex flex-row gap-3'>
        <div>
    <h2 className="text-lg font-semibold text-[#0A0D12]  dark:text-gray-100 mb-1 tracking-wide">Detect</h2>
    </div>
    <div className=" font-bold  dark:text-purple-200 transition-transform duration-300 group-hover:scale-110 text-[#0A0D12] text-2xl">24/7</div>
    </div>
  </div>


  {/* Solve Card */}
  <div className="relative  border-[#D5D7DA] border  rounded-2xl  p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up">
    <ArrowRight className="w-8 h-8 text-[#444CE7] mb-2" />
    <div className='flex flex-row gap-3'>
        <div>
    <h2 className="text-lg font-semibold text-[#0A0D12]  dark:text-gray-100 mb-1 tracking-wide">Experts</h2>
   </div>
   <div className=" font-bold  dark:text-purple-200 transition-transform duration-300 group-hover:scale-110 text-[#0A0D12] text-2xl">200+</div>
    </div>
  </div>

   {/* Solution Card */}
   <div className="relative  border-[#D5D7DA] border  rounded-2xl  p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up">
    <TrendingUp className="w-8 h-8 text-[#444CE7] mb-2 " />
    <div className='flex flex-row gap-3'>
        <div>
        <h2 className="text-lg font-semibold text-[#0A0D12]  dark:text-gray-100 mb-1 tracking-wide">Solution</h2>
   </div>
   <div className=" font-bold  dark:text-purple-200 transition-transform duration-300 group-hover:scale-110 text-[#0A0D12] text-2xl">100%</div>
  </div>
</div>
</div>
</div>
  )
}

export default Features
