'use client'
import React from 'react';
import { useState, MouseEvent } from 'react';
import { Header } from './Header';
import Image from 'next/image';

export const Welcome = () => {
    const [bgPosition, setBgPosition] = useState('50% 50%');

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        const { offsetWidth, offsetHeight } = event.currentTarget;
        const x = (clientX / offsetWidth) * 100;
        const y = (clientY / offsetHeight) * 100;
        setBgPosition(`${(x * 0.1).toFixed(2)}% ${(y * 0.1).toFixed(2)}%`);
    };

    return (
        <>
        <Header />
        <div 
            className="flex flex-col items-center justify-center min-h-screen bg" 
            style={{ backgroundPosition: bgPosition }}
            onMouseMove={handleMouseMove}
        >
            <div className="bf rounded-full w-32 h-32 my-5">
                <Image src="/logo.png" alt="Logo" className="w-28 h-28 mx-2 my-2"/>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full">
                <div className="hover:backdrop-filter hover:backdrop-blur-lg transition-all duration-300 container py-12 mx-auto shadow-2xl bg-[#ffffff33] backdrop-filter backdrop-blur-sm rounded-3xl z-index-1">
                    <h1 className="animate-fadeIn text-center text-4xl font-bold text-black">Welcome!</h1>
                    <h1 className="animate-fadeIn text-4xl font-bold text-black text-center">PixelForge Studio Website</h1>
                </div>
            </div>
        </div>
        </>
    );
};