import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
