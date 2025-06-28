"use client"
import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Webinar = () => {
  // Static data for the webinar
  const attendees = 247;
  const capacity = 500;
  const percentFilled = Math.round((attendees / capacity) * 100);

  return (
    <div className="flex flex-col-reverse mb-4 lg:flex-row gap-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl  max-w-7xl mx-auto px-6 lg:px-8 py-8  mt-4">
      {/* Left: Event Details */}
      <div className="flex-1 ">
        {/* Badges */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Webinar</span>
          <span className="px-4 py-1 rounded-full text-xs font-semibold border border-blue-200 text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700">Upcoming</span>
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Axto X Clive Loseby ( TED Speaker)</h1>
        {/* Description */}
        <p className="text-gray-800 dark:text-gray-200 mb-2 text-lg ">
          The European Accessibility Act (EAA) is coming into force - but digital compliance isn't just about ticking checkboxes. It's about real people, real users, and real inclusion.
        </p>
        <p className="text-gray-800 dark:text-gray-200 mb-2 text-lg ">
        Join TEDx speaker Clive Loseby, Axto.ai experts, and legal consultants as we dive into:
          
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-200 mb-6 text-lg ">
            <li>What EAA means for your website or platform</li>
            <li>Common violations you may not know about</li>
            <li>Why testing with people with disabilities matters</li>
            <li>How to audit, fix, and future-proof your digital presence</li>
            <li>Live demo of Axto's AI-powered audit too</li>
          </ul>
        {/* Event Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg px-3 py-3">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="text-xs text-gray-700 dark:text-gray-300">Date</div>
              <div className="font-medium text-gray-900 dark:text-white">June 27, 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg px-3 py-3">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="text-xs text-gray-700 dark:text-gray-300">Time & Duration</div>
              <div className="font-medium text-gray-900 dark:text-white">3 PM BST</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg px-3 py-3">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="text-xs text-gray-700 dark:text-gray-300">Location</div>
              <div className="font-medium text-gray-900 dark:text-white">Virtual Event</div>
            </div>
          </div>
          
        </div>
        {/* Registration Progress */}
        {/* <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-900 dark:text-gray-200 font-medium">Registration Progress</span>
            <span className="text-xs text-gray-700 dark:text-gray-300">{percentFilled}% filled</span>
          </div>
          <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300" style={{ width: `${percentFilled}%` }}></div>
          </div>
        </div> */}
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Link
                                href={`https://www.youtube.com/watch?v=H41vGq_IvxM&t=5s`}  target='_blank'
                                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#444CE7] text-white font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.0] transition-all duration-300 overflow-hidden text-xs sm:text-sm"
                            >
                                <span className="relative z-20">Missed It? Watch Here</span>
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-20" />

                                {/* Shine effect - Fixed */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>

                                {/* Subtle pulse effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </Link>
         
        </div>
        
      </div>
      {/* Right: Speaker Card */}
      <div className="w-full lg:w-96 flex-shrink-0 bg-blue-50 dark:bg-blue-900/20 rounded-2xl py-3 px-4 flex flex-col items-center shadow-md border border-blue-100 dark:border-blue-800">
        <div className="text-base font-semibold text-gray-900 dark:text-white mb-2">Featured Speaker</div>
        <div className="relative mb-2 w-full h-48">
          <Image src="/speaker.webp" alt="Image" fill className="rounded-xl object-cover border border-white shadow-lg" />
          {/* <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span> */}
        </div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">Clive Loseby</div>
        
      
        <div className="flex flex-wrap gap-2 mb-3 mt-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">Founder of Access by Design</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">TEDx Speaker</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">Digital Accessibility Advocate</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">Global Leader in Website Accessibility</span>
        </div>
        <div className="text-gray-800 dark:text-gray-200 text-[12px] mb-2 text-center">
     Clive Loseby is a leading accessibility advocate and TEDx speaker with nearly 20 years of experience. He founded Access by Design to make the web inclusive for all, supported by a team of disabled auditors. Clive launched the world's first fully accessible, mobile-friendly website in 2011 and continues to support organizations through consulting, training, and awareness.
        </div>
      <div className="flex  items-center gap-5 mt-auto ">
      <Link
        href="https://www.linkedin.com/in/cliveloseby/"
        target="_blank"
        aria-label="Clive Loseby's LinkedIn Profile"
        className="flex items-center gap-2 text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <Linkedin className="w-5 h-5" />
        {/* <span className="text-sm font-medium underline"></span> */}
      </Link>
      <Link
        href="https://x.com/abd_clive"
        target="_blank"
        aria-label="Clive Loseby's Twitter Profile"
        className="flex items-center gap-2 text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <Twitter className="w-5 h-5" />
        {/* <span className="text-sm font-medium underline">Clive Loseby</span> */}
      </Link>
    </div>
      </div>
    </div>
  );
};

export default Webinar;