import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, Star, Users, Award, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import LuxuryEventsGallery from "@/components/LuxuryEventsGallery"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/elegant-wedding-reception-with-beautiful-table-set.png"
            alt="Elegant event setup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ba3364]/70 via-[#732b6f]/50 to-[#ba3364]/70"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-story-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight tracking-tight text-white mb-6">
            Built with Intention, Led with Heart
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
            The story of Lovely Events began with a simple belief: every celebration deserves to be extraordinary.
          </p>
          <button className="bg-[#ba3364] hover:bg-[#732b6f] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Discover Our Journey
          </button>
        </div>
      </section>

      {/*<LuxuryEventsGallery />*/}

      {/* Brand History Timeline */}
      {/* <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-story-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              From humble beginnings to becoming a trusted name in luxury event planning, our story is one of passion,
              dedication, and countless unforgettable moments.
            </p>
          </div>

          <div className="space-y-16"> */}
            {/* Timeline Item 1 */}
            {/*<div className="flex flex-col md:flex-row items-center gap-12 animate-story-slide-in">
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-8 h-8 text-[#ba3364] mr-3" />
                    <span className="text-2xl font-bold text-[#ba3364]">2018</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded with a vision to transform ordinary events into extraordinary experiences. Our first wedding
                    was a intimate garden ceremony that set the standard for our attention to detail.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/elegant-spring-wedding-setup-with-blush-flowers.png"
                  alt="Our first wedding"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div> */}

            {/* Timeline Item 2 */}
            {/* <div className="flex flex-col md:flex-row-reverse items-center gap-12 animate-story-slide-in">
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-[#ba3364] mr-3" />
                    <span className="text-2xl font-bold text-[#ba3364]">2020</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Recognition & Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Awarded "Best Event Planning Company" by the Regional Wedding Association. Expanded our team and
                    began specializing in luxury corporate events and social celebrations.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/sophisticated-corporate-gala-with-elegant-lighting.png"
                  alt="Award ceremony"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div> */}

            {/* Timeline Item 3 */}
            {/*<div className="flex flex-col md:flex-row items-center gap-12 animate-story-slide-in">
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-8 h-8 text-[#ba3364] mr-3" />
                    <span className="text-2xl font-bold text-[#ba3364]">2024</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Innovation & Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we've planned over 500 events, each one unique and memorable. We continue to innovate with
                    sustainable practices and cutting-edge design trends.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/elegant-birthday-celebration-with-luxury-decor.png"
                  alt="Modern celebration"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Mission Statement */}
      <section className="py-20 bg-[#732b6f] text-white">
        <div className="max-w-4xl mx-auto text-center px-6 animate-story-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-balance">
            "To create extraordinary experiences that celebrate life's most precious moments, bringing dreams to life
            through meticulous planning, creative vision, and unwavering dedication to excellence."
          </blockquote>
          <div className="mt-8 w-24 h-1 bg-[#ba3364] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-story-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              These core principles guide everything we do, ensuring every event reflects our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
              <Heart className="w-16 h-16 text-[#ba3364] mx-auto mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                We pour our hearts into every detail, treating each event as if it were our own special celebration.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
              <Star className="w-16 h-16 text-[#ba3364] mx-auto mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for perfection in every aspect, from the grandest gestures to the smallest touches.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
              <Users className="w-16 h-16 text-[#ba3364] mx-auto mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                We build lasting relationships with our clients, understanding their vision and bringing it to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Connection / Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-story-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Stories from the Heart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              The true measure of our success lies in the joy and memories we help create for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
              <div className="flex items-center mb-6">
                <Image
                  src="/elegant-bride-testimonial-photo.png"
                  alt="Sarah & Michael"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">Sarah & Michael</h4>
                  <p className="text-gray-600">Wedding Clients</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                "Lovely Events turned our dream wedding into reality. Every detail was perfect, and the day flowed
                seamlessly. Our guests are still talking about how magical it was!"
              </blockquote>
              <div className="flex text-[#ba3364]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-story-card-hover">
              <div className="flex items-center mb-6">
                <Image
                  src="/professional-businessman-testimonial.png"
                  alt="David Chen"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">David Chen</h4>
                  <p className="text-gray-600">Corporate Client</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                "The annual gala exceeded all expectations. The attention to detail and professional execution made our
                company look exceptional. We'll definitely be working with them again."
              </blockquote>
              <div className="flex text-[#ba3364]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-story-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Create Your Story?</h2>
          <p className="text-xl text-gray-600 mb-8 text-pretty">
            Let us help you craft an unforgettable experience that reflects your unique vision and style.
          </p>
          <button className="bg-[#ba3364] hover:bg-[#732b6f] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 mr-4">
            Start Planning
          </button>
          <button className="border-2 border-[#ba3364] text-[#ba3364] hover:bg-[#ba3364] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            View Our Portfolio
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
