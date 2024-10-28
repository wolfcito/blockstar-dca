import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
          <header className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <nav>
                <ul className="flex gap-4 items-center font-semibold">
                  <li className="flex items-center gap-2 hover:text-[#f26419]">
                    <Link href="/" className="flex items-center gap-2 pr-4">
                      <Image
                        src="/img/blockstarlogo.png"
                        className="w-10 h-10"
                        alt="blockstarlogo"
                      />
                      DCA
                    </Link>
                  </li>
                  <li className="hover:text-[#f26419]">
                    <Link href="/plan" className="flex items-center gap-2 pr-4">
                      Investiment
                    </Link>
                  </li>
                  <li className="hover:text-[#f26419]">
                    <Link
                      href="/learn"
                      className="flex items-center gap-2 pr-4"
                    >
                      Learn
                    </Link>
                  </li>
                  <li className="hover:text-[#f26419]">
                    <Link
                      href="/calculator"
                      className="flex items-center gap-2 pr-4"
                    >
                      Calculator
                    </Link>
                  </li>
                  <li className="hover:text-[#f26419]">
                    <Link
                      href="/challenges"
                      className="flex items-center gap-2 pr-4"
                    >
                      Challenges
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  className="w-64 bg-[#0a192f] border-[#f26419] text-white placeholder-gray-500 p-2 outline outline-[#f26419]"
                  placeholder="Search"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </div>
              <div className="flex items-center space-x-2">
                <img src="/img/star.png" className="w-10 h-9" alt="star" />

                <span className="font-semibold">10000</span>
              </div>
              {/* <button className="bg-[#f26419] hover:bg-[#f26419]/90 text-white px-4 py-2">
            Connect Wallet
          </button> */}
            </div>
          </header>
          <main className="container mx-auto mt-12 px-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
