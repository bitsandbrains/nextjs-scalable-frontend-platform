'use client';

import React, { useState } from 'react';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function NewsletterFooter() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribe email:', email);
        setEmail('');
    };

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Subscribe To Our Newsletter</h2>
                            <p className="text-slate-300">Stay ahead with expert insights on the latest industry trends.</p>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="px-6 py-3 rounded-lg bg-white text-gray-900 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-yellow-600 hover:text-white transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <img src="/lasa-logo-2 - Copy.webp" alt="Lasa Consultants" className="h-12 w-auto mb-4" />
                        </div>
                        <div className="space-y-2 text-sm text-slate-300">
                            <p>contact@lisbonconsultants.com</p>
                            <p>424.380.4277</p>
                            <p className="pt-2"> Rua António Champalimaud, Pólo Tecnológico de Lisboa<br />Edifício Empresarial 3 (EE3), 114, 1600-546 Lisboa, Portugal</p>
                        </div>
                        {/* Social Media */}
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Buy Side</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Sell Side</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* A La Carte */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">A La Carte</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Market Analysis</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Due Diligence Services</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Valuation Services</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Post Merger</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Strategic Initiatives</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Insights</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Glossary of M&A</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} Lisbon Consultants & Organizations. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-400">
                        Designed and Developed by <a href="https://github.com/bitsandbrains/.bitsandbrainsai" className="hover:text-yellow-400 transition-colors">bitsandbrainsai.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
