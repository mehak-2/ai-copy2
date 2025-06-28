'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const FreeCreditsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth()



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 left-4 right-4 sm:right-auto sm:left-5 sm:bottom-5 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg z-50 max-w-full sm:max-w-sm  ${( !user) ? "opacity-100" : "opacity-0 display-none"} `}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
        </div>
        <div className="ml-3 sm:ml-4 flex-grow">
          <h3 className="font-bold text-xs sm:text-base text-gray-900 dark:text-white">Join now and get 1 month of credits - completely free</h3>
         
     
            <Link
              href={`${process.env.NEXT_PUBLIC_FREE_AUDIT}`}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#444CE7] hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.0] transition-all duration-300 mt-2 overflow-hidden text-xs sm:text-sm"
            >
              <span className="relative z-20">Start Audit</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="ml-2 sm:ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
          aria-label="Close popup"
        >
          <span className="sr-only">Close</span>
          <svg className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FreeCreditsPopup; 