import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lovelyeventsgroup.com"

  const routes = [
    "",
    "/our-story",
    "/consultation",
    "/promotions",
    "/services",
    "/services/balloon-decor",
    "/services/business-experience",
    "/services/corporate-events",
    "/services/corporate-milestones",
    "/services/curated-weddings",
    "/services/employee-recognition",
    "/services/sporting-events",
    "/services/wedding-officiant",
    "/shop",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
