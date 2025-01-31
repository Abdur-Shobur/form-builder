import type { Metadata } from 'next';
import { Inter as Geist, Poppins as Geist_Mono } from 'next/font/google';
import './globals.css';
import { RootProviders } from '../provider';
import { Header } from '@components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Form Builder',
  description: 'Form Builder with Ant Design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
