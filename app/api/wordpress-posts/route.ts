import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiUrl = "https://54.83.102.176/wp-json/wp/v2/posts"

    console.log("[v0] Server: Fetching from WordPress API:", apiUrl)

    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.JWT_TOKEN ? `Bearer ${process.env.JWT_TOKEN}` : "",
      },
      // @ts-ignore - Node.js fetch options for SSL
      rejectUnauthorized: false,
    })

    console.log("[v0] Server: Response status:", response.status)

    const text = await response.text()
    console.log("[v0] Server: Response text (first 200 chars):", text.substring(0, 200))

    if (!response.ok) {
      console.error("[v0] Server: WordPress API error:", text)
      return NextResponse.json({ error: `WordPress API error: ${text}` }, { status: response.status })
    }

    try {
      const data = JSON.parse(text)
      console.log("[v0] Server: Successfully parsed JSON, posts count:", data.length)
      return NextResponse.json({ success: true, data })
    } catch (parseError) {
      console.error("[v0] Server: Failed to parse JSON. Response was:", text)
      return NextResponse.json({ error: `Failed to parse response: ${text}` }, { status: 500 })
    }
  } catch (error) {
    console.error("[v0] Server: Fetch error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
        details: "Failed to connect to WordPress API",
      },
      { status: 500 },
    )
  }
}
