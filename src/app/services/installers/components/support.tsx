import React from 'react'
import Link from 'next/link'

const resources = [
  {
    title: 'Technical Documentation',
    description: 'Access detailed installation guides and product specifications',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: '24/7 Support Team',
    description: 'Get expert help whenever you need it',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Training Videos',
    description: 'Step-by-step installation and maintenance tutorials',
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
]

export default function Support(): React.JSX.Element {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Post-Installation Support You Can Rely On</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From detailed manuals to a 24/7 support team, we're here to ensure every installation 
              is a success. Access exclusive resources to enhance your expertise and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-600 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join our network of certified installers and grow your business with industry-leading 
              solar and energy storage solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 