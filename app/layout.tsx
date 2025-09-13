import type { Metadata } from 'next'
import './globals.css'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import { Cormorant_Garamond } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond', // key part for Tailwind use
});

export const metadata: Metadata = {
  title: 'JNPR Studio',
  description: 'JNPR is a digital product design & engineering studio based in Toronto.',
  openGraph: {
    images: ['https://jnpr.studio/og_img_08_28_2025.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cormorantGaramond.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
