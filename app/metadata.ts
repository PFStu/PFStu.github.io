import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelforge.studio"),
  title: {
    default: "PixelForge Studio | Creative Development",
    template: "%s | PixelForge Studio"
  },
  description: "Professional creative studio offering web development, design and digital solutions. Creative studio homepage with projects and contact information",
  keywords: ["web development", "design studio", "creative agency", "next.js"],
  authors: [{ name: "PixelForge Team" }],
  openGraph: {
    title: "PixelForge Studio",
    description: "Professional creative studio offering web development, design and digital solutions",
    url: "https://pixelforge.studio",
    siteName: "PixelForge Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelForge Studio",
    description: "Professional creative studio",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://pixelforge.studio",
  },
};
