'use client';

import React, { useState, useCallback } from 'react';
import { Upload, FileCheck, AlertCircle } from 'lucide-react';

interface FileUploaderProps {
    onUploadComplete: (taskId: string) => void;
}

export default function FileUploader({ onUploadComplete }: FileUploaderProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files);
        const pdfFile = files.find(file => file.type === 'application/pdf');

        if (pdfFile) {
            if (pdfFile.size > 50 * 1024 * 1024) {
                setError('File size exceeds 50MB limit');
                return;
            }
            setSelectedFile(pdfFile);
            setError(null);
        } else {
            setError('Please upload a PDF file');
        }
    }, []);

    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type === 'application/pdf') {
                if (file.size > 50 * 1024 * 1024) {
                    setError('File size exceeds 50MB limit');
                    return;
                }
                setSelectedFile(file);
                setError(null);
            } else {
                setError('Please upload a PDF file');
            }
        }
    }, []);

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();
            onUploadComplete(data.taskId);
        } catch (err) {
            setError('Failed to upload file. Please try again.');
            console.error('Upload error:', err);
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setError(null);
    };

    return (
        <div className="space-y-6">
            {/* Drop Zone */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    relative border-2 border-dashed rounded-2xl p-4 md:p-6 text-center transition-all duration-300 group
                    ${isDragging
                        ? 'border-yellow-600 bg-yellow-50/10'
                        : 'border-slate-300 dark:border-slate-700 hover:border-yellow-600/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
                    }
                `}
            >
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                <div className={`
                    mx-auto mb-2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300
                    ${isDragging ? 'bg-yellow-600 text-white scale-110 shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-yellow-600 group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900/20'}
                `}>
                    <Upload size={28} className={isDragging ? 'animate-bounce' : ''} />
                </div>

                <h3 className="text-2xl font-bold mb-1 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {isDragging ? 'Drop your PDF here' : 'Select PDF Contract'}
                </h3>

                <p className="text-lg max-w-sm mx-auto mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                    Drag and drop your file here, or <span className="text-blue-600 dark:text-blue-400 font-bold underline decoration-2 underline-offset-4">click to browse</span>
                </p>

                <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest opacity-60" style={{ color: 'var(--text-secondary)' }}>
                    <span>PDF</span>
                    <span className="w-1 h-1 bg-current rounded-full"></span>
                    <span>MAX 50MB</span>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="flex items-center gap-3 p-5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl animate-shake">
                    <div className="bg-red-100 dark:bg-red-800 p-1.5 rounded-full">
                        <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
                    </div>
                    <p className="text-sm font-medium text-red-700 dark:text-red-300">{error}</p>
                </div>
            )}

            {/* Selected File */}
            {selectedFile && (
                <div className="flex items-center justify-between p-5 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl slide-up overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 dark:bg-blue-800 p-2.5 rounded-lg">
                            <FileCheck className="text-blue-600 dark:text-blue-400" size={28} />
                        </div>
                        <div>
                            <p className="font-bold text-lg truncate max-w-[200px] md:max-w-md" style={{ color: 'var(--text-primary)' }}>{selectedFile.name}</p>
                            <p className="text-sm font-semibold tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                        </div>
                    </div>

                    {!isUploading && (
                        <button
                            onClick={handleRemoveFile}
                            className="text-sm bg-white dark:bg-slate-800 px-4 py-2 rounded-lg font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                        >
                            Remove
                        </button>
                    )}
                </div>
            )}

            {/* Upload Button */}
            {selectedFile && (
                <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className={`
                        w-full py-4 rounded-xl font-black text-lg tracking-widest uppercase transition-all duration-500 relative overflow-hidden group
                        ${isUploading
                            ? 'bg-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] active:scale-[0.98]'
                        }
                        text-white shadow-xl
                    `}
                >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        {isUploading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Processing...
                            </>
                        ) : (
                            <>
                                Begin Analysis
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </>
                        )}
                    </span>
                    {!isUploading && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/0 via-yellow-600/20 to-yellow-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                </button>
            )}
        </div>
    );
}
