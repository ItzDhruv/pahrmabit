
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#162059] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 relative">
                <Image
                  src="/logo2.png"
                  alt="Pharbit Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pharbit</h3>
                <p className="text-[#447EF2] text-sm">Trusted Blockchain for Pharma and Crypto</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Revolutionizing pharmaceutical supply chain through blockchain technology, bringing transparency and security to healthcare and finance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-x-line w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-line w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-[#447EF2] hover:text-white transition-colors cursor-pointer">
                <i className="ri-telegram-line w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-300 hover:text-[#447EF2] transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-[#447EF2] transition-colors cursor-pointer">About</Link></li>
              <li><Link href="#vision" className="text-gray-300 hover:text-[#447EF2] transition-colors cursor-pointer">Vision</Link></li>
              <li><Link href="#join" className="text-gray-300 hover:text-[#447EF2] transition-colors cursor-pointer">Join Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
                info@pharbit.com
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                Germany
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                Launch: January 2026
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#447EF2]/20 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Pharbit (PHB). All rights reserved. | Building the future of pharmaceutical blockchain.
          </p>
        </div>
      </div>
    </footer>
  );
}