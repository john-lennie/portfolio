import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'

import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro', // key part for Tailwind use
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JNPR Studio',
  description: 'JNPR is a digital design and engineering studio based in Toronto.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <Head>
        {/* Open Graph Protocol (iMessage, Facebook, LinkedIn) */}
        <meta property="og:image" content="https://jnpr.studio/og_image.png" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
