'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

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
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-green-600 flex items-center"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isProductsOpen && (
                <div
                  className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link href="/products/solar-panels" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
                    Solar Panels
                  </Link>
                  <Link href="/products/metal-roofs" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
                    Stone-Coated Metal Roofs
                  </Link>
                  <Link href="/products/energy-systems" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
                    Complete New Energy Systems
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-green-600 flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link href="/services/installation" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
                    Installation
                  </Link>
                  <Link href="/services/training" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
                    Training
                  </Link>
                  <Link href="/services/support" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
                    After-Sales Support
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-green-600">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600">
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="/quote"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
