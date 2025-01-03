import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const products = [
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
]

export default function ProductSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
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
  )
} 