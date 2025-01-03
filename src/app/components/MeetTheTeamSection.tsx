import Image from 'next/image'

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Head of Operations",
    bio: "With over 15 years in renewable energy, Sarah leads our installation and maintenance teams with precision and excellence.",
    image: "/team/sarah.jpg"
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
]

export default function MeetTheTeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet the experts dedicated to bringing sustainable energy solutions to your doorstep.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
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
  )
} 