'use client'
import React from 'react';
import Languages from './Languages';

export const About: React.FC = () => {
    return (
        <section className="bg-gray-100 py-16 items-center flex flex-col" id="about">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 mx-7">
                    <img src="/about.png" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 flex flex-col items-start space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">关于我们</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        我们是一群热爱编程，热爱创造的学生组成的团队，PixelForgeStudio，致力于开发各种新鲜，实用的项目
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        我们提供各种创意作品，凝聚了大量的心血和创意，力求完美呈现。
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        在 PixelForge Studio，我们重视每一个细节，从布局到UI，力求达到最佳效果。我们相信，只有通过不断的努力和创新，才能满足现在日益变化的需求。
                    </p>
                </div>
            </div>
            <Languages />
        </section>
    );
};
