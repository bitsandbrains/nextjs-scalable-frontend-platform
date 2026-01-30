'use client';

import React from 'react';
import { Users, TrendingUp, BarChart3, FileCheck, Calculator, GitMerge, Lightbulb } from 'lucide-react';

interface Service {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        id: 1,
        icon: <TrendingUp size={48} />,
        title: 'Business Strategy & Advisory',
        description: 'Clear, actionable strategies that enable leadership teams to make informed decisions, navigate complexity, and achieve sustainable growth.',
    },
    {
        id: 2,
        icon: <Users size={48} />,
        title: 'Organizational Consulting',
        description: 'Strengthening structures, processes, and leadership frameworks to improve efficiency, alignment, and execution across the organization.',
    },
    {
        id: 3,
        icon: <BarChart3 size={48} />,
        title: 'Market & Industry Analysis',
        description: 'In-depth insights into market dynamics, competitive landscapes, and growth opportunities to support confident strategic planning.',
    },
    {
        id: 4,
        icon: <GitMerge size={48} />,
        title: 'Process Optimization & Transformation',
        description: 'Identifying inefficiencies and implementing optimized workflows that enhance productivity, scalability, and operational resilience.',
    },
    {
        id: 5,
        icon: <TrendingUp size={48} />,
        title: 'Growth & Expansion Advisory',
        description: 'Strategic guidance for market entry, business expansion, diversification, and scaling initiatives aligned with long-term objectives.',
    },
    {
        id: 6,
        icon: <Users size={48} />,
        title: 'Leadership Development & Capability Building',
        description: 'Developing leadership capabilities, governance practices, and decision-making frameworks that empower organizations to lead effectively.',
    },
    {
        id: 7,
        icon: <Lightbulb size={48} />,
        title: 'Strategic Initiatives & Long-Term Planning',
        description: 'Designing and executing high-impact initiatives that strengthen competitive positioning and ensure long-term organizational longevity.',
    },
    {
        id: 8,
        icon: <GitMerge size={48} />,
        title: 'M&A Deal Execution & Integration',
        description: 'Comprehensive support for executing complex transactions and ensuring seamless post-merger integration to realize full synergy value.',
    },
];

export default function ServicesSection() {
    const handleLearnMore = () => {
        // Navigate to services page or open modal
        console.log('Learn more about services');
    };

    return (
        <div id="services-section" className="py-16 md:py-24" style={{ background: 'var(--background)' }}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                        Our Services
                    </h2>
                    <div className="w-20 h-1 mx-auto" style={{ background: 'var(--accent-gold)' }}></div>
                    <p className="text-lg mt-6 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        At Lisbon Consultants & Organizations, we partner with businesses at every stage of growth to provide strategic clarity, operational strength, and long-term value creation.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                            style={{ background: 'var(--card-bg)' }}
                        >
                            <div className="mb-4 text-blue-600 group-hover:text-yellow-600 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors duration-300 cursor-default" style={{ color: 'var(--text-primary)' }}>
                                {service.title}
                            </h3>
                            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="text-center">
                    <button
                        onClick={handleLearnMore}
                        className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                    >
                        Learn More
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
