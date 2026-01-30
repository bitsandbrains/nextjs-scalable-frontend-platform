'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FileCheck, CheckCircle } from 'lucide-react';
import FileUploader from '@/components/FileUploader';
import HeroCarousel from '@/components/HeroCarousel';
import StatsSection from '@/components/StatsSection';
import MandAExpertsSection from '@/components/MandAExpertsSection';
import ServicesSection from '@/components/ServicesSection';
import NewsletterFooter from '@/components/NewsletterFooter';
import ThemeToggle from '@/components/ThemeToggle';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const router = useRouter();

  const handleUploadComplete = (taskId: string) => {
    // Navigate to jobs page with task ID
    router.push(`/jobs?id=${taskId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50" style={{ background: 'var(--background)' }}>
      {/* Navigation Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 backdrop-blur-md sticky top-0 z-50 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src="/lasa-logo-2 - Copy.webp" alt="Lasa Consulting & Organizations" className="h-16 w-auto" />
            </a>

            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-yellow-400 font-medium transition-colors">About</a>
              <a href="#services" className="text-white hover:text-yellow-400 font-medium transition-colors">Our Services</a>
              <a href="#upload" className="text-white hover:text-yellow-400 font-medium transition-colors">Upload PDF</a>
              <a href="#contact" className="text-white hover:text-yellow-400 font-medium transition-colors">Contact Us</a>
            </nav>

            {/* CTA Button & Theme Toggle */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => router.push('/consultation')}
                className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:from-yellow-700 hover:to-yellow-800 transition-all shadow-md hover:shadow-lg"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Stats Section */}
      <StatsSection />

      {/* M&A Experts Section */}
      <div id="about">
        <MandAExpertsSection />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* PDF Upload Section */}
      <div id="upload" className="min-h-[500px] md:min-h-[550px] flex items-center py-1 md:py-2" style={{ background: 'var(--background)' }}>
        <div className="max-w-5xl mx-auto px-4 w-full">
          {/* Section Header */}
          <div className="text-center mb-1 md:mb-2 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-0.5 md:mb-1" style={{ color: 'var(--text-primary)' }}>
              Lisbon Consultants &amp; Organizations
            </h2>
            <div className="w-24 h-1 mx-auto mb-1 md:mb-2" style={{ background: 'var(--accent-gold)' }}></div>
            <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Securely upload your PDF contracts for intelligent data extraction and analysis.
            </p>
          </div>

          {/* Main Card */}
          <div className="rounded-3xl shadow-2xl overflow-hidden slide-up" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)', borderWidth: '1px' }}>
            <div className="p-3 md:p-5">
              <div className="p-3 md:p-4 rounded-2xl" style={{ background: 'var(--background)', border: '1px dashed var(--border-color)' }}>
                <FileUploader onUploadComplete={handleUploadComplete} />
              </div>
            </div>

            {/* Footer Info */}
            <div className="px-5 md:px-8 py-3 md:py-4 border-t" style={{ background: 'rgba(var(--primary-brand-rgb), 0.03)', borderColor: 'var(--border-color)' }}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col justify-center">
                  <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2" style={{ color: 'var(--text-primary)' }}>Why Choose Our Platform?</h4>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Our proprietary AI engine extracts essential data from complex PDFs automatically, delivering structured Excel outputs that save hours of manual entry.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  <div className="flex items-center gap-3 p-1.5 md:p-2 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="text-green-600" size={16} />
                    </div>
                    <span className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Fast and accurate data extraction</span>
                  </div>
                  <div className="flex items-center gap-3 p-1.5 md:p-2 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="text-green-600" size={16} />
                    </div>
                    <span className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Organized Excel output with multi-sheet support</span>
                  </div>
                  <div className="flex items-center gap-3 p-1.5 md:p-2 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <CheckCircle className="text-green-600" size={16} />
                    </div>
                    <span className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Secure end-to-end background processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-2 md:mt-4 text-center text-xs md:text-sm font-medium fade-in" style={{ color: 'var(--text-secondary)' }}>
            <div className="inline-flex items-center gap-4 bg-gray-100 dark:bg-slate-800 px-6 py-1 rounded-full border border-gray-200 dark:border-slate-700">
              <span>Supported format: <span className="text-blue-600">PDF</span></span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>Max size: <span className="text-blue-600">50MB</span></span>
            </div>
            <p className="mt-1 md:mt-1.5 opacity-70">Enterprise-grade security for all your documents</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Newsletter & Footer Section */}
      <div id="footer">
        <NewsletterFooter />
      </div>
    </div>
  );
}
