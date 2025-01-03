const marketStats = [
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
]

const years = ['2023', '2024', '2025', '2026']

export default function MarketInsightsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Understanding the Energy Landscape</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Market Statistics */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">EU Energy Market Statistics</h3>
              
              {marketStats.map((stat, index) => (
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
                    {years.map((year) => (
                      <span key={year}>{year}</span>
                    ))}
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
  )
} 