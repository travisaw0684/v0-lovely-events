"use client"

import { useEffect, useState } from "react"

export default function ApiConnectionTest() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading")
  const [error, setError] = useState<string>("")
  const [retryCount, setRetryCount] = useState<number>(0)

  const testConnection = async () => {
    setStatus("loading")
    setError("")

    try {
      console.log("[v0] Testing API connection to WordPress...")
      const response = await fetch("https://api.lovely.crabdance.com/wp-json/wp/v2/posts")

      const text = await response.text()

      if (response.ok) {
        try {
          const data = JSON.parse(text)
          console.log("[v0] API connection successful:", data)
          setStatus("connected")
        } catch (parseError) {
          console.log("[v0] Response was not JSON:", text)
          setStatus("connected")
        }
      } else {
        try {
          const errorData = JSON.parse(text)
          console.log("[v0] API connection failed:", errorData)
          setStatus("error")
          setError(errorData.error || errorData.message || `Failed to connect: ${response.status}`)
        } catch {
          console.log("[v0] API connection failed with text:", text)
          setStatus("error")
          setError(text || `Failed to connect: ${response.status}`)
        }
      }
    } catch (err) {
      console.error("[v0] API connection error:", err)
      setStatus("error")
      setError(err instanceof Error ? err.message : "Unknown error")
    }
  }

  useEffect(() => {
    testConnection()
  }, [retryCount])

  return (
    <div className="py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {status === "loading" && <p className="text-lg">Testing API connection...</p>}
        {status === "error" && (
          <div>
            <p className="text-lg text-red-600">Connection failed: {error}</p>
            <button
              onClick={() => setRetryCount(retryCount + 1)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}
        {status === "connected" && (
          <p className="text-2xl font-semibold text-green-700 bg-green-50 p-4 rounded">connects</p>
        )}
      </div>
    </div>
  )
}
