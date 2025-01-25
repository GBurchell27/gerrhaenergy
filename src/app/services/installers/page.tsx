import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InstallerBenefits from './components/installer-benefits'
import InstallationProcess from './components/installation-process'
import ProductHighlights from './components/product-highlights'
import AdvancedTechnology from './components/advanced-technology'
import Support from './components/support'

const benefits = [
  {
    title: 'Comprehensive Training',
    description: 'Access to detailed training programs and certification courses.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Technical Support',
    description: 'Direct access to our technical team for installation guidance.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Quality Products',
    description: 'Access to premium solar and energy storage products.',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  }
]

export default function Page(): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gray-900">
          <Image
            src="/installers-hero.jpg"
            alt="Professional Solar Installation"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Install with Confidence
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  Efficient, Reliable, and Installer-Friendly Energy Solutions
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="#learn-more"
                    className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InstallationProcess />
        <ProductHighlights />
        <AdvancedTechnology />
        <InstallerBenefits />
        <Support />
      </main>
    </div>
  )
} 