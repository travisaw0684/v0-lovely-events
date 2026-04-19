import type { Metadata } from "next"
import ShopClient from "./ShopClient"

export const metadata: Metadata = {
  title: "Event Rentals Shop",
  description: "Curated event rentals and decor for weddings and celebrations in Las Vegas.",
  alternates: {
    canonical: "/shop",
  },
}

export default function ShopPage() {
  return <ShopClient />
}
