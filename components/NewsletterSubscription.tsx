"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Check, AlertCircle } from "lucide-react"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message || "Thank you for subscribing!")
        setEmail("")
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      setStatus("error")
      setMessage("Failed to subscribe. Please check your connection.")
      setTimeout(() => setStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-stone-50 via-rose-50/30 to-stone-100">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#832854] to-[#B63669] mb-6 shadow-lg shadow-rose-900/30">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-slate-900">
            Stay in the Loop
          </h2>

          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to event inspiration, insider tips, and special offers delivered straight to your
            inbox.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {status === "success" ? (
            <div className="bg-white/80 border border-rose-200 rounded-2xl p-8 text-center backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">You're All Set!</h3>
              <p className="text-slate-700">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-6 py-6 text-lg bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:border-[#832854] focus:ring-2 focus:ring-[#832854]/20 transition-all duration-300 disabled:opacity-50 shadow-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-6 text-lg font-semibold rounded-2xl bg-gradient-to-r from-[#832854] to-[#B63669] hover:from-[#6d1f45] hover:to-[#9f2c5a] text-white shadow-lg shadow-rose-900/20 hover:shadow-rose-900/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe Now"
                )}
              </Button>

              {status === "error" && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-sm">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{message}</p>
                </div>
              )}
            </form>
          )}

          <p className="text-center text-sm text-slate-500 mt-6">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
