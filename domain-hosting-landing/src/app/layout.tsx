import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DomainHub - Premium Domain Hosting Services',
  description:
    'Fast, reliable, and secure domain hosting services for businesses and individuals. Get started today with 24/7 support and a 99.9% uptime guarantee.',
  keywords:
    'domain hosting, web hosting, domain registration, domain management, SSL certificates, website hosting',
  authors: [{ name: 'DomainHub Team' }],
  openGraph: {
    title: 'DomainHub - Premium Domain Hosting Services',
    description:
      'Fast, reliable, and secure domain hosting services for businesses and individuals.',
    url: 'https://domainhub.com',
    siteName: 'DomainHub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DomainHub - Premium Domain Hosting Services',
    description:
      'Fast, reliable, and secure domain hosting services for businesses and individuals.',
    creator: '@domainhub',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
