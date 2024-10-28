import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import { Header } from './components/header'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'BlockStar Learning DCA',
  description: 'BlockStar Learning DCA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#0a192f] text-white">
          <Header />
          <main className="container mx-auto mt-12 px-2 pb-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
