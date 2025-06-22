'use client'
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.variable} antialiased`}>
        <ThemeProvider>
          <div className="fixed inset-0 overflow-hidden bg-black">
            <div className="absolute inset-0 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
