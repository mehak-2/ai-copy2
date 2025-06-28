'use client';

import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import Link from 'next/link';

export default function HeaderWebinar() {
  const webinarContent = (
    <div className="flex items-center gap-4 text-sm px-8 py-2 shrink-0">
      <div className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
        <Mic className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span className="font-medium text-blue-700 dark:text-blue-300">
          Join our webinar for more details.
        </span>
        <span className="text-slate-900 dark:text-[#fff]">
          Date - 27 June at 3PM BST.
        </span>
      </div>
      <div className="font-medium text-white  bg-blue-600 dark:bg-blue-400 hover:bg-blue-500 dark:hover:bg-blue-300 transition-colors duration-300 rounded-full px-4 py-1">
        Register Now
      </div>
    </div>
  ); 

  return (
    <Link
      href="https://lu.ma/xfpsmorb"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our webinar on YouTube"
      className='container mx-auto'
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full border-y border-gray-200 dark:border-gray-700 cursor-pointer overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
      >
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>{webinarContent}</div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
