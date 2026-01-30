'use client';

import React from 'react';

export default function StatsSection() {
    const stats = [
        {
            value: '$2B+',
            label: 'Deals Transacted'
        },
        {
            value: '200+',
            label: 'Businesses Helped'
        },
        {
            value: '25+',
            label: 'Years of Industry Experience'
        }
    ];

    return (
        <section className="py-4 md:py-6" style={{ background: 'var(--background)' }}>
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className="rounded-3xl shadow-2xl p-6 md:p-8 transform -translate-y-12 mb-[-3rem] relative z-20"
                    style={{
                        background: 'var(--card-bg)',
                        borderColor: 'var(--border-color)',
                        borderWidth: '1px'
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center justify-center"
                            >
                                <h3
                                    className="text-5xl md:text-6xl lg:text-7xl font-light mb-2 md:mb-3"
                                    style={{
                                        color: '#1e3a8a', // Precise dark navy from the image
                                        fontFamily: 'Georgia, serif'
                                    }}
                                >
                                    {stat.value}
                                </h3>
                                <p
                                    className="text-sm md:text-base font-medium tracking-widest uppercase text-slate-500 max-w-[200px]"
                                >
                                    {stat.label}
                                </p>
                                {index < stats.length - 1 && (
                                    <div className="hidden md:block absolute right-[-1rem] top-1/4 bottom-1/4 w-[1px] bg-slate-200"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
