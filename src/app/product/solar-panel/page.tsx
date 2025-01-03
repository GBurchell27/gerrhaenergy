import Image from 'next/image'
import Link from 'next/link'

export default function SolarPanelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gray-900">
          <Image
            src="/solar-panel-hero.jpg" // You'll need to add this image
            alt="Solar Panel Installation"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Residential Villa Complete (RVC) Solar Systems
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Complete New Energy Systems for self-sufficient, sustainable living
                </p>
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-md inline-block hover:bg-green-700 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your System Size</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  size: 'Small',
                  ideal: 'Perfect for smaller villas',
                  capacity: '5-7 kW system',
                  features: [
                    'Solar PV Array',
                    'Battery Storage System',
                    'Energy Management System',
                    'Smart Monitoring',
                  ]
                },
                {
                  size: 'Medium',
                  ideal: 'Ideal for average-sized homes',
                  capacity: '8-10 kW system',
                  features: [
                    'Enhanced Solar PV Array',
                    'Expanded Battery Storage',
                    'Advanced EMS',
                    'Smart Monitoring',
                    'Optional T-Pump Integration'
                  ]
                },
                {
                  size: 'Large',
                  ideal: 'Designed for larger residences',
                  capacity: '11-15 kW system',
                  features: [
                    'Maximum Solar PV Array',
                    'Premium Battery Storage',
                    'Premium EMS',
                    'Advanced Monitoring',
                    'Optional T-Pump Integration',
                    'Optional Airco Integration'
                  ]
                }
              ].map((system, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-2">{system.size}</h3>
                  <p className="text-gray-600 mb-4">{system.ideal}</p>
                  <div className="text-green-600 font-semibold mb-4">{system.capacity}</div>
                  <ul className="space-y-2 mb-6">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our CNES Solution?</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Energy Self-Sufficiency</h3>
                    <p className="text-gray-600">Complete independence from traditional power grids with our integrated PV and BESS solutions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Attractive ROI</h3>
                    <p className="text-gray-600">Quick return on investment through reduced energy costs and efficient system design.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                    <p className="text-gray-600">Expert installation by certified technicians with comprehensive after-sales support.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">System Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    High-efficiency PV panels
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced Battery Energy Storage System (BESS)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Smart Energy Management System
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Optional T-Pump and Airco integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Energy Future?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our CNES solutions can benefit your home.
            </p>
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-md inline-block hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
