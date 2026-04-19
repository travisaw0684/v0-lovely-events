import type { Metadata } from "next"
import PromotionsClient from "./PromotionsClient"

export const metadata: Metadata = {
  title: "Promotions",
  description: "Current promotions and special offers for event planning and rentals in Las Vegas.",
  alternates: {
    canonical: "/promotions",
  },
}

export default function PromotionsPage() {
  return <PromotionsClient />
}
