
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#162059] text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
  <Image
    src="/logo2.png"
    alt="Pharbit Logo"
    layout="fill"
    objectFit="contain"
  />
</div>

              <div>
                <h1 className="text-2xl font-bold text-white">Pharbit</h1>
                <p className="text-sm text-[#FFFFFF]">Trusted Blockchain for Pharma and Crypto</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Home</Link>
            <Link href="#about" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">About</Link>
            <Link href="#vision" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Vision</Link>
            <Link href="#join" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Join Us</Link>
            <Link href="#contact" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Contact</Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#447EF2] w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#447EF2]/20">
            <nav className="flex flex-col gap-4">
              <Link href="#home" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Home</Link>
              <Link href="#about" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">About</Link>
              <Link href="#vision" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Vision</Link>
              <Link href="#join" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Join Us</Link>
              <Link href="#contact" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}