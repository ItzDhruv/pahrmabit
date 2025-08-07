
'use client';

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://readdy.ai/api/search-image?query=Clean%20pharmaceutical%20supply%20chain%20network%20visualization%20showing%20connected%20nodes%20representing%20hospitals%2C%20pharmacies%2C%20and%20distribution%20centers%2C%20modern%20blue%20and%20green%20color%20palette%2C%20professional%20medical%20logistics%20diagram%20with%20IoT%20sensors%20and%20smart%20contracts%20symbols%2C%20transparent%20background%20with%20subtle%20geometric%20patterns%2C%20business%20technology%20illustration%20for%20healthcare%20industry&width=600&height=400&seq=pharbit-vision&orientation=landscape"
              alt="Pharmaceutical supply chain network"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#192340]/10 to-[#66A638]/10 rounded-2xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-[#2E3C8C] mb-8">Our Mission</h2>
            <div className="prose prose-lg text-[#192340] leading-relaxed">
              <p className="text-lg mb-6">
                Pharbit brings transparency to Germany's pharma industry and reliable value to crypto markets. Using smart contracts and IoT technology, we support small businesses and traders worldwide.
              </p>
              <p className="text-lg mb-8">
                Our goal is a scalable, trusted blockchain by January 2026, improving both healthcare delivery and financial systems through innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#66A638]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-heart-pulse-line w-8 h-8 flex items-center justify-center text-[#66A638]"></i>
                </div>
                <h4 className="font-semibold text-[#192340] mb-1">Healthcare</h4>
                <p className="text-sm text-[#192340]/70">Secure medicine tracking</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#447EF2]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-coins-line w-8 h-8 flex items-center justify-center text-[#447EF2]"></i>
                </div>
                <h4 className="font-semibold text-[#192340] mb-1">Crypto Trading</h4>
                <p className="text-sm text-[#192340]/70">10M PHB coins</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2E3C8C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-links-line w-8 h-8 flex items-center justify-center text-[#2E3C8C]"></i>
                </div>
                <h4 className="font-semibold text-[#192340] mb-1">Blockchain</h4>
                <p className="text-sm text-[#192340]/70">Smart contracts & IoT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}