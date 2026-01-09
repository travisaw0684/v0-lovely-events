"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, X, Menu } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false)
        setServicesDropdownOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="relative z-50 flex-shrink-0">
            <img
              src="/images/design-mode/fulllogo_transparent_nobuffer%281%29.png"
              alt="Lovely Events Logo"
              className="w-14 h-14 lg:w-16 lg:h-16 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`nav-link px-4 py-2 text-sm font-light tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-[#ba3364]" : "text-white hover:text-white/80"
              }`}
            >
              Home
            </Link>
            <Link
              href="/promotions"
              className={`nav-link px-4 py-2 text-sm font-light tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-[#ba3364]" : "text-white hover:text-white/80"
              }`}
            >
              Current Promotions
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`nav-link px-4 py-2 text-sm font-light tracking-wide flex items-center gap-1 transition-colors duration-300 ${
                  scrolled ? "text-gray-800 hover:text-[#ba3364]" : "text-white hover:text-white/80"
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[420px] bg-white rounded-sm shadow-xl border border-gray-100 py-3 animate-nav-dropdown">
                  <div className="px-2 space-y-0.5">
                    <Link
                      href="/services/sporting-events"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Sporting Event Planning
                    </Link>
                    <Link
                      href="/services/balloon-decor"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Balloon Decor
                    </Link>
                    <Link
                      href="/services/corporate-milestones"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Corporate Milestones
                    </Link>
                    <Link
                      href="/services/employee-recognition"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Employee Recognition Dinners
                    </Link>
                    <Link
                      href="/services/corporate-events"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Corporate Event Planning
                    </Link>
                    <Link
                      href="/services/business-experience"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Business Experience Event Planner
                    </Link>
                    <Link
                      href="/services/curated-weddings"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Curated Wedding Experiences With Style & Intention
                    </Link>
                    <Link
                      href="/services/wedding-officiant"
                      className="nav-dropdown-link block px-5 py-3 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 rounded-sm font-light tracking-wide"
                    >
                      Personalized Wedding Officiant Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/our-story"
              className={`nav-link px-4 py-2 text-sm font-light tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-[#ba3364]" : "text-white hover:text-white/80"
              }`}
            >
              Our Story
            </Link>
            <Link
              href="/shop"
              className={`nav-link px-4 py-2 text-sm font-light tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-[#ba3364]" : "text-white hover:text-white/80"
              }`}
            >
              Shop
            </Link>
            <Link
              href="#contact"
              className={`nav-link px-4 py-2 text-sm font-light tracking-wide transition-colors duration-300 ${
                scrolled ? "text-gray-800 hover:text-[#ba3364]" : "text-white hover:text-white/80"
              }`}
            >
              More
            </Link>

            <Link
              href="#contact"
              className={`ml-4 px-6 py-2.5 text-sm font-light tracking-wide rounded-sm transition-all duration-300 ${
                scrolled ? "bg-[#ba3364] text-white hover:bg-[#732b6f]" : "bg-white/90 text-[#ba3364] hover:bg-white"
              }`}
            >
              Let's Get Started!
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden relative z-50 p-2 rounded-sm transition-colors duration-300 ${
              mobileMenuOpen
                ? "text-white"
                : scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#ba3364] to-[#732b6f] animate-mobile-menu-fade"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu content */}
          <nav className="relative h-full flex flex-col items-center justify-center px-8 animate-mobile-menu-slide">
            <div className="w-full max-w-md space-y-2">
              <Link
                href="/"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-300 text-center border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/promotions"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-300 text-center border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Current Promotions
              </Link>

              {/* Mobile Services Section */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-300 flex items-center justify-center gap-2"
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="pb-4 space-y-2 animate-nav-fade-in">
                    <Link
                      href="/services/sporting-events"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sporting Event Planning
                    </Link>
                    <Link
                      href="/services/balloon-decor"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Balloon Decor
                    </Link>
                    <Link
                      href="/services/corporate-milestones"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Corporate Milestones
                    </Link>
                    <Link
                      href="/services/employee-recognition"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Employee Recognition Dinners
                    </Link>
                    <Link
                      href="/services/corporate-events"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Corporate Event Planning
                    </Link>
                    <Link
                      href="/services/business-experience"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Business Experience Event Planner
                    </Link>
                    <Link
                      href="/services/curated-weddings"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Curated Wedding Experiences
                    </Link>
                    <Link
                      href="/services/wedding-officiant"
                      className="block py-2 text-white/90 text-lg font-light hover:text-white transition-colors duration-200 text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Wedding Officiant Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/our-story"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-300 text-center border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/shop"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-300 text-center border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="#contact"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-300 text-center border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile CTA */}
              <div className="pt-8 text-center">
                <Link
                  href="#contact"
                  className="inline-block px-10 py-4 bg-white text-[#ba3364] text-lg font-light tracking-wide rounded-sm hover:bg-white/90 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Get Started!
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export { Header }
