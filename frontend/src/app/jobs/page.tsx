'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FileCheck, ArrowLeft } from 'lucide-react';
import JobStatus from '@/components/JobStatus';
import DownloadLink from '@/components/DownloadLink';
import { TaskResult } from '@/lib/api';

function JobsPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const taskId = searchParams.get('id');

    const [result, setResult] = useState<TaskResult | null>(null);

    useEffect(() => {
        if (!taskId) {
            // No task ID, redirect to home
            router.push('/');
        }
    }, [taskId, router]);

    const handleComplete = (taskResult: TaskResult | undefined) => {
        if (taskResult) {
            setResult(taskResult);
        }
    };

    const handleReset = () => {
        router.push('/');
    };

    if (!taskId) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600">No job ID provided. Redirecting...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50">
            {/* Navigation Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <div className="bg-orange-600 rounded-full p-2">
                                <FileCheck className="text-white" size={20} strokeWidth={2.5} />
                            </div>
                            <span className="font-medium text-2xl text-gray-800 tracking-tight lowercase">lasa</span>
                        </div>

                        {/* Back Navigation */}
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Upload</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-4 py-6">
                {/* Hero Section */}
                <div className="text-center mb-6 fade-in">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Job Processing
                    </h1>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Track your file processing status
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden slide-up">
                    <div className="p-6">
                        {!result ? (
                            <JobStatus taskId={taskId} onComplete={handleComplete} />
                        ) : (
                            <DownloadLink result={result} onReset={handleReset} />
                        )}
                    </div>

                    {/* Footer Info */}
                    <div className="bg-gradient-to-r from-orange-50 to-slate-50 px-6 py-4 border-t border-orange-100">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Extract essential data from PDFs automatically. Our tool processes and generates organized Excel files with multiple sheets.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="feature-item">
                                    <FileCheck className="text-green-600 flex-shrink-0" size={16} />
                                    <span className="text-sm text-gray-700">Fast and accurate data extraction</span>
                                </div>
                                <div className="feature-item">
                                    <FileCheck className="text-green-600 flex-shrink-0" size={16} />
                                    <span className="text-sm text-gray-700">Organized Excel output</span>
                                </div>
                                <div className="feature-item">
                                    <FileCheck className="text-green-600 flex-shrink-0" size={16} />
                                    <span className="text-sm text-gray-700">Secure background processing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="mt-6 text-center text-sm text-gray-600 fade-in">
                    <p>Supported format: PDF files • Maximum 50MB per file</p>
                    <p className="mt-2">Processing happens automatically</p>
                </div>
            </div>
        </div>
    );
}

export default function JobsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Loading...</p>
            </div>
        }>
            <JobsPageContent />
        </Suspense>
    );
}
