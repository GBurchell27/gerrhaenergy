import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Solar panels"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Power Your Home with Advanced Energy Solutions
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
