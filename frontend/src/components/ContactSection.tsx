'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="min-h-[1080px] flex items-center py-16 md:py-24" style={{ background: '#FFFFFF' }} id="contact">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left Column - Header Text & Refined Visual */}
                    <div className="space-y-8">
                        <div className="text-left">
                            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1E293B', fontFamily: 'serif' }}>
                                Get in touch
                            </h2>
                            <p className="text-lg" style={{ color: '#64748B' }}>
                                Send us your email inquiry here.
                            </p>
                        </div>

                        <div className="relative flex justify-start items-start">
                            <div
                                className="relative w-full max-w-[1400px] aspect-[1/1] -ml-20 md:-ml-32 mix-blend-multiply"
                                style={{
                                    maskImage: 'radial-gradient(circle, black 40%, transparent 85%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 85%)'
                                }}
                            >
                                <Image
                                    src="/contact-airplane-refined.png"
                                    alt="Get in touch visual"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="pt-8 md:pt-20">
                        <form onSubmit={handleSubmit} className="space-y-8 max-w-lg ml-auto">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium" style={{ color: '#1E293B' }}>
                                    Enter your full name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="ex. Tom Brown"
                                    className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                    style={{ background: '#F8FAFC' }}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#1E293B' }}>
                                    Enter your email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ex. Name@gmail.com"
                                    className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900"
                                    style={{ background: '#F8FAFC' }}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium" style={{ color: '#1E293B' }}>
                                    Enter your message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="ex. Hi, I have a problem with login"
                                    className="w-full px-4 py-3 border border-gray-200 focus:ring-1 focus:ring-black focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none"
                                    style={{ background: '#F8FAFC' }}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 px-8 font-bold flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors tracking-widest uppercase"
                            >
                                Send Message
                                <Send size={20} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div >
            </div >
        </section >
    );
}
