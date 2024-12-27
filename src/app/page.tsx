import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Products Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Solar Panels',
                  description: 'High-efficiency solar panels for maximum energy production',
                },
                {
                  title: 'Stone-Coated Metal Roofs',
                  description: 'Durable and aesthetic roofing solutions',
                },
                {
                  title: 'Complete Energy Systems',
                  description: 'Integrated solutions with solar and storage',
                },
              ].map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    href={`/products/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-green-600 hover:text-green-700 inline-flex items-center"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-8 text-lg">
                Contact us today for a free consultation and quote for your energy needs.
              </p>
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-md inline-block hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
