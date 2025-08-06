
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import VisionSection from '../components/VisionSection';
import JoinUsSection from '../components/JoinUsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <AboutSection />
        <VisionSection />
        <JoinUsSection />
      </main>

      <Footer />
    </div>
  );
}