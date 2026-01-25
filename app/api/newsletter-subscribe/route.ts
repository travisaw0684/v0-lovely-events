import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
    }

    // Check if API URL is configured
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const jwtToken = process.env.JWT_TOKEN

    if (apiUrl) {
      // Send to external API if configured
      const response = await fetch(`${apiUrl}/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(jwtToken && { Authorization: `Bearer ${jwtToken}` }),
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe via external API")
      }

      const data = await response.json()
      return NextResponse.json({
        message: "Successfully subscribed! Check your email for confirmation.",
        ...data,
      })
    } else {
      // Fallback: Log to console (in production, this should save to a database)
      console.log("[Newsletter Subscription]", {
        email,
        timestamp: new Date().toISOString(),
      })

      // Simulate success response
      return NextResponse.json({
        message: "Successfully subscribed! Check your email for confirmation.",
        email,
      })
    }
  } catch (error) {
    console.error("[Newsletter Subscribe Error]", error)
    return NextResponse.json({ error: "Unable to process subscription. Please try again later." }, { status: 500 })
  }
}
