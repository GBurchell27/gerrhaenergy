import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />

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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Services List */}
              <div className="space-y-8">
                {[
                  {
                    title: 'Professional Installation',
                    description: 'Our certified technicians ensure proper installation of your solar panels and energy systems, following all safety protocols and industry standards.',
                    icon: (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    )
                  },
                  {
                    title: 'System Design & Planning',
                    description: 'Custom-designed solutions based on your energy needs, roof configuration, and local climate conditions.',
                    icon: (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Training & Education',
                    description: 'Comprehensive training on system operation, monitoring, and basic maintenance for optimal performance.',
                    icon: (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )
                  },
                  {
                    title: '24/7 After-Sales Support',
                    description: 'Dedicated support team available round-the-clock for maintenance, troubleshooting, and system optimization.',
                    icon: (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )
                  }
                ].map((service, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right column in Services section */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6">Service Coverage</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Our services cover the entire Brussels metropolitan area and surrounding regions. We provide:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Initial consultation and site assessment
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Custom system design and planning
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Professional installation and setup
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Ongoing maintenance and support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50 relative">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(to right, #9ca3af 1px, transparent 1px)',
                   backgroundSize: '4rem 4rem'
                 }} 
            />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Efficiency',
                  description: 'Streamlined supply chains for faster installations.',
                  icon: (
                    <svg className="w-12 h-12 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Design',
                  description: 'Aesthetic solar panels tailored to blend with your home.',
                  icon: (
                    <svg className="w-12 h-12 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  )
                },
                {
                  title: 'Energy Independence',
                  description: 'Self-sufficient energy systems with PV and BESS.',
                  icon: (
                    <svg className="w-12 h-12 mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
              ].map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Understanding the Energy Landscape</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Market Statistics */}
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold mb-6">EU Energy Market Statistics</h3>
                  
                  {[
                    {
                      value: '42%',
                      label: 'Growth in EU Solar Installations',
                      detail: 'Year-over-year increase in residential solar adoption'
                    },
                    {
                      value: '15GWh',
                      label: 'Battery Storage Capacity',
                      detail: 'Total installed BESS capacity across EU'
                    },
                    {
                      value: '€2.8B',
                      label: 'Market Value',
                      detail: 'Expected market size by 2025'
                    }
                  ].map((stat, index) => (
                    <div key={index} className="border-l-4 border-green-600 pl-4">
                      <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                      <div className="font-semibold">{stat.label}</div>
                      <div className="text-gray-600 text-sm">{stat.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Market Potential Chart */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">Market Growth Potential</h3>
                  <div className="aspect-video relative bg-white rounded-lg p-4 shadow-sm">
                    {/* Chart Visualization */}
                    <div className="absolute bottom-4 left-4 right-4 top-4">
                      {[1, 2, 3, 4].map((_, index) => (
                        <div
                          key={index}
                          className="absolute bottom-0 bg-green-600"
                          style={{
                            left: `${index * 25}%`,
                            width: '20%',
                            height: `${(index + 1) * 20}%`,
                            opacity: 0.7 + (index * 0.1)
                          }}
                        />
                      ))}
                      {/* Chart Labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-600 -mb-6">
                        <span>2023</span>
                        <span>2024</span>
                        <span>2025</span>
                        <span>2026</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-sm text-gray-600">
                    <p>Projected growth in residential solar and BESS installations across EU markets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Our Impact</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Real results from real clients. Discover how our solutions are making a difference.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Residential Villa in Brussels",
                    description: "Complete CNES system installation with solar panels and battery storage",
                    image: "/case-study-1.jpg", // You'll need to add these images
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
                    image: "/case-study-2.jpg", // You'll need to add these images
                    metrics: [
                      { label: "Energy Saved", value: "72%", detail: "reduction in common area costs" },
                      { label: "CO2 Reduced", value: "28.3t", detail: "annual carbon reduction" },
                      { label: "ROI Period", value: "5.1 yrs", detail: "expected payback time" }
                    ],
                    quote: "The installation process was smooth, and the results have been remarkable. Our residents are very satisfied.",
                    client: "Park View Residences"
                  }
                ].map((study, index) => (
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

        {/* Meet the Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Meet the experts dedicated to bringing sustainable energy solutions to your doorstep.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Head of Operations",
                    bio: "With over 15 years in renewable energy, Sarah leads our installation and maintenance teams with precision and excellence.",
                    image: "/team/sarah.jpg" // You'll need to add these images
                  },
                  {
                    name: "Marc Dubois",
                    role: "Technical Director",
                    bio: "A certified engineer with expertise in BESS integration and smart grid technologies, Marc ensures optimal system design for every project.",
                    image: "/team/marc.jpg"
                  },
                  {
                    name: "Elena Martinez",
                    role: "Customer Success Manager",
                    bio: "Elena's dedication to client satisfaction drives our commitment to providing outstanding service and support.",
                    image: "/team/elena.jpg"
                  },
                  {
                    name: "Thomas Weber",
                    role: "Lead System Designer",
                    bio: "Combining technical expertise with aesthetic sensibility, Thomas creates solar solutions that complement your home's architecture.",
                    image: "/team/thomas.jpg"
                  },
                  {
                    name: "Lisa Van den Berg",
                    role: "Sustainability Consultant",
                    bio: "Lisa helps clients maximize their environmental impact while ensuring optimal return on investment.",
                    image: "/team/lisa.jpg"
                  },
                  {
                    name: "Michael Chen",
                    role: "Installation Team Lead",
                    bio: "Leading our installation crews, Michael ensures every project is completed to the highest safety and quality standards.",
                    image: "/team/michael.jpg"
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <div className="text-green-600 font-medium mb-3">{member.role}</div>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                      
                      {/* Social Links - Optional */}
                      <div className="mt-4 flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-center mb-12">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    Send Message
                    <svg 
                      className="ml-2 h-4 w-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
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
