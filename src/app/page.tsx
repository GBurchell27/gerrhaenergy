import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import ServiceSection from './components/ServiceSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import MarketInsightsSection from './components/MarketInsightsSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import MeetTheTeamSection from './components/MeetTheTeamSection'
import ContactUs from './components/ContactUs'
import CTA from './components/CTA'
import FadeInSection from './components/FadeInSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        
        <FadeInSection>
          <ProductSection />
        </FadeInSection>
        <FadeInSection>
          <ServiceSection />
        </FadeInSection>
        <FadeInSection>
          <WhyChooseUsSection />
        </FadeInSection>
        <FadeInSection>
          <MarketInsightsSection />
        </FadeInSection>
        <FadeInSection>
          <CaseStudiesSection />
        </FadeInSection>
        <FadeInSection>
          <MeetTheTeamSection />
        </FadeInSection>
        <FadeInSection>
          <ContactUs />
        </FadeInSection>
        <FadeInSection>
          <CTA />
        </FadeInSection>
      </main>
    </div>
  )
}
