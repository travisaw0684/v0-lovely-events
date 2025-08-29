"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold tracking-wider">
            <img
                src="https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/a5f603b1a2214b0f8afdaccd0790e40b/1/5feFb8zhrk/fulllogo_transparent_nobuffer.png?dpr=2"
                alt="Lovely Events Logo"
                className="w-[8rem] h-[8rem]"
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
              <button className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center">
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
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
                Home
              </Link>
              <Link href="/promotions" className="text-white hover:text-gray-300 transition-colors duration-300">
                Current Promotions
              </Link>

              <div>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center w-full text-left"
                >
                  Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/services/sporting-events"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Sporting Event Planning
                    </Link>
                    <Link
                      href="/services/balloon-decor"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Balloon Decor
                    </Link>
                    <Link
                      href="/services/corporate-milestones"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Corporate Milestones
                    </Link>
                    <Link
                      href="/services/employee-recognition"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Employee Recognition Dinners
                    </Link>
                    <Link
                      href="/services/corporate-events"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Corporate Event Planning
                    </Link>
                    <Link
                      href="/services/business-experience"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Business Experience Event Planner
                    </Link>
                    <Link
                      href="/services/curated-weddings"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Curated Wedding Experiences With Style & Intention
                    </Link>
                    <Link
                      href="/services/wedding-officiant"
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
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
