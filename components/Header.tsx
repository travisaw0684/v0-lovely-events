"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold tracking-wider">
            LOVELY EVENTS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
              Home
            </Link>
            <Link href="#locations" className="text-white hover:text-gray-300 transition-colors duration-300">
              Current Promotions
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
              Services
            </Link>
            <Link href="#campaigns" className="text-white hover:text-gray-300 transition-colors duration-300">
              Our Story
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
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
              <Link href="#locations" className="text-white hover:text-gray-300 transition-colors duration-300">
                Locations
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                Landlords
              </Link>
              <Link href="#campaigns" className="text-white hover:text-gray-300 transition-colors duration-300">
                Campaigns
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                About Us
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
