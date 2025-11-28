import './globals.css';
import type { Metadata } from 'next';
import { Sora, Outfit } from 'next/font/google';

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gaurav Bhatia - Backend Developer & AI Automation Architect',
  description: 'Premium portfolio of Gaurav Bhatia, a Backend Developer and AI Automation Architect with 5+ years of experience specializing in scalable backend systems and AI-powered solutions.',
  keywords: 'Gaurav Bhatia, Backend Developer, AI Automation Architect, Laravel, Node.js, PHP, MySQL, Dubai, UAE, Technioz',
  authors: [{ name: 'Gaurav Bhatia' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Gaurav Bhatia - Backend Developer & AI Automation Architect',
    description: 'Premium portfolio showcasing backend development, AI automation, and scalable system architecture expertise',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Bhatia - Backend Developer & AI Automation Architect',
    description: 'Premium portfolio showcasing backend development, AI automation, and scalable system architecture expertise',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}