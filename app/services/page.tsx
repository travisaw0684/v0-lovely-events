import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Heart, Building2, PartyPopper, Star, CheckCircle, ArrowRight, Users, Calendar, Award } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    subtitle: "Elegant, romantic, and unforgettable",
    description:
      "From intimate ceremonies to grand celebrations, we craft wedding experiences that capture your unique love story.",
    features: [
      "Complete venue selection and coordination",
      "Custom floral design and décor",
      "Vendor management and timeline coordination",
      "Day-of coordination and support",
      "Bridal party assistance and guidance",
    ],
    packages: [
      {
        name: "Essential",
        price: "Starting at $3,500",
        features: ["Basic planning", "Vendor coordination", "Day-of support"],
      },
      {
        name: "Premium",
        price: "Starting at $6,500",
        features: ["Full planning", "Design consultation", "Rehearsal coordination"],
      },
      {
        name: "Luxury",
        price: "Starting at $12,000",
        features: ["Complete concierge service", "Custom design", "Multi-day events"],
      },
    ],
    backgroundImage: "/elegant-spring-wedding-setup-with-blush-flowers.png",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    subtitle: "Professional, seamless, and impactful",
    description:
      "Elevate your business gatherings with our corporate event expertise that ensures your brand message resonates.",
    features: [
      "Conference and seminar planning",
      "Product launch coordination",
      "Team building event design",
      "Executive retreat planning",
      "Brand activation experiences",
    ],
    packages: [
      {
        name: "Business",
        price: "Starting at $2,500",
        features: ["Event coordination", "Venue sourcing", "Basic AV setup"],
      },
      {
        name: "Professional",
        price: "Starting at $5,000",
        features: ["Full event management", "Branding integration", "Catering coordination"],
      },
      {
        name: "Executive",
        price: "Starting at $10,000",
        features: ["Luxury venue access", "VIP services", "Multi-location events"],
      },
    ],
    backgroundImage: "/sophisticated-corporate-gala-with-elegant-lighting.png",
  },
  {
    icon: PartyPopper,
    title: "Social Celebrations",
    subtitle: "Birthdays, anniversaries, and intimate gatherings",
    description:
      "Celebrate life's special moments with personalized private events tailored to your vision and guest list.",
    features: [
      "Milestone birthday celebrations",
      "Anniversary party planning",
      "Family reunion coordination",
      "Holiday party organization",
      "Themed celebration design",
    ],
    packages: [
      {
        name: "Intimate",
        price: "Starting at $1,500",
        features: ["Small gathering planning", "Basic décor", "Menu coordination"],
      },
      {
        name: "Celebration",
        price: "Starting at $3,500",
        features: ["Full party planning", "Custom themes", "Entertainment booking"],
      },
      {
        name: "Grand",
        price: "Starting at $7,500",
        features: ["Luxury celebrations", "Premium venues", "Concierge services"],
      },
    ],
    backgroundImage: "/elegant-birthday-celebration-with-luxury-decor.png",
  },
]

const processSteps = [
  {
    icon: Users,
    title: "Initial Consultation",
    description:
      "We begin with a detailed discussion about your vision, preferences, and budget to understand your unique needs.",
  },
  {
    icon: Calendar,
    title: "Planning & Design",
    description:
      "Our team creates a comprehensive plan with timeline, vendor selection, and design concepts tailored to your event.",
  },
  {
    icon: Award,
    title: "Execution & Support",
    description:
      "We coordinate every detail and provide on-site support to ensure your event runs flawlessly from start to finish.",
  },
]

const testimonials = [
  {
    name: "Sarah & Michael",
    event: "Wedding",
    rating: 5,
    text: "Lovely Events made our dream wedding come true. Every detail was perfect, and we couldn't have asked for a better team.",
    image: "/elegant-bride-testimonial-photo.png",
  },
  {
    name: "Corporate Client",
    event: "Product Launch",
    rating: 5,
    text: "The professionalism and attention to detail exceeded our expectations. Our product launch was a tremendous success.",
    image: "/professional-businessman-testimonial.png",
  },
  {
    name: "Jennifer & David",
    event: "Anniversary",
    rating: 5,
    text: "Our 25th anniversary celebration was magical. The team understood our vision and brought it to life beautifully.",
    image: "/happy-couple-anniversary-testimonial.png",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/luxurious-event-venue-with-elegant-table-settings.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ba3364]/80 via-[#732b6f]/60 to-[#ba3364]/80" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-services-page-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Crafting Unforgettable Experiences</h1>
          <p className="font-sans text-xl md:text-2xl mb-8 leading-relaxed">
            From intimate celebrations to grand affairs, we bring your vision to life with elegance and precision.
          </p>
          <button className="bg-[#ba3364] hover:bg-[#732b6f] text-white px-8 py-4 rounded-full font-sans font-semibold text-lg transition-all duration-300 animate-services-page-card-hover">
            Start Planning Your Event
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-services-page-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="font-sans text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              We specialize in creating extraordinary events that reflect your style and story, with comprehensive
              planning services tailored to your needs.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="animate-services-page-fade-in">
                  <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-services-page-card-hover">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-[#ba3364] flex items-center justify-center mr-4">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-serif text-3xl font-bold">{service.title}</h3>
                            <p className="font-sans text-lg text-gray-600">{service.subtitle}</p>
                          </div>
                        </div>

                        <p className="font-sans text-lg mb-8 leading-relaxed">{service.description}</p>

                        <div className="mb-8">
                          <h4 className="font-serif text-xl font-semibold mb-4">What's Included:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center font-sans">
                                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-[#ba3364]" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {service.packages.map((pkg, pkgIndex) => (
                            <div
                              key={pkgIndex}
                              className="p-4 rounded-2xl border-2 border-gray-200 bg-gray-50 text-center hover:border-[#ba3364] transition-colors duration-300"
                            >
                              <h5 className="font-serif text-lg font-semibold mb-2">{pkg.name}</h5>
                              <p className="font-sans font-bold mb-3 text-[#ba3364]">{pkg.price}</p>
                              <ul className="text-sm space-y-1">
                                {pkg.features.map((feature, fIndex) => (
                                  <li key={fIndex} className="font-sans">
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image */}
                      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                        <div
                          className="h-96 rounded-2xl bg-cover bg-center"
                          style={{ backgroundImage: `url(${service.backgroundImage})` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-services-page-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="font-sans text-xl max-w-3xl mx-auto leading-relaxed">
              We follow a proven three-step process to ensure your event exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center animate-services-page-fade-in">
                  <div className="w-20 h-20 rounded-full bg-[#ba3364] flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="font-sans text-lg leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-services-page-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
            <p className="font-sans text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Hear from our satisfied clients about their unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-services-page-card-hover"
              >
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-6"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#ba3364]" />
                  ))}
                </div>
                <p className="font-sans text-lg mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-serif text-xl font-semibold">{testimonial.name}</h4>
                <p className="font-sans text-gray-600">{testimonial.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#ba3364] text-white">
        <div className="max-w-4xl mx-auto text-center animate-services-page-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Start Planning?</h2>
          <p className="font-sans text-xl mb-8 leading-relaxed">
            Let's create an unforgettable experience together. Contact us today for a consultation.
          </p>
          <button className="bg-[#732b6f] hover:bg-white hover:text-[#ba3364] px-8 py-4 rounded-full font-sans font-semibold text-lg transition-all duration-300 animate-services-page-card-hover">
            Book Your Consultation
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
