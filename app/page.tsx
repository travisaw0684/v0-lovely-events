import Header from "@/components/Header"
import HeroCarousel from "@/components/HeroCarousel"
import MeetTheFounder from "@/components/MeetTheFounder"
import TrustedBrands from "@/components/TrustedBrands"
import CallToAction from "@/components/CallToAction"
import TestimonialsSection from "@/components/TestimonialsSection"
import NewsletterSubscription from "@/components/NewsletterSubscription"
import LocationsShowcase from "@/components/LocationsShowcase"
import MissionStatement from "@/components/MissionStatement"
import FeaturedCampaigns from "@/components/FeaturedCampaigns"
import Footer from "@/components/Footer"
import PreFooterCTA from "@/components/PreFooterCTA"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <MeetTheFounder />
      <TrustedBrands />
      <CallToAction />
      <TestimonialsSection />
      <NewsletterSubscription />
      <LocationsShowcase />
      <MissionStatement />
      <FeaturedCampaigns />
      <div className="relative">
        <PreFooterCTA />
        <Footer />
      </div>
    </div>
  )
}
