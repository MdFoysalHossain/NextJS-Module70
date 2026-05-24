"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-zinc-800 transition-all">
      <div className="max-w-[1330px] mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-serif font-bold tracking-wide text-amber-500 hover:text-amber-400 transition-colors">
            GUSTO<span className="text-white">.</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-amber-400 transition-colors py-2 border-b-2 border-transparent hover:border-amber-500">
            Home
          </Link>
          <Link href="/foods" className="hover:text-amber-400 transition-colors py-2 border-b-2 border-transparent hover:border-amber-500">
            Our Menu
          </Link>
          <Link href="/reviews" className="hover:text-amber-400 transition-colors py-2 border-b-2 border-transparent hover:border-amber-500">
            Reviews
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors py-2 border-b-2 border-transparent hover:border-amber-500">
            Our Story
          </Link>
        </div>

        <div className="hidden md:block">
          <Link  href="/reservation"  className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 text-sm uppercase tracking-wider"
          >
            Book A Table
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white focus:outline-none p-2" aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>


      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col gap-5 text-center font-medium tracking-wider uppercase">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-amber-400 py-2 transition-colors">
            Home
          </Link>
          <Link href="/foods" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-amber-400 py-2 transition-colors">
            Our Menu
          </Link>
          <Link href="/reviews" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-amber-400 py-2 transition-colors">
            Reviews
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-amber-400 py-2 transition-colors">
            Our Story
          </Link>
          
          <Link href="/reservation" onClick={() => setIsOpen(false)} className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold px-6 py-3 rounded-md transition-colors mt-2">
            Book A Table
          </Link>
        </div>
      </div>
    </nav>
  );
}