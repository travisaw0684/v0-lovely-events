import Header from "@/components/Header"
import HeroCarousel from "@/components/HeroCarousel"
import MassagePromo from "@/components/MassagePromo"
import LuxuryEventsGallery from "@/components/LuxuryEventsGallery"
import ServicesSection from "@/components/ServicesSection"
import MeetTheFounder from "@/components/MeetTheFounder"
import LocationsShowcase from "@/components/LocationsShowcase"
import MissionStatement from "@/components/MissionStatement"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      {/* <ScrollZoomLayout /> */}
      {/* <HeroSection /> */}
      <MeetTheFounder />
      {/*<MassagePromo />*/}
      <LuxuryEventsGallery />
      <ServicesSection />
      {/*<MeetTheFounder /> */}
      {/*<FeaturedCampaigns /> */}
      <LocationsShowcase />
      <MissionStatement />
      <Footer />
      {/* <CookieNotice /> */}
    </div>
  )
}
