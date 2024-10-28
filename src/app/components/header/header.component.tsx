'use client'

import { Search, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/blockstarlogo.png"
              className="w-10 h-10"
              alt="blockstarlogo"
              width={40}
              height={40}
            />
            <span className="font-semibold">DCA</span>
          </Link>
          <nav className={`lg:flex items-center gap-2 hidden ml-4`}>
            <ul className="flex gap-4 items-center font-semibold justify-center w-full lg:w-auto">
              <li className="hover:text-[#f26419] ">
                <Link href="/plan">Investment</Link>
              </li>
              <li className="hover:text-[#f26419]">
                <Link href="/learn">Learn</Link>
              </li>
              <li className="hover:text-[#f26419]">
                <Link href="/calculator">Calculator</Link>
              </li>
              <li className="hover:text-[#f26419]">
                <Link href="/challenges">Challenges</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex items-center space-x-4">
            {/* <div className="relative">
              <input
              className="w-64 bg-[#0a192f] border-[#f26419] text-white placeholder-gray-500 p-2 outline outline-[#f26419]"
              placeholder="Search"
              />
              <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
              />
              </div> */}
            <div className="flex items-center space-x-2">
              <img src="/img/star.png" className="w-10 h-9" alt="star" />
              <span className="font-semibold">10000</span>
            </div>
            {/* <button className="bg-[#f26419] hover:bg-[#f26419]/90 text-white px-4 py-2">
              Connect Wallet
            </button> */}
          </div>
        </div>
      </div>

      <div className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <nav
          className={`mt-4 flex items-center gap-2 ${
            isMenuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 items-start lg:items-center font-semibold">
            <li className="hover:text-[#f26419] w-full lg:w-auto">
              <Link href="/plan" className="block py-2">
                Investment
              </Link>
            </li>
            <li className="hover:text-[#f26419] w-full lg:w-auto">
              <Link href="/learn" className="block py-2">
                Learn
              </Link>
            </li>
            <li className="hover:text-[#f26419] w-full lg:w-auto">
              <Link href="/calculator" className="block py-2">
                Calculator
              </Link>
            </li>
            <li className="hover:text-[#f26419] w-full lg:w-auto">
              <Link href="/challenges" className="block py-2">
                Challenges
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative mb-4">
          <input
            className="w-full bg-[#0a192f] border-[#f26419] text-white placeholder-gray-500 p-2 outline outline-[#f26419]"
            placeholder="Search"
          />
          <Search
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/img/star.png" className="w-10 h-9" alt="star" />
            <span className="font-semibold">10000</span>
          </div>
          <button className="bg-[#f26419] hover:bg-[#f26419]/90 text-white px-4 py-2">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  )
}
