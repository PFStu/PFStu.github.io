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

export default Page;