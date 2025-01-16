'use client'
import React from 'react';
import { FaSkype } from 'react-icons/fa';

export const Contact: React.FC = () => {
    return (
        <section className="bg-gray-800 text-white py-16" id='contact'>
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我们</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        我们很高兴为您提供帮助和支持。请通过以下方式与我们联系：
                    </p>
                </div>
                <div className="md:w-1/2 flex flex-col items-start space-y-6">
                    <div className="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A1 1 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"/></svg>
                        <a href="mailto:ch_bow@126.com" className="text-lg font-semibold hover:text-gray-300 transition duration-300">
                            ch_bow@126.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                        <a href="https://github.com/PFStu/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-gray-300 transition duration-300">
                            GitHub
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        
                        <FaSkype className="text-lg font-semibold hover:text-gray-300 transition duration-300 w-8 h-8"/>
                        <a href="https://join.skype.com/qVWyvjpuOYeG" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-gray-300 transition duration-300">
                            Skype
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
