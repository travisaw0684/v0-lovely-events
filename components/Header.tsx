"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Phone, User, FileText, Globe } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

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
        setLanguageDropdownOpen(false)
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
        setLanguageDropdownOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handleTab = (e: KeyboardEvent) => {
      if (!mobileMenuOpen || !mobileMenuRef.current) return

      const focusableElements = mobileMenuRef.current.querySelectorAll("a[href], button:not([disabled])")
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("keydown", handleTab)
      document.body.style.overflow = "hidden"

      setTimeout(() => {
        const firstLink = mobileMenuRef.current?.querySelector("a") as HTMLElement
        firstLink?.focus()
      }, 100)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("keydown", handleTab)
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-slate-900/80 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="relative z-50 flex-shrink-0">
            <img
              src="/images/design-mode/fulllogo_transparent_nobuffer%281%29.png"
              alt="Lovely Events Logo"
              className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-light tracking-wide transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>+1 234 567 890</span>
            </a>

            <Link
              href="/reservations"
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-light tracking-wide transition-colors duration-300"
            >
              <User className="w-4 h-4" />
              <span>Modify Reservation</span>
            </Link>

            <Link
              href="/magazine"
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-light tracking-wide transition-colors duration-300"
            >
              <FileText className="w-4 h-4" />
              <span>Magazine</span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setLanguageDropdownOpen(true)}
              onMouseLeave={() => setLanguageDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-light tracking-wide transition-colors duration-300"
                aria-expanded={languageDropdownOpen}
                aria-haspopup="true"
              >
                <Globe className="w-4 h-4" />
                <span>English</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${languageDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {languageDropdownOpen && (
                <div className="absolute top-full right-0 mt-4 w-32 bg-white rounded-sm shadow-xl border border-gray-100 py-2 animate-nav-dropdown">
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 text-left font-light">
                    English
                  </button>
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-[#ba3364] hover:bg-gray-50/50 text-left font-light">
                    Español
                  </button>
                </div>
              )}
            </div>
          </nav>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-sm font-light tracking-widest uppercase">Menu</span>
            <div className="w-8 h-6 flex flex-col items-end justify-center gap-1.5">
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "w-6 rotate-45 translate-y-[5px]" : "w-8"
                }`}
              />
              <span
                className={`block h-[1.5px] w-8 bg-current transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[5px]" : "w-8"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#ba3364] to-[#732b6f] backdrop-blur-sm animate-mobile-menu-fade"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <nav className="relative h-full flex flex-col items-center justify-center px-8 animate-mobile-menu-slide-refined">
            <div className="w-full max-w-md space-y-1">
              <Link
                href="/promotions"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-400 text-center border-b border-white/10 focus:outline-none focus:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Current Promotions
              </Link>

              <div className="border-b border-white/10">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-400 flex items-center justify-center gap-2 focus:outline-none focus:text-white/80"
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-400 ease-out ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="pb-4 space-y-1 bg-black/10 rounded-lg px-4 animate-mobile-dropdown-refined">
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
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-400 text-center border-b border-white/10 focus:outline-none focus:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/shop"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-400 text-center border-b border-white/10 focus:outline-none focus:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="#contact"
                className="block py-4 text-white text-2xl font-light tracking-wide hover:text-white/80 transition-all duration-400 text-center border-b border-white/10 focus:outline-none focus:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <div className="pt-8 text-center">
                <Link
                  href="#contact"
                  className="inline-block px-10 py-4 bg-white text-[#ba3364] text-lg font-light tracking-wide rounded-sm hover:bg-white/90 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#ba3364]"
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
