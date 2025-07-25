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
    
    <div className="py-8 px-4 sm:py-16 sm:px-8 lg:py-24 lg:px-32 bg-white">
            <div className='flex flex-row justify-center gap-8 '>
            <div>
                    <p className="rounded-full border border-[#444CE7] px-6 py-1 md:px-7 md:py-2 text-[#444CE7] text-base sm:text-2xl md:text-4xl">100K +</p>
                    </div>
                    <div>
                <p className=' text-base sm:text-3xl md:text-5xl font-normal text-[#0A0D12]'>Scans Performed Annually</p>
            </div>
            </div>
  {/* Scan Card */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto  m-10 animate-fade-in-up">
  {/* Detect Card */}
  <div className="relative  border-[#D5D7DA] border  rounded-2xl  p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up py-8">
    <Target className="w-8 h-8 text-[#444CE7] mb-2 " />
    <div className='flex flex-row gap-3'>
        <div>
    <h2 className="text-2xl font-semibold text-[#0A0D12]   mb-1 tracking-wide p-2">Detect</h2>
    </div>
    <div className=" font-bold   transition-transform duration-300 group-hover:scale-110 text-[#0A0D12] text-4xl">24/7</div>
    </div>
  </div>


  {/* Solve Card */}
  <div className="relative  border-[#D5D7DA] border  rounded-2xl  p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up py-8">
    <ArrowRight className="w-8 h-8 text-[#444CE7] mb-2" />
    <div className='flex flex-row gap-3'>
        <div>
        <h2 className="text-2xl font-semibold text-[#0A0D12]   mb-1 tracking-wide p-2">Experts</h2>
   </div>
   <div className=" font-bold   transition-transform duration-300 group-hover:scale-110 text-[#0A0D12] text-4xl">200+</div>
    </div>
  </div>

   {/* Solution Card */}
   <div className="relative  border-[#D5D7DA] border  rounded-2xl  p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up py-8">
    <TrendingUp className="w-8 h-8 text-[#444CE7] mb-2 " />
    <div className='flex flex-row gap-3'>
        <div>
        <h2 className="text-2xl font-semibold text-[#0A0D12]   mb-1 tracking-wide p-2">Solution</h2>
   </div>
   <div className=" font-bold   transition-transform duration-300 group-hover:scale-110 text-[#0A0D12] text-4xl">100%</div>
  </div>
</div>
</div>
</div>
  )
}

export default Features
