import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#ba3364] to-[#732b6f] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/images/design-mode/fulllogo_transparent_nobuffer%281%29.png"
                alt="Lovely Events Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="font-serif text-3xl font-bold mb-6 text-white">LOVELY EVENTS</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating unforgettable moments through sophisticated event planning and elegant design.
            </p>
            <div className="space-y-3">
              <p className="text-white/90 flex items-center">
                <Phone className="h-4 w-4 mr-3 text-pink-200" />
                <a href="tel:+15551234567" className="hover:text-pink-200 transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-white/90 flex items-center">
                <Mail className="h-4 w-4 mr-3 text-pink-200" />
                <a href="mailto:hello@lovelyevents.com" className="hover:text-pink-200 transition-colors">
                  hello@lovelyevents.com
                </a>
              </p>
              <p className="text-white/90 flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-pink-200" />
                New York, NY
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/80 hover:text-pink-200 transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-pink-300" />
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-pink-200 transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-pink-300" />
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-pink-200 transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-pink-300" />
                  Private Celebrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-pink-200 transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-pink-300" />
                  Custom Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/promotions"
                  className="text-white/80 hover:text-pink-200 transition-colors flex items-center"
                >
                  <Heart className="h-3 w-3 mr-2 text-pink-300" />
                  Current Promotions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-pink-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#campaigns" className="text-white/80 hover:text-pink-200 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-pink-200 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-pink-200 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-pink-200 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white">Connect With Us</h4>
            <p className="text-white/80 mb-6 leading-relaxed">
              Follow us for inspiration and behind-the-scenes moments from our latest events.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-pink-200 text-[#732b6f] rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-pink-200 text-[#732b6f] rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-pink-200 text-[#732b6f] rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-white/90 mb-2">Newsletter</p>
              <p className="text-xs text-white/70">Stay updated with our latest events and offers</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-200/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0 flex items-center">
              © 2024 Lovely Events. Made with
              <Heart className="h-4 w-4 mx-1 text-pink-300 fill-current" />
              for unforgettable moments.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/80 hover:text-pink-200 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-pink-200 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/80 hover:text-pink-200 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
