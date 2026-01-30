'use client';

import React from 'react';
import Image from 'next/image';

export default function MandAExpertsSection() {
    const handleLearnMore = () => {
        // Scroll to services section or navigate to about page
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* First Section - About */}
            <div className="min-h-screen flex items-center py-12 md:py-16" style={{ background: 'var(--card-bg)' }}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                        {/* Left Column - Text Content */}
                        <div className="space-y-4 md:space-y-6">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                About Lisbon Consultants &amp; Organizations
                            </h3>
                            <h4 className="text-xl md:text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>Strategic Advisors for Sustainable Growth</h4>
                            <div className="w-20 h-1" style={{ background: 'var(--accent-gold)' }}></div>

                            <div className="space-y-3 md:space-y-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                <p className="text-base md:text-lg">At Lisbon Consultants &amp; Organizations, we help businesses navigate complexity with clarity, confidence, and purpose. Our work is grounded in strategic thinking, organizational insight, and a deep understanding of what it takes to build resilient, future-ready enterprises.</p>
                                <p className="text-base md:text-lg">We partner with leadership teams to address critical business challenges—from defining strategy and strengthening organizational structures to optimizing processes and driving long-term growth. Our approach is practical, data-driven, and tailored to each organization's unique context.</p>
                                <p className="text-base md:text-lg">In an increasingly dynamic and competitive environment, strategic decisions carry long-term consequences. Without the right guidance, organizations can face uncertainty, misalignment, and stalled growth. We exist to bring structure, perspective, and informed direction to those pivotal moments.</p>
                                <p className="text-base md:text-lg">Whether you are a founder, executive, or leadership team planning your next phase of growth, transformation, or expansion, Lisbon Consultants &amp; Organizations serves as a trusted partner—focused not on short-term wins, but on creating enduring value.</p>
                            </div>
                        </div>

                        {/* Right Column - Single Image */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[800px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/mna-experts.webp"
                                alt="M&amp;A Experts Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section - Our Philosophy */}
            <div className="min-h-screen flex items-center py-12 md:py-16" style={{ background: 'var(--background)' }}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                        {/* Left Column - Philosophy Content */}
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>
                                    Our Philosophy
                                </h2>
                                <div className="w-24 h-1.5 mb-4 md:mb-6" style={{ background: 'var(--accent-gold)' }}></div>
                                <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-yellow-600">
                                    Leadership • Leverage • Longevity
                                </p>
                            </div>

                            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8" style={{ color: 'var(--text-secondary)' }}>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Leadership — Empowering decision-makers with clarity, confidence, and strategic foresight.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Leverage — Helping organizations make the most of their capabilities, resources, and opportunities.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Longevity — Building strategies and structures designed to last, adapt, and grow over time.
                                </p>
                            </div>

                            <button
                                onClick={handleLearnMore}
                                className="mt-4 md:mt-6 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                            >
                                Learn More
                                <span>→</span>
                            </button>
                        </div>

                        {/* Right Column - Single Image */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/philosophy.webp"
                                alt="M&amp;A Experts Team - Strategy"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
