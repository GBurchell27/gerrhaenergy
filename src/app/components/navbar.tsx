'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="GerrhaEnergy Logo"
                  width={150}
                  height={40}
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/for-homes" className="text-gray-700 hover:text-green-600">
              For Homes
            </Link>
            <Link href="/for-businesses" className="text-gray-700 hover:text-green-600">
              For Businesses
            </Link>
            <Link href="/partner" className="text-gray-700 hover:text-green-600">
              Partner
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="/contact"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
