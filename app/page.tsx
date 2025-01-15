'use client'
import React, { useEffect } from'react';
import { Welcome } from '@/app/components/Welcome';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Projects } from '@/app/components/Projects';
import Footer from '@/app/components/Footer';
import MusicPlayer from '@/app/components/MusicPlayer';
import Clock from '@/app/components/Clock';
import FPS from '@/app/components/FPS';

const Page = () => {
  useEffect(() => {
    document.title = 'PixelForge | Studio';
  }, []);
  return (
    <>
    <Welcome />
    <FPS />
    <Clock />
    <MusicPlayer />
    <About /> 
    <Projects />
    <Contact />
    <Footer />
    </>
  );
};

export default Page;  