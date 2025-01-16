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
    <footer className="bg-black py-10 px-4 md:px-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="contianer bg-gray-900 rounded-lg p-4">
        <p className="text-white">2025 PixelForge Studio</p>
        <p className="text-white mt-2">
          Powered by <a target="_blank" href="https://nextjs.org" className="text-blue-500 hover:text-blue-700">Next.js</a>
        </p>
        <p className="text-white mt-2">
          Designed by <a target="_blank" href="https://tailwindcss.com" className="text-blue-500 hover:text-blue-700">Tailwind CSS</a>
        </p>
        <p className="text-white mt-2">
          Hosted by <a target="_blank" href="https://netlify.com" className="text-blue-500 hover:text-blue-700">Netlify</a>
        </p>
      </div>
      <div className="md:col-span-2 lg:col-span-1 bg-gray-900 rounded-lg p-4">
        <p className="text-white mt-2">
          Would you like this page? <a target="_blank" href="https://github.com/PFStu/PFStu.github.io" className="text-blue-500 hover:text-blue-700">Star on GitHub</a>
        </p>
        <p className="text-white mt-2">
          Your User-Agent is {typeof window !== 'undefined' ? navigator.userAgent : 'Unknown'}
        </p>
      </div>
      <div className="lg:col-span-2 bg-gray-900 rounded-lg p-4">
        <p className="text-white mt-2">欢迎访问我们的网站！</p>
        <p className="text-white mt-2">如果您有任何问题或建议，请随时联系我们。</p>
      </div>
    </footer>
  );
};

export default Footer;
