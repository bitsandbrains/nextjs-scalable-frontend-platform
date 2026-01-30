'use client';

import React from 'react';
import { CheckCircle, Download, Upload } from 'lucide-react';
import { TaskResult, downloadFile } from '@/lib/api';

interface DownloadLinkProps {
    result: TaskResult;
    onReset: () => void;
}

export default function DownloadLink({ result, onReset }: DownloadLinkProps) {
    const handleDownload = () => {
        downloadFile(result.output_file);
    };

    return (
        <div className="text-center py-12 success-card">
            <div className="checkmark mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                <CheckCircle className="text-green-600" size={48} strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Processing Complete!
            </h3>
            <p className="mb-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
                Your Excel file with extracted data is ready to download
            </p>

            <div className="rounded-xl p-8 mb-8 max-w-md mx-auto" style={{ background: 'var(--background)' }}>
                <h4 className="font-bold mb-4 text-lg" style={{ color: 'var(--text-primary)' }}>Extracted Data Sheets</h4>
                <ul className="space-y-3 text-left">
                    <li className="feature-item">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        <span style={{ color: 'var(--text-secondary)' }}>Contract Metadata</span>
                    </li>
                    <li className="feature-item">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        <span style={{ color: 'var(--text-secondary)' }}>Buyer & Organisation Details</span>
                    </li>
                    <li className="feature-item">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        <span style={{ color: 'var(--text-secondary)' }}>Service & Financial Details</span>
                    </li>
                    <li className="feature-item">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        <span style={{ color: 'var(--text-secondary)' }}>Seller / Consignee Details</span>
                    </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-orange-200">
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="font-semibold">Processed:</span> {result.processed_files} of {result.total_files} files
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={handleDownload}
                    className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
                >
                    <Download size={24} />
                    Download Excel File
                </button>
                <button
                    onClick={onReset}
                    className="px-8 py-4 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all flex items-center justify-center gap-3"
                >
                    <Upload size={20} />
                    Process More Files
                </button>
            </div>
        </div>
    );
}
