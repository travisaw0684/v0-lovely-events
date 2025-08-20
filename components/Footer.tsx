import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">LOVELY EVENTS</h3>
            <p className="text-gray-400 mb-6">
              Creating positive change through innovative outdoor advertising solutions.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="tel:+442076924862" className="hover:text-white transition-colors">
                  <i className="fas fa-phone mr-2"></i>+44 207 692 4862
                </a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:sales@maximusmaximise.com" className="hover:text-white transition-colors">
                  <i className="fas fa-envelope mr-2"></i>sales@maximusmaximise.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#locations" className="text-gray-400 hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Landlords
                </Link>
              </li>
              <li>
                <Link href="#campaigns" className="text-gray-400 hover:text-white transition-colors">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Giving
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Live
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Digital
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Classic
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Maximus Maximise. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
