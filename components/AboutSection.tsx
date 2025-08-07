
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#2E3C8C] mb-8">What is Pharbit?</h2>
            <div className="prose prose-lg text-[#192340] leading-relaxed">
              <p className="text-lg mb-6">
                Pharbit (PHB) is a revolutionary blockchain that blends a cryptocurrency with 10 million PHB coins for global trading and a secure system to track medicines. Starting in Germany, it tackles fake drugs, ensures safe storage like cold chain for vaccines, and meets strict regulatory requirements.
              </p>
              <p className="text-lg">
                Built with smart technology, Pharbit offers trust and value to the pharmaceutical industry while providing a reliable cryptocurrency for traders worldwide. Our innovative platform launches in January 2026, bringing transparency and security to healthcare and finance.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-[#66A638]"></i>
                <span className="text-[#192340] font-medium">Secure Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-global-line w-6 h-6 flex items-center justify-center text-[#66A638]"></i>
                <span className="text-[#192340] font-medium">Global Trading</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20pharmaceutical%20blockchain%20visualization%20with%20digital%20pills%20floating%20above%20interconnected%20network%20nodes%2C%20clean%20blue%20and%20green%20color%20scheme%20representing%20secure%20medical%20supply%20chain%2C%20professional%20medical%20technology%20background%20with%20subtle%20circuit%20patterns%20and%20pharmaceutical%20symbols%2C%20minimalist%20design%20with%20depth%2C%20high-tech%20medical%20innovation%20concept&width=600&height=400&seq=pharbit-about&orientation=landscape"
              alt="Pharbit blockchain technology"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#192340]/10 to-[#66A638]/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}