
'use client';

import { useState } from 'react';

export default function JoinUsSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setMessage('Thank you for signing up! We\'ll keep you updated on Pharbit\'s launch.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#2E3C8C] mb-6">Get Involved</h2>
        <p className="text-xl text-[#192340] mb-12 max-w-2xl mx-auto">
          Stay updated on Pharbit's launch! Sign up for news and be part of the revolution in pharmaceutical blockchain technology.
        </p>

        <form id="pharbit-signup" onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#447EF2] focus:border-transparent text-[#192340] text-sm"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-[#447EF2] hover:bg-[#2E3C8C] text-white rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>

        {message && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg mb-8 max-w-md mx-auto">
            {message}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <i className="ri-twitter-x-line w-6 h-6 flex items-center justify-center text-[#447EF2]"></i>
            <span className="text-[#192340]">Follow us on X for real-time updates</span>
          </div>
          <a 
            href="#" 
            className="text-[#447EF2] hover:text-[#2E3C8C] font-medium cursor-pointer transition-colors"
          >
            @Pharbit
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#447EF2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-calendar-line w-10 h-10 flex items-center justify-center text-[#447EF2]"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#2E3C8C] mb-2">Launch Date</h3>
            <p className="text-[#192340]">January 2026</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#66A638]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line w-10 h-10 flex items-center justify-center text-[#66A638]"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#2E3C8C] mb-2">Starting Location</h3>
            <p className="text-[#192340]">Germany</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#2E3C8C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-stack-line w-10 h-10 flex items-center justify-center text-[#2E3C8C]"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#2E3C8C] mb-2">Total Supply</h3>
            <p className="text-[#192340]">10 Billion PHB</p>
          </div>
        </div>
      </div>
    </section>
  );
}