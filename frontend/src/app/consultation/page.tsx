'use client';

import React, { useState, useEffect } from 'react';
import {
    Linkedin,
    Facebook,
    Instagram,
    Youtube,
    ChevronLeft,
    ChevronRight,
    Clock,
    Globe,
    ChevronDown,
    Calendar as CalendarIcon,
    ArrowRight
} from 'lucide-react';
import Image from 'next/image';

// --- Utility Functions ---
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const TIME_SLOTS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM'
];

export default function ConsultationPage() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState(1); // 1: Date/Time, 2: Details
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    // Calendar logic
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const isDateSelectable = (day: number) => {
        const date = new Date(year, month, day);
        return date >= today; // Allow all future dates including weekends for now to permit testing
    };

    const handleDateSelect = (day: number) => {
        const date = new Date(year, month, day);
        if (isDateSelectable(day)) {
            setSelectedDate(date);
            setSelectedTime(null);
        }
    };

    const handleContinue = () => {
        if (selectedDate && selectedTime) {
            setStep(2);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD]">
            {/* Navigation Header */}
            <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 backdrop-blur-md sticky top-0 z-50 border-b border-yellow-600/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <a href="/" className="flex-shrink-0 flex items-center">
                            <img src="/lasa-logo-2 - Copy.webp" alt="Lisbon Consultants" className="h-14 w-auto" />
                        </a>
                        <nav className="hidden md:flex space-x-10">
                            <a href="/" className="text-white/90 hover:text-yellow-400 font-medium transition-colors text-sm uppercase tracking-wider">Home</a>
                            <a href="/#about" className="text-white/90 hover:text-yellow-400 font-medium transition-colors text-sm uppercase tracking-wider">About</a>
                            <a href="/#services" className="text-white/90 hover:text-yellow-400 font-medium transition-colors text-sm uppercase tracking-wider">Services</a>
                            <a href="/#contact" className="text-white/90 hover:text-yellow-400 font-medium transition-colors text-sm uppercase tracking-wider">Contact</a>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="bg-yellow-600 text-white px-6 py-2 rounded font-bold text-xs tracking-widest hover:bg-yellow-700 transition-all uppercase">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="grid lg:grid-cols-[400px,1fr] gap-12 items-start">

                    {/* Left Column - Meeting Info Sidebar */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm sticky top-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-900">
                                <Clock size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-xl">Consultation</h3>
                                <p className="text-gray-500 text-sm">Lisbon Consultants & Organizations</p>
                            </div>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4 text-gray-700">
                                <Clock className="mt-1 flex-shrink-0 text-yellow-600" size={20} />
                                <div>
                                    <p className="font-semibold">Duration</p>
                                    <p className="text-sm">30 - 45 Minutes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 text-gray-700">
                                <Globe className="mt-1 flex-shrink-0 text-yellow-600" size={20} />
                                <div>
                                    <p className="font-semibold">Location</p>
                                    <p className="text-sm">Video Call (Google Meet/Zoom)</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-50">
                            <p className="text-sm text-gray-500 italic leading-relaxed">
                                "Securely discuss your organizational needs with our expert consultants. We specialize in M&A, strategy, and operational excellence."
                            </p>
                        </div>

                        {/* Social/Contact Mini-Footer */}
                        <div className="pt-8 flex gap-4 text-gray-400">
                            <Linkedin size={18} className="hover:text-blue-700 cursor-pointer" />
                            <Facebook size={18} className="hover:text-blue-900 cursor-pointer" />
                            <Instagram size={18} className="hover:text-pink-600 cursor-pointer" />
                            <Youtube size={18} className="hover:text-red-600 cursor-pointer" />
                        </div>
                    </div>

                    {/* Right Column - Booking Interface */}
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden min-h-[700px]">

                        {step === 1 ? (
                            <div className="grid md:grid-cols-2 h-full">
                                {/* Calendar Section */}
                                <div className="p-8 border-r border-gray-50">
                                    <div className="flex justify-between items-center mb-10">
                                        <h2 className="text-2xl font-bold text-gray-900">Select Date</h2>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handlePrevMonth}
                                                className={`p-2 rounded-full transition-colors ${month === today.getMonth() && year === today.getFullYear() ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-gray-100 text-gray-600'}`}
                                                disabled={month === today.getMonth() && year === today.getFullYear()}
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="relative group">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-gray-800 hover:border-blue-200 transition-all shadow-sm">
                                                {MONTHS[month]}
                                                <ChevronDown size={14} className="text-gray-400" />
                                            </button>
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-2xl py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                                {MONTHS.map((m, i) => (
                                                    <button
                                                        key={m}
                                                        onClick={() => setCurrentDate(new Date(year, i, 1))}
                                                        className={`w-full text-left px-5 py-2.5 text-sm hover:bg-blue-50 transition-colors ${i === month ? 'bg-blue-50 text-blue-900 font-bold' : 'text-gray-600'}`}
                                                        disabled={i < today.getMonth() && year === today.getFullYear()}
                                                    >
                                                        {m}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl font-bold text-gray-800 hover:border-blue-200 transition-all shadow-sm">
                                                {year}
                                                <ChevronDown size={14} className="text-gray-400" />
                                            </button>
                                            <div className="absolute top-full left-0 mt-2 w-32 bg-white border border-gray-100 rounded-2xl shadow-2xl py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                                {[2026, 2027].map(y => (
                                                    <button
                                                        key={y}
                                                        onClick={() => setCurrentDate(new Date(y, month, 1))}
                                                        className={`w-full text-left px-5 py-2.5 text-sm hover:bg-blue-50 transition-colors ${y === year ? 'bg-blue-50 text-blue-900 font-bold' : 'text-gray-600'}`}
                                                    >
                                                        {y}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Days Label */}
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {DAYS_OF_WEEK.map(day => (
                                            <div key={day} className="text-[10px] font-bold text-gray-400 text-center py-2 tracking-tighter">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Grid */}
                                    <div className="grid grid-cols-7 gap-2">
                                        {Array.from({ length: firstDay }).map((_, i) => (
                                            <div key={`empty-${i}`} />
                                        ))}
                                        {Array.from({ length: daysInMonth }).map((_, i) => {
                                            const day = i + 1;
                                            const selectable = isDateSelectable(day);
                                            const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year;
                                            const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;

                                            return (
                                                <button
                                                    key={day}
                                                    disabled={!selectable}
                                                    onClick={() => handleDateSelect(day)}
                                                    className={`
                                                        aspect-square rounded-xl text-sm font-semibold transition-all flex flex-col items-center justify-center relative
                                                        ${selectable
                                                            ? 'hover:bg-blue-50 text-gray-800 border border-gray-100 hover:border-blue-200 active:scale-95'
                                                            : 'text-gray-200 cursor-not-allowed'}
                                                        ${isSelected ? 'bg-blue-900 !text-white border-blue-900 scale-105 shadow-md z-10' : ''}
                                                        ${isToday && !isSelected ? 'border-yellow-600 border-2' : ''}
                                                    `}
                                                >
                                                    {day}
                                                    {isToday && !isSelected && (
                                                        <span className="absolute bottom-1 w-1 h-1 bg-yellow-600 rounded-full"></span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-12 flex items-center gap-2 text-xs text-gray-500 font-medium bg-white p-3 rounded-lg border border-gray-50">
                                        <Globe size={14} className="text-yellow-600" />
                                        Western European Time (GMT+0)
                                    </div>
                                </div>

                                {/* Time Section */}
                                <div className="p-8 bg-gray-50/50">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-10 min-h-[40px]">
                                        {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Select a date'}
                                    </h2>

                                    {selectedDate ? (
                                        <div className="space-y-3 h-[450px] overflow-y-auto pr-3 custom-scrollbar">
                                            {TIME_SLOTS.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`
                                                        w-full py-4 px-6 rounded-2xl border-2 transition-all font-bold text-sm text-center active:scale-95
                                                        ${selectedTime === time
                                                            ? 'border-blue-900 bg-blue-900 text-white shadow-lg'
                                                            : 'border-white bg-white text-blue-900 hover:border-blue-300 hover:bg-white shadow-sm'}
                                                    `}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-6 bg-white/50 rounded-3xl border border-dashed border-gray-200">
                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md text-gray-300">
                                                <CalendarIcon size={32} />
                                            </div>
                                            <p className="text-sm font-bold text-gray-500">Pick a day to see available slots</p>
                                        </div>
                                    )}

                                    {selectedTime && (
                                        <button
                                            onClick={handleContinue}
                                            className="mt-8 w-full bg-yellow-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-yellow-700 transition-all shadow-xl group"
                                        >
                                            Continue
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            /* Step 2: Personal Details */
                            <div className="p-10 animate-in fade-in slide-in-from-right-4 duration-500">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex items-center gap-2 text-gray-500 hover:text-blue-900 mb-12 font-semibold transition-colors group"
                                >
                                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                    Back to Scheduling
                                </button>

                                <div className="max-w-xl mx-auto">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter Details</h2>
                                    <p className="text-gray-500 mb-10">We'll send the meeting invite to the email address provided below.</p>

                                    <form className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                                                <input className="w-full bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl px-5 py-4 outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                                                <input className="w-full bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl px-5 py-4 outline-none transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                            <input type="email" className="w-full bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl px-5 py-4 outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                                            <input className="w-full bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl px-5 py-4 outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">How can we help?</label>
                                            <textarea rows={4} className="w-full bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl px-5 py-4 outline-none transition-all resize-none" />
                                        </div>

                                        <button className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-2xl mt-8">
                                            Confirm Meeting
                                        </button>
                                    </form>

                                    <p className="text-center text-xs text-gray-400 mt-10">
                                        By confirming, you agree to Lisbon Consultants Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <img src="/lasa-logo-2 - Copy.webp" alt="Lisbon Consultants" className="h-10 w-auto mx-auto mb-6 opacity-80" />
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Lisbon Consultants & Organizations. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
