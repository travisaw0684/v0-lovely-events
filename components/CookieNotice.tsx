"use client"

import { useState, useEffect } from "react"

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setTimeout(() => {
        setIsVisible(true)
      }, 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const updateCookieSettings = () => {
    alert("Cookie settings would open here")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-pink-500 text-white p-6 rounded-lg shadow-lg animate-slide-up">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0 mt-1">
          <i className="fas fa-cookie-bite text-xs"></i>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">OUR SITE USES COOKIES</h3>
          <p className="text-sm leading-relaxed">
            We use cookies that help our website function and track how users interact with it. You can manage your
            cookie preferences by clicking "Update Settings", or "Accept Cookies".
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={updateCookieSettings}
          className="bg-transparent border border-white text-white hover:bg-white hover:text-pink-500 transition-all duration-300 px-4 py-2 text-sm font-semibold rounded"
        >
          UPDATE SETTINGS <i className="fas fa-arrow-right ml-1"></i>
        </button>
        <button
          onClick={acceptCookies}
          className="bg-white text-pink-500 hover:bg-gray-100 transition-all duration-300 px-4 py-2 text-sm font-semibold rounded"
        >
          ACCEPT COOKIES <i className="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  )
}
