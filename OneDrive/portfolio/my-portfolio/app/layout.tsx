import type { Metadata, Viewport } from "next";
import "./globals.css";

const fallbackSiteUrl = "https://example.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chinmayi B | AI & Software Portfolio",
    template: "%s | Chinmayi B",
  },
  description:
    "Computer Science student building AI-driven systems, scalable software, and production-aware solutions with measurable impact.",
  applicationName: "Chinmayi Portfolio",
  keywords: [
    "Chinmayi B",
    "Portfolio",
    "Machine Learning",
    "AI Engineer",
    "Software Development",
    "Data Drift Detection",
    "Deepfake Detection",
    "System Design",
    "FastAPI",
    "React",
  ],
  authors: [{ name: "Chinmayi B" }],
  creator: "Chinmayi B",
  publisher: "Chinmayi B",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Chinmayi B Portfolio",
    title: "Chinmayi B | AI & Software Portfolio",
    description:
      "AI-driven systems, ML projects, and scalable software built for real-world impact.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chinmayi B Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinmayi B | AI & Software Portfolio",
    description:
      "Explore projects in AI, ML, and scalable backend systems by Chinmayi B.",
    images: ["/twitter-image"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chinmayi B",
    url: siteUrl,
    email: "mailto:chinmayibellippadi@gmail.com",
    sameAs: ["https://github.com/chinmayiii", "https://www.linkedin.com/in/chinmayi-b"],
    jobTitle: "Computer Science Student",
    knowsAbout: ["Machine Learning", "System Design", "Software Development", "Computer Vision"],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
