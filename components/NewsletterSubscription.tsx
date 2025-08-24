"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Newsletter subscription:", email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 animate-newsletter-fade-in"
      style={{
        backgroundColor: "var(--newsletter-background)",
        color: "var(--newsletter-foreground)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative accent line */}
        <div className="w-24 h-0.5 mx-auto mb-8" style={{ backgroundColor: "var(--newsletter-accent)" }} />

        {/* Main headline */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "var(--newsletter-foreground)",
          }}
        >
          Stay Updated with Lovely Events
        </h2>

        {/* Supporting text */}
        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "DM Sans, sans-serif",
            color: "var(--newsletter-muted-foreground)",
          }}
        >
          Subscribe to receive the latest event inspiration, rental updates, and exclusive offers straight to your
          inbox.
        </p>

        {/* Newsletter form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 text-lg rounded-full border-2 focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  backgroundColor: "var(--newsletter-input)",
                  borderColor: "var(--newsletter-border)",
                  color: "var(--newsletter-card-foreground)",
                  borderRadius: "var(--newsletter-radius)",
                }}
              />
              <Button
                type="submit"
                className="px-8 py-4 text-lg font-semibold rounded-full animate-newsletter-button-hover transition-all duration-300"
                style={{
                  backgroundColor: "var(--newsletter-primary)",
                  color: "var(--newsletter-primary-foreground)",
                  borderRadius: "var(--newsletter-radius)",
                }}
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "var(--newsletter-muted)",
                color: "var(--newsletter-foreground)",
              }}
            >
              <p className="text-lg font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-2" style={{ color: "var(--newsletter-muted-foreground)" }}>
                You'll receive our latest updates soon.
              </p>
            </div>
          )}
        </div>

        {/* Decorative accent line */}
        <div className="w-24 h-0.5 mx-auto mt-12" style={{ backgroundColor: "var(--newsletter-accent)" }} />
      </div>
    </section>
  )
}
