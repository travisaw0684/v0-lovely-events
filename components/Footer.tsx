import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f8f4f1] to-[#f5e3d7] text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6 text-gray-800">LOVELY EVENTS</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creating unforgettable moments through sophisticated event planning and elegant design.
            </p>
            <div className="space-y-3">
              <p className="text-gray-700 flex items-center">
                <Phone className="h-4 w-4 mr-3 text-[#d4af7f]" />
                <a href="tel:+15551234567" className="hover:text-[#d4af7f] transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-gray-700 flex items-center">
                <Mail className="h-4 w-4 mr-3 text-[#d4af7f]" />
                <a href="mailto:hello@lovelyevents.com" className="hover:text-[#d4af7f] transition-colors">
                  hello@lovelyevents.com
                </a>
              </p>
              <p className="text-gray-700 flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-[#d4af7f]" />
                New York, NY
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gray-800">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#d4af7f] transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-[#f5e3d7]" />
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#d4af7f] transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-[#f5e3d7]" />
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#d4af7f] transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-[#f5e3d7]" />
                  Private Celebrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#d4af7f] transition-colors flex items-center">
                  <Heart className="h-3 w-3 mr-2 text-[#f5e3d7]" />
                  Custom Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/promotions"
                  className="text-gray-600 hover:text-[#d4af7f] transition-colors flex items-center"
                >
                  <Heart className="h-3 w-3 mr-2 text-[#f5e3d7]" />
                  Current Promotions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#d4af7f] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#campaigns" className="text-gray-600 hover:text-[#d4af7f] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#d4af7f] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#d4af7f] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-[#d4af7f] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gray-800">Connect With Us</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Follow us for inspiration and behind-the-scenes moments from our latest events.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-[#d4af7f] text-white rounded-full flex items-center justify-center hover:bg-[#c19a6b] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#d4af7f] text-white rounded-full flex items-center justify-center hover:bg-[#c19a6b] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#d4af7f] text-white rounded-full flex items-center justify-center hover:bg-[#c19a6b] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Newsletter</p>
              <p className="text-xs text-gray-500">Stay updated with our latest events and offers</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4af7f]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0 flex items-center">
              © 2024 Lovely Events. Made with
              <Heart className="h-4 w-4 mx-1 text-[#f5e3d7] fill-current" />
              for unforgettable moments.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-[#d4af7f] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#d4af7f] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#d4af7f] text-sm transition-colors">
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
