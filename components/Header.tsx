"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setMobileMenuOpen(false)
        setServicesDropdownOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold tracking-wider">
            <img
              src="/images/design-mode/fulllogo_transparent_nobuffer%281%29.png"
              alt="Lovely Events Logo"
              className="w-[4rem] h-[4rem]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
              Home
            </Link>
            <Link href="/promotions" className="text-white hover:text-gray-300 transition-colors duration-300">
              Current Promotions
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-white hover:text-gray-300 transition-colors duration-500 flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in">
                  <Link
                    href="/services/sporting-events"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Sporting Event Planning
                  </Link>
                  <Link
                    href="/services/balloon-decor"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Balloon Decor
                  </Link>
                  <Link
                    href="/services/corporate-milestones"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Corporate Milestones
                  </Link>
                  <Link
                    href="/services/employee-recognition"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Employee Recognition Dinners
                  </Link>
                  <Link
                    href="/services/corporate-events"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Corporate Event Planning
                  </Link>
                  <Link
                    href="/services/business-experience"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Business Experience Event Planner
                  </Link>
                  <Link
                    href="/services/curated-weddings"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Curated Wedding Experiences With Style & Intention
                  </Link>
                  <Link
                    href="/services/wedding-officiant"
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-[#ba3364] transition-colors duration-200"
                  >
                    Personalized Wedding Officiant Services
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-story" className="text-white hover:text-gray-300 transition-colors duration-300">
              Our Story
            </Link>
            <Link href="/shop" className="text-white hover:text-gray-300 transition-colors duration-300">
              Shop
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors duration-300">
              More
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors duration-300">
              Let's Get Started!
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-gradient-to-br from-[#ba3364] to-[#732b6f] backdrop-blur-md z-40 lg:hidden animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              <Link
                href="/"
                className="text-white text-2xl font-light hover:text-white/80 transition-all duration-300 transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/promotions"
                className="text-white text-2xl font-light hover:text-white/80 transition-all duration-300 transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Current Promotions
              </Link>

              <div className="flex flex-col items-center">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="text-white text-2xl font-light hover:text-white/80 transition-all duration-300 flex items-center"
                >
                  Services
                  <svg
                    className={`ml-2 w-5 h-5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="mt-4 space-y-3 text-center animate-fade-in">
                    <Link
                      href="/services/sporting-events"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sporting Event Planning
                    </Link>
                    <Link
                      href="/services/balloon-decor"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Balloon Decor
                    </Link>
                    <Link
                      href="/services/corporate-milestones"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Corporate Milestones
                    </Link>
                    <Link
                      href="/services/employee-recognition"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Employee Recognition Dinners
                    </Link>
                    <Link
                      href="/services/corporate-events"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Corporate Event Planning
                    </Link>
                    <Link
                      href="/services/business-experience"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Business Experience Event Planner
                    </Link>
                    <Link
                      href="/services/curated-weddings"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Curated Wedding Experiences
                    </Link>
                    <Link
                      href="/services/wedding-officiant"
                      className="block text-white/90 text-lg hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Wedding Officiant Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/our-story"
                className="text-white text-2xl font-light hover:text-white/80 transition-all duration-300 transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/shop"
                className="text-white text-2xl font-light hover:text-white/80 transition-all duration-300 transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="#contact"
                className="text-white text-2xl font-light hover:text-white/80 transition-all duration-300 transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export { Header }
