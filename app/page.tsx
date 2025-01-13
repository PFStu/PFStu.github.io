import React from'react';
import { Welcome } from '@/app/components/Welcome';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Projects } from '@/app/components/Projects';
import MusicPlayer from '@/app/components/MusicPlayer';

const Page = () => {
  return (
    <>
    <Welcome />
    <MusicPlayer />
    <About /> 
    <Projects />
    <Contact />
    </>
  );
};

export default Page;  