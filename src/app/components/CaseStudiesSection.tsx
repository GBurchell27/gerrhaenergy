import Image from 'next/image'

const caseStudies = [
  {
    title: "Residential Villa in Brussels",
    description: "Complete CNES system installation with solar panels and battery storage",
    image: "/case-study-1.jpg",
    metrics: [
      { label: "Energy Saved", value: "85%", detail: "reduction in energy bills" },
      { label: "CO2 Reduced", value: "12.5t", detail: "annual carbon reduction" },
      { label: "ROI Period", value: "4.2 yrs", detail: "expected payback time" }
    ],
    quote: "The system has exceeded our expectations. Our energy bills have dropped dramatically, and we love being energy independent.",
    client: "Van der Meer Family"
  },
  {
    title: "Modern Apartment Complex",
    description: "Multi-unit solar installation with smart monitoring",
    image: "/case-study-2.jpg",
    metrics: [
      { label: "Energy Saved", value: "72%", detail: "reduction in common area costs" },
      { label: "CO2 Reduced", value: "28.3t", detail: "annual carbon reduction" },
      { label: "ROI Period", value: "5.1 yrs", detail: "expected payback time" }
    ],
    quote: "The installation process was smooth, and the results have been remarkable. Our residents are very satisfied.",
    client: "Park View Residences"
  }
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Impact</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real results from real clients. Discover how our solutions are making a difference.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                        <div className="text-sm font-medium">{metric.label}</div>
                        <div className="text-xs text-gray-500">{metric.detail}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600 mb-2">
                    "{study.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-500">- {study.client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 