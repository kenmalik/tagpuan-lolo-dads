import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';
import { Seaweed_Script } from 'next/font/google';

const seaweed = Seaweed_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-seaweed-script',
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Tagpuan + Lolo Dad's",
  description: 'Restaurant & hostel located in Sagada, Philippines!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${seaweed.variable} scroll-smooth`}>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
