"use client"

import { useEffect, useState } from "react"

export default function ApiConnectionTest() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log("[v0] Testing API connection to WordPress...")
        const response = await fetch("https://api.lovely.crabdance.com/wp-json/wp/v2/posts")

        if (response.ok) {
          const data = await response.json()
          console.log("[v0] API connection successful, received data:", data)
          setStatus("connected")
        } else {
          console.log("[v0] API connection failed with status:", response.status)
          setStatus("error")
          setError(`Failed to connect: ${response.status}`)
        }
      } catch (err) {
        console.log("[v0] API connection error:", err)
        setStatus("error")
        setError(err instanceof Error ? err.message : "Unknown error")
      }
    }

    testConnection()
  }, [])

  if (status === "loading") {
    return (
      <div className="py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg">Testing API connection...</p>
        </div>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-red-600">Connection failed: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-6 text-center bg-green-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl font-semibold text-green-700">connects</p>
      </div>
    </div>
  )
}
