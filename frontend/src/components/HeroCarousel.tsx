'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Slide {
    id: number;
    image?: string;
    video?: string;
    title: string;
    subtitle: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: '/carousel1.webp',
        title: 'Leadership. Leverage. Longevity.',
        subtitle: 'Strategic consulting that empowers organizations to lead decisively, leverage opportunities intelligently, and build sustainable long-term value.',
    },
    {
        id: 2,
        image: '/carousel2.webp',
        title: 'Growth & Transformation',
        subtitle: 'From business strategy and organizational consulting to process optimization and transformation initiatives, we help organizations unlock growth, scale effectively, and stay ahead in a changing market.',
    },
    {
        id: 3,
        video: '/carousel3.webm',
        title: 'Building Businesses That Last',
        subtitle: 'We partner with organizations to create resilient strategies, strengthen leadership foundations, and deliver results that stand the test of time — not just quick wins.',
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const handleScheduleConsultation = () => {
        router.push('/consultation');
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                >
                    {/* Background Media */}
                    <div className="absolute inset-0">
                        {slide.video ? (
                            <video
                                src={slide.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : slide.image ? (
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        ) : null}
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl font-light">
                            {slide.subtitle}
                        </p>
                        <button
                            onClick={handleScheduleConsultation}
                            className="bg-gradient-to-r from-yellow-600 to-yellow-700 border-2 border-yellow-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:from-yellow-700 hover:to-yellow-800 hover:border-yellow-700 transition-all duration-300 shadow-lg"
                        >
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-yellow-600 w-8'
                            : 'bg-white/60 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
