import type { Metadata } from 'next'
import './globals.css'

import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro', // key part for Tailwind use
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JNPR',
  description: 'JNPR is a design and development studio based in Toronto.'
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
