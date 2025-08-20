"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const campaigns = [
  {
    id: 1,
    name: "Netflix",
    location: "Glasgow",
    reach: "Reach: 1.2M+",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "View • Glasgow",
  },
  {
    id: 2,
    name: "Beats",
    location: "Manchester",
    reach: "Reach: 2.1M+",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "View • Manchester",
  },
  {
    id: 3,
    name: "Converse",
    location: "Pride of Peckham",
    reach: "Reach: 850K+",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "View • Peckham",
  },
  {
    id: 4,
    name: "Apple",
    location: "London",
    reach: "Reach: 3.5M+",
    image:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "View • London",
  },
  {
    id: 5,
    name: "Nike",
    location: "Birmingham",
    reach: "Reach: 1.8M+",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "View • Birmingham",
  },
  {
    id: 6,
    name: "Spotify",
    location: "Leeds",
    reach: "Reach: 950K+",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "View • Leeds",
  },
]

function CampaignCard({ campaign, index }: { campaign: (typeof campaigns)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={campaign.image || "/placeholder.svg"}
          alt={`${campaign.name} campaign in ${campaign.location}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{campaign.name}</h3>
        <p className="text-gray-600 mb-2">{campaign.location}</p>
        <p className="text-lg font-semibold text-blue-600 mb-4">{campaign.reach}</p>
        <Link
          href={`/campaigns/${campaign.id}`}
          className="inline-flex items-center text-black hover:text-gray-700 font-medium transition-colors"
        >
          {campaign.link} <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  )
}

export default function FeaturedCampaigns() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="campaigns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most impactful outdoor advertising campaigns across the UK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={campaign.id} campaign={campaign} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
