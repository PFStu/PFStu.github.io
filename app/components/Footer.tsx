// components/Footer.tsx
import React, { useEffect, useState } from "react";
import { detectBrowser } from "../utils/detectBrower";

const Footer = () => {
  const [browserInfo, setBrowserInfo] = useState<{ name: string; version: string } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const { name = 'Unknown', version = 'Unknown' } = detectBrowser() || {};
    setBrowserInfo({ name, version });
  }, []);

  if (!isMounted) return null;

  return (
    <footer className="bg-black py-10 flex flex-col justify-between items-center">
      <div className="container mx-auto text-left">
        <p className="text-white">2025 PixelForge Studio</p>
        <p className="text-white">
          Powered by <a target="_blank" href="https://nextjs.org" className="text-blue-500 hover:text-blue-700">Next.js</a>
        </p>
        <p className="text-white">
          Designed by <a target="_blank" href="https://tailwindcss.com" className="text-blue-500 hover:text-blue-700">Tailwind CSS</a>
        </p>
        <p className="text-white">
          Hosted by <a target="_blank" href="https://netlify.com" className="text-blue-500 hover:text-blue-700">Netlify</a>
        </p>
        <p className="text-white">
          Would you like this page? <a target="_blank" href="https://github.com/PFStu/PFStu.github.io" className="text-blue-500 hover:text-blue-700">Star on GitHub</a>
        </p>
        <p className="text-white">Your User-Agent is {typeof window !== 'undefined' ? navigator.userAgent : 'Unknown'}</p>
        <p className="text-white">It looks like you are using {browserInfo?.name} {browserInfo?.version}</p>
      </div>
    </footer>
  );
};

export default Footer;
