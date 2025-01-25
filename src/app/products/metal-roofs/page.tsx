import Image from 'next/image'
import HeroSection from '@/app/components/HeroSection'
import CTA from '@/app/components/CTA'

export default function MetalRoofsPage() {
  return (
    <main className="min-h-screen">
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Metal Roofing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Long-Lasting Durability</h3>
              <p className="text-gray-600">
                Our metal roofs can last 40-70 years with proper maintenance, offering superior protection against harsh weather conditions.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Energy Efficient</h3>
              <p className="text-gray-600">
                Reflect solar radiation and reduce cooling costs by up to 25%, making your home more energy-efficient.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Environmentally Friendly</h3>
              <p className="text-gray-600">
                100% recyclable materials and reduced environmental impact compared to traditional roofing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Metal Roofing Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/standing-seam-roof.jpg"
                alt="Standing seam metal roof"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h3 className="text-white text-xl font-semibold">Standing Seam</h3>
                <p className="text-white">Premium choice for modern homes</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/metal-shingle-roof.jpg"
                alt="Metal shingle roof"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <h3 className="text-white text-xl font-semibold">Metal Shingles</h3>
                <p className="text-white">Traditional look with modern benefits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Metal Roofing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✓ Fire Resistant</h3>
              <p className="text-gray-600">Class A fire rating for maximum safety</p>
              
              <h3 className="text-xl font-semibold">✓ Weather Resistant</h3>
              <p className="text-gray-600">Withstands high winds, heavy rain, and snow</p>
              
              <h3 className="text-xl font-semibold">✓ Low Maintenance</h3>
              <p className="text-gray-600">Minimal upkeep required over its lifetime</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✓ Increased Home Value</h3>
              <p className="text-gray-600">Boost your property's resale value</p>
              
              <h3 className="text-xl font-semibold">✓ Energy Savings</h3>
              <p className="text-gray-600">Reduce cooling costs significantly</p>
              
              <h3 className="text-xl font-semibold">✓ Warranty Coverage</h3>
              <p className="text-gray-600">Extended warranties up to 50 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Upgrade Your Roof?"
        description="Get a free consultation and estimate for your metal roofing project"
        buttonText="Get Free Estimate"
        buttonLink="/contact"
      />
    </main>
  )
}
