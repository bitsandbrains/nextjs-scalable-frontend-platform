/**
 * API Utilities for Backend Communication
 * Centralized API calls for file upload, job status, and downloads
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Type Definitions
export interface UploadResponse {
    task_id: string;
    status: string;
}

export interface TaskResult {
    processed_files: number;
    total_files: number;
    output_file: string;
    errors: string[];
}

export interface TaskStatus {
    task_id: string;
    status: 'PENDING' | 'PROCESSING' | 'SUCCESS' | 'FAILURE';
    result?: TaskResult;
    error?: string;
}

/**
 * Upload PDF files to the backend
 * @param files - Array of PDF files to upload
 * @returns Promise with task_id for tracking
 */
export async function uploadFiles(files: File[]): Promise<UploadResponse> {
    const formData = new FormData();

    files.forEach(file => {
        formData.append('files', file);
    });

    const response = await fetch(`${API_BASE_URL}/upload/`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Upload failed');
    }

    return response.json();
}

/**
 * Get the current status of a processing task
 * @param taskId - The task ID returned from upload
 * @returns Promise with current task status
 */
export async function getTaskStatus(taskId: string): Promise<TaskStatus> {
    const response = await fetch(`${API_BASE_URL}/task/${taskId}`);

    if (!response.ok) {
        throw new Error('Failed to fetch task status');
    }

    return response.json();
}

/**
 * Get the download URL for a processed file
 * @param filename - The output filename from task result
 * @returns Full download URL
 */
export function getDownloadUrl(filename: string): string {
    return `${API_BASE_URL}/download/${filename}`;
}

/**
 * Download a file by opening it in a new tab
 * @param filename - The output filename from task result
 */
export function downloadFile(filename: string): void {
    const url = getDownloadUrl(filename);
    window.open(url, '_blank');
}
