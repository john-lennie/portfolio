import type { Metadata } from 'next'
import './globals.css'

import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro', // key part for Tailwind use
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JNPR Studio',
  description: 'JNPR is a digital design and engineering studio based in Toronto.',
  openGraph: {
    images: ['https://jnpr.studio/og_img_08_07_2025.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <body>{children}</body>
    </html>
  )
}
