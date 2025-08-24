import Header from "@/components/Header"
import HeroCarousel from "@/components/HeroCarousel"
import MeetTheFounder from "@/components/MeetTheFounder"
import TrustedBrands from "@/components/TrustedBrands"
import CallToAction from "@/components/CallToAction"
import LocationsShowcase from "@/components/LocationsShowcase"
import MissionStatement from "@/components/MissionStatement"
import FeaturedCampaigns from "@/components/FeaturedCampaigns"
import Footer from "@/components/Footer"
import NewsletterSubscription from "@/components/NewsletterSubscription"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      {/* <ScrollZoomLayout /> */}
      {/* <HeroSection /> */}
      <MeetTheFounder />
      <TrustedBrands />
      <CallToAction />
      <NewsletterSubscription />
      <LocationsShowcase />
      <MissionStatement />
      <FeaturedCampaigns />
      <Footer />
      {/* <CookieNotice /> */}
    </div>
  )
}
