import Image from 'next/image'

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50">
          {/* Add hero image here */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Craig Burchell 博克睿</h1>
            <p className="text-xl">Global Business Leader & Digital Trade Expert</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">25+ Years of Global Experience</h2>
              <p className="text-lg text-gray-700">
                Craig has over 25 years' global experience in law, policy & business, most recently as Senior Vice President at Huawei HQ, Shenzhen, China. His journey in China began in 1996 with Philips Electronics, marking the start of an illustrious career spanning Europe, Asia & USA.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">Contact:</p>
                <p className="text-gray-600">Email: c.burchell@gerrhaglobal.com</p>
                <p className="text-gray-600">WeChat: CraigB888</p>
              </div>
            </div>
            <div className="relative h-[400px]">
              {/* Add professional headshot image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Global Leadership Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Philips Electronics (NL)', 'Huawei (China)', 'Samsung (S.Korea)', 'Xerox (USA)', 'Clifford Chance LLP (UK)'].map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{company}</h3>
                <div className="h-[200px] relative mb-4">
                  {/* Add company logo/image here */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Firsts & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pioneering Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">"The Costs of Decoupling"</h3>
                <p className="text-gray-700">A global study by The Economist EIU, 2021, informing over 100 governments worldwide.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">"The G7 Business Case for Digital Trade Documents"</h3>
                <p className="text-gray-700">Revealed a USD900 Billion opportunity and influenced G7 Leaders to commit to new digital laws.</p>
              </div>
            </div>
            <div className="relative h-[600px]">
              {/* Add achievement-related image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Global Impact & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-[300px] relative">
                {/* Add image of speaking engagement */}
              </div>
              <h3 className="text-xl font-semibold">International Speaker</h3>
              <p className="text-gray-700">Regular speaker at global forums and conferences</p>
            </div>
            <div className="space-y-4">
              <div className="h-[300px] relative">
                {/* Add image of policy work */}
              </div>
              <h3 className="text-xl font-semibold">Policy Architect</h3>
              <p className="text-gray-700">Shaping digital trade policies worldwide</p>
            </div>
            <div className="space-y-4">
              <div className="h-[300px] relative">
                {/* Add image of cultural engagement */}
              </div>
              <h3 className="text-xl font-semibold">Cultural Bridge</h3>
              <p className="text-gray-700">Fluent in English, French, Dutch and conversational Mandarin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              {/* Add Everest Base Camp image here */}
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Personal Journey</h2>
              <p className="text-lg text-gray-700">
                Craig's passion extends beyond business to European and Chinese history & culture. He has explored Tibet, Nepal, the Himalaya, Pamirs, and Karakoram, including reaching Mt Everest Base Camp at 5320 metres.
              </p>
              <p className="text-lg text-gray-700">
                Married with three entrepreneurial children, Craig continues to travel between Brussels and Shenzhen, embodying his motto: "No mountain too high."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
