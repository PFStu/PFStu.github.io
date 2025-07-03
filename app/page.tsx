'use client'
import React from 'react';
import { Welcome } from '@/app/components/Welcome';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Projects } from '@/app/components/Projects';
import Footer from '@/app/components/Footer';
import Clock from '@/app/components/Clock';

const Page = () => {
  return (
    <>
    <Welcome />
    <Clock />

    <About /> 
    <Projects />
    <Contact />
    <Footer />
    </>
  );
};

const RedstoneLamp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4 font-minecraft">红石灯</h1>
        <p className="text-gray-300">这是红石电路的最后一步</p>
      </div>
    </div>
  );
};

export default Page;
export { RedstoneLamp };