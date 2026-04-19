import type { Metadata } from "next"
import ConsultationClient from "./ConsultationClient"

export const metadata: Metadata = {
  title: "Free Consultation",
  description:
    "Schedule a free event planning consultation in Las Vegas. Tell us about your wedding, corporate event, or celebration.",
  alternates: {
    canonical: "/consultation",
  },
}

export default function ConsultationPage() {
  return <ConsultationClient />
}
