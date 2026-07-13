import type { Metadata, Viewport } from "next";
import "./globals.css";

// NOTE: replace with the real production domain before deploying.
const siteUrl = "https://awanish-portfolio.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Awanish Mishra — Full-stack & IoT Engineer",
    template: "%s — Awanish Mishra",
  },
  description: "Portfolio of Awanish Mishra, a final-year B.Tech IoT student at MITS Gwalior building AI-powered applications, embedded systems, and scalable software.",
  metadataBase: new URL(siteUrl),
  keywords: ["Awanish Mishra", "IoT engineer", "full-stack developer", "React developer", "embedded systems", "MITS Gwalior", "portfolio"],
  authors: [{ name: "Awanish Mishra" }],
  creator: "Awanish Mishra",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Awanish Mishra — Full-stack & IoT Engineer",
    description: "AI applications, embedded systems, and product-minded engineering.",
    url: siteUrl,
    siteName: "Awanish Mishra",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awanish Mishra — Full-stack & IoT Engineer",
    description: "AI applications, embedded systems, and product-minded engineering.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0c",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Awanish Mishra",
  jobTitle: "Full-stack & IoT Engineer",
  url: siteUrl,
  email: "mailto:awanishmishra642@gmail.com",
  sameAs: [
    "https://github.com/awanishmishra642-commits",
    "https://www.linkedin.com/in/awanish-mishra-349506235",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Madhav Institute of Technology and Science, Gwalior",
  },
  address: { "@type": "PostalAddress", addressLocality: "Gwalior", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
