import { NextResponse } from "next/server"

interface ConsultationData {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate?: string
  guestCount?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const data: ConsultationData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.eventType) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Validate email format
    if (!data.email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.CONSULTATION_EMAIL || "info@lovelyeventsgroup.com"

    // Format the event type for display
    const eventTypeLabels: Record<string, string> = {
      wedding: "Wedding",
      corporate: "Corporate Event",
      milestone: "Corporate Milestone",
      employee: "Employee Recognition",
      sporting: "Sporting Event",
      business: "Business Experience",
      balloon: "Balloon Décor",
      other: "Other",
    }

    const eventTypeDisplay = eventTypeLabels[data.eventType] || data.eventType

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
          New Consultation Request
        </h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 15px;">Contact Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        </div>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
          <h3 style="color: #374151; margin-bottom: 15px;">Event Details</h3>
          <p><strong>Event Type:</strong> ${eventTypeDisplay}</p>
          ${data.eventDate ? `<p><strong>Event Date:</strong> ${new Date(data.eventDate).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>` : ""}
          ${data.guestCount ? `<p><strong>Guest Count:</strong> ${data.guestCount}</p>` : ""}
        </div>
        
        ${
          data.message
            ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #374151; margin-bottom: 15px;">Additional Details</h3>
          <p style="white-space: pre-wrap; background-color: #faf5ff; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed;">${data.message}</p>
        </div>
        `
            : ""
        }
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
          <p>This consultation request was submitted on ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</p>
        </div>
      </div>
    `

    const emailText = `
New Consultation Request

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Event Details:
- Event Type: ${eventTypeDisplay}
${data.eventDate ? `- Event Date: ${data.eventDate}` : ""}
${data.guestCount ? `- Guest Count: ${data.guestCount}` : ""}

${data.message ? `Additional Details:\n${data.message}` : ""}

Submitted on: ${new Date().toLocaleString()}
    `

    if (resendApiKey) {
      // Send email using Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Lovely Events <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: `New Consultation Request: ${eventTypeDisplay} - ${data.name}`,
          html: emailHtml,
          text: emailText,
          reply_to: data.email,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("[Resend Error]", errorData)
        throw new Error("Failed to send email")
      }

      console.log("[Consultation Email Sent]", {
        to: recipientEmail,
        from: data.email,
        eventType: data.eventType,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        message: "Consultation request submitted successfully!",
        success: true,
      })
    } else {
      // Fallback: Log to console when no API key is configured
      console.log("[Consultation Request - No Email Configured]", {
        ...data,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        message: "Consultation request received! We'll contact you soon.",
        success: true,
      })
    }
  } catch (error) {
    console.error("[Consultation Submit Error]", error)
    return NextResponse.json(
      { error: "Unable to submit consultation request. Please try again later." },
      { status: 500 }
    )
  }
}
