'use client'
import React from 'react';
import { useState } from 'react';
import { FaHome, FaUser, FaFolder, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <style>{`
                .hover-effect:hover {
                    color: gray;
                }
                .slide-in {
                    max-height: 100vh;
                    overflow: visible;
                    transition: max-height 300ms ease-in-out;
                }
                .slide-out {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 300ms ease-in-out;
                }
                .icon-with-label:hover .label {
                    display: inline;
                }
                .label {
                    display: none;
                    margin-left: 8px;
                }
            `}</style>
            <header className="py-4 px-8 backdrop-filter backdrop-blur-lg mx-10 my-4 rounded-lg bg-gray-800 absolute top-0 left-0 right-0 z-50 bg-opacity-25">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
                        <h1 className="text-2xl font-bold">PixelForge Studio</h1>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-gray-300 transition duration-300 hover-effect flex items-center icon-with-label">
                            <FaHome className="w-6 h-6" />
                            <span className="label">Home</span>
                        </a>
                        <a href="#about" className="hover:text-gray-300 transition duration-300 hover-effect flex items-center icon-with-label">
                            <FaUser className="w-6 h-6" />
                            <span className="label">About</span>
                        </a>
                        <a href="#projects" className="hover:text-gray-300 transition duration-300 hover-effect flex items-center icon-with-label">
                            <FaFolder className="w-6 h-6" />
                            <span className="label">Projects</span>
                        </a>
                        <a href="#contact" className="hover:text-gray-300 transition duration-300 hover-effect flex items-center icon-with-label">
                            <FaEnvelope className="w-6 h-6" />
                            <span className="label">Contact</span>
                        </a>
                    </nav>
                    <button 
                        onClick={toggleMenu} 
                        className="md:hidden focus:outline-none focus:text-gray-300"
                    >
                        <svg 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {isMenuOpen ? (
                    <nav className="md:hidden mt-4 space-y-4 text-center bg-gray-800 slide-in">
                        <a href="#home" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaHome className="w-6 h-6" />
                            <span className="label">Home</span>
                        </a>
                        <a href="#about" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaUser className="w-6 h-6" />
                            <span className="label">About</span>
                        </a>
                        <a href="#projects" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaFolder className="w-6 h-6" />
                            <span className="label">Projects</span>
                        </a>
                        <a href="#contact" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaEnvelope className="w-6 h-6" />
                            <span className="label">Contact</span>
                        </a>
                    </nav>
                ) : (
                    <nav className="md:hidden mt-4 space-y-4 text-center bg-gray-800 slide-out">
                        <a href="#home" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaHome className="w-6 h-6" />
                            <span className="label">Home</span>
                        </a>
                        <a href="#about" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaUser className="w-6 h-6" />
                            <span className="label">About</span>
                        </a>
                        <a href="#projects" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaFolder className="w-6 h-6" />
                            <span className="label">Projects</span>
                        </a>
                        <a href="#contact" className="block hover:text-gray-300 transition-colors duration-300 hover-effect flex items-center icon-with-label">
                            <FaEnvelope className="w-6 h-6" />
                            <span className="label">Contact</span>
                        </a>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;
