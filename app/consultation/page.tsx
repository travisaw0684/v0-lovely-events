"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Calendar, Users, Sparkles, Loader2 } from "lucide-react"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          guestCount: "",
          message: "",
        })
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6 tracking-tight">
            Schedule Your Free Consultation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss your event vision and create something unforgettable together. Our team is ready to bring
            your ideas to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="p-8 border border-gray-200 hover:border-purple-400 transition-colors">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">702-748-8866</p>
                  <p className="text-sm text-gray-500 mt-1">Available 9AM - 6PM PST</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-gray-200 hover:border-purple-400 transition-colors">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">info@lovelyeventsgroup.com</p>
                  <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-gray-200 hover:border-purple-400 transition-colors">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">Las Vegas, Nevada</p>
                  <p className="text-sm text-gray-500 mt-1">By appointment</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Tell Us About Your Event</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your consultation request. Our team will contact you shortly to discuss your
                    event.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="702-748-8866"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select event type...</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="milestone">Corporate Milestone</option>
                      <option value="employee">Employee Recognition</option>
                      <option value="sporting">Sporting Event</option>
                      <option value="business">Business Experience</option>
                      <option value="balloon">Balloon Décor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Event Date
                      </label>
                      <Input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Guest Count
                      </label>
                      <Input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        placeholder="Estimated number of guests"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your vision and any special requests..."
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-150 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Schedule Consultation"
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">* Required fields</p>
                </form>
              )}
            </div>

            {/* Benefits Section */}
            <div className="md:pl-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">What to Expect</h2>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-purple-600 bg-purple-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">30-45 Minute Session</h3>
                  <p className="text-gray-600">
                    We'll discuss your vision, budget, timeline, and any special requirements for your event.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-blue-600 bg-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">
                    Get insights from our experienced event planners who specialize in luxury events and
                    unforgettable experiences.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-indigo-600 bg-indigo-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Proposal</h3>
                  <p className="text-gray-600">
                    Receive a personalized proposal with creative ideas tailored specifically to your event needs.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-pink-600 bg-pink-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Obligation</h3>
                  <p className="text-gray-600">
                    This is a free consultation with no pressure to book. We want to ensure we're the right fit for
                    your vision.
                  </p>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Pro Tip:</span> Having some initial ideas about your event, budget
                  range, and date will help us provide the most relevant suggestions during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
