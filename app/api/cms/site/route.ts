import { NextResponse } from "next/server"
import { getWordPressSiteInfo } from "@/lib/wordpress"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const site = await getWordPressSiteInfo()
    return NextResponse.json(site)
  } catch (error) {
    console.error("[CMS Site Error]", error)
    return NextResponse.json({ error: "Unable to load WordPress site info." }, { status: 502 })
  }
}
