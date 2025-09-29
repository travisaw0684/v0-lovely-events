"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Users, MapPin, Palette, Headphones, CheckCircle, Star, Building, Phone, Mail, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function CorporateMilestonesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/8244257/8244257-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-5xl animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
            Celebrate Corporate Milestones with Unforgettable Las Vegas Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            We handle every detail so your company can focus on celebrating achievements and inspiring continued
            excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Book a Free Consultation
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Plan My Event
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">What We Do</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed text-muted-foreground">
              Celebrating milestones boosts team morale, recognizes achievements, and reinforces your brand identity.
              Our comprehensive approach ensures every detail reflects your company's success story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Venue Selection & Design",
                description: "Prestigious Las Vegas venues tailored to your milestone and guest count",
                image: "/placeholder.svg?height=400&width=600&text=Luxury+Vegas+Venue",
                badge: "Premium Locations",
                price: "Custom Quote",
              },
              {
                icon: Users,
                title: "Vendor Coordination",
                description: "Seamless management of catering, entertainment, and technical services",
                image: "/placeholder.svg?height=400&width=600&text=Event+Coordination",
                badge: "Full Service",
                price: "Included",
              },
              {
                icon: Palette,
                title: "Branding & Theming",
                description: "Custom design elements that reflect your company's identity and achievement",
                image: "/placeholder.svg?height=400&width=600&text=Corporate+Branding",
                badge: "Custom Design",
                price: "From $2K",
              },
              {
                icon: Headphones,
                title: "Day-of Event Management",
                description: "Professional on-site coordination ensuring flawless execution",
                image: "/placeholder.svg?height=400&width=600&text=Event+Management",
                badge: "Expert Team",
                price: "Peace of Mind",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                {/* Background Image */}
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  {/* Top Section - Price */}
                  <div className="flex justify-between items-start">
                    <service.icon className="w-8 h-8 text-white/80" />
                    <span className="text-xl font-bold">{service.price}</span>
                  </div>

                  {/* Bottom Section - Title, Description, Badge */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-balance">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed mb-4 text-sm">{service.description}</p>

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {service.badge}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Our Process</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Simple, scannable steps that ensure your milestone celebration exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Vision Call",
                description:
                  "We understand your milestone's significance and develop a celebration strategy aligned with your goals",
              },
              {
                step: "02",
                title: "Event Design & Logistics",
                description:
                  "Create detailed plans including venue selection, design concepts, and timeline coordination",
              },
              {
                step: "03",
                title: "Vendor Coordination & Setup",
                description: "Manage all vendor relationships and oversee setup to ensure everything is perfect",
              },
              {
                step: "04",
                title: "Day-of Execution & Support",
                description:
                  "Professional on-site management ensuring flawless execution of your milestone celebration",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 text-primary">{process.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Our Portfolio</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Celebrating success stories across Las Vegas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "/placeholder.svg?height=300&width=400&text=Tech+Company+25th+Anniversary",
                title: "25-Year Anniversary Celebration",
                client: "TechCorp Industries",
                description: "Elegant gala for 300 guests celebrating a quarter-century of innovation",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=IPO+Launch+Event",
                title: "IPO Launch Event",
                client: "StartupSuccess Inc.",
                description: "Sophisticated celebration marking the company's public offering milestone",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=Product+Launch+Gala",
                title: "Product Launch Gala",
                client: "Innovation Labs",
                description: "High-energy event unveiling groundbreaking technology to 500+ attendees",
              },
            ].map((portfolio, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={portfolio.image || "/placeholder.svg"}
                  alt={portfolio.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-primary">{portfolio.title}</h3>
                  <p className="text-sm text-accent font-semibold mb-2">{portfolio.client}</p>
                  <p className="text-card-foreground leading-relaxed">{portfolio.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Case Study: TechCorp's 25th Anniversary</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Problem</h4>
                <p className="text-card-foreground">
                  TechCorp needed to celebrate their 25th anniversary while maintaining their reputation for innovation
                  and bringing together employees from 5 different offices.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Solution</h4>
                <p className="text-card-foreground">
                  We created a tech-forward celebration featuring interactive displays of company history, live
                  streaming for remote employees, and a sophisticated gala dinner.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Outcome</h4>
                <p className="text-card-foreground">
                  300+ attendees, 95% employee satisfaction rating, and significant media coverage that reinforced
                  TechCorp's market leadership position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Sample Event Types</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Custom packages tailored to your needs and guest count
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Small Team Anniversary",
                subtitle: "50-100 guests",
                features: [
                  "Intimate venue selection",
                  "Custom branding & decor",
                  "Professional photography",
                  "Catered reception",
                  "Day-of coordination",
                ],
                note: "Custom packages starting at competitive rates",
              },
              {
                title: "Large Corporate Celebration",
                subtitle: "500+ guests",
                features: [
                  "Premium venue booking",
                  "Full event production",
                  "Multi-course dining",
                  "Entertainment coordination",
                  "VIP guest management",
                  "Media & PR support",
                ],
                note: "Tailored to your specific requirements",
              },
              {
                title: "Product Launch Event",
                subtitle: "100-300 guests",
                features: [
                  "Interactive product displays",
                  "Media coordination",
                  "Branded environment design",
                  "Technical AV support",
                  "Networking reception",
                ],
                note: "Designed to maximize impact and engagement",
              },
            ].map((package_, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-2xl font-bold mb-2 text-primary">{package_.title}</h3>
                <p className="text-accent font-semibold mb-6">{package_.subtitle}</p>
                <ul className="space-y-3 mb-6">
                  {package_.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic">{package_.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Client Logos */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                quote:
                  "Lovely Events transformed our 25th anniversary into an unforgettable celebration. Their attention to detail and understanding of our company culture made all the difference. Every guest left feeling proud to be part of our organization.",
                author: "Margaret Foster",
                title: "CEO, Foster Industries",
                image: "/placeholder.svg?height=80&width=80&text=MF",
              },
              {
                quote:
                  "The IPO celebration they planned exceeded all expectations. From stakeholder management to the final toast, every moment was perfectly orchestrated. It was the ideal way to mark this historic milestone for our company.",
                author: "James Patterson",
                title: "Chairman, Patterson Technologies",
                image: "/placeholder.svg?height=80&width=80&text=JP",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed text-card-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">Trusted by Leading Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[
                "/placeholder.svg?height=60&width=120&text=TechCorp",
                "/placeholder.svg?height=60&width=120&text=Foster+Industries",
                "/placeholder.svg?height=60&width=120&text=Patterson+Tech",
                "/placeholder.svg?height=60&width=120&text=Innovation+Labs",
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo || "/placeholder.svg"}
                  alt="Client Logo"
                  className="mx-auto h-12 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What size events do you handle?",
                answer:
                  "We handle corporate milestone events of all sizes, from intimate team celebrations of 25 guests to large-scale corporate galas with 1000+ attendees. Our scalable approach ensures every event receives the same level of attention and professionalism.",
              },
              {
                question: "Do you only work in Las Vegas?",
                answer:
                  "While Las Vegas is our home base and specialty, we also coordinate corporate milestone events throughout Nevada and can arrange destination celebrations. Las Vegas offers unique venues and entertainment options that make milestone celebrations truly memorable.",
              },
              {
                question: "How far in advance should we book?",
                answer:
                  "We recommend booking 3-6 months in advance for most corporate milestone events. This allows adequate time for venue selection, vendor coordination, and detailed planning. However, we can accommodate shorter timelines when necessary.",
              },
              {
                question: "Can you help with branding and company messaging?",
                answer:
                  "We work closely with your marketing and communications teams to ensure all event elements align with your brand identity and messaging. This includes custom signage, branded materials, and coordinated visual elements throughout the event.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-lg border border-border">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-primary">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lovely Events Group */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Why Choose Lovely Events Group
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "15+ Years Experience",
                description: "Proven track record with 500+ successful corporate events in Las Vegas",
              },
              {
                icon: Users,
                title: "Extensive Vendor Network",
                description: "Exclusive partnerships with premier venues, caterers, and entertainment providers",
              },
              {
                icon: CheckCircle,
                title: "Stress-Free Planning",
                description: "Complete project management from concept to execution, handling every detail",
              },
              {
                icon: MapPin,
                title: "Unique Vegas Venues",
                description: "Access to exclusive locations that create unforgettable milestone celebrations",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Make Your Next Milestone Unforgettable with Lovely Events Group
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Ready to celebrate your company's success with a milestone event that inspires and motivates? Let's create
            something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Get Started Today – Free Consultation
            </button>
            <div className="flex items-center justify-center gap-4 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(702) 555-0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>hello@lovelyevents.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
