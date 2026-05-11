import { NextRequest, NextResponse } from "next/server"
import { getWordPressMediaImages } from "@/lib/wordpress"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const perPage = Number(searchParams.get("perPage") || 12)
    const page = Number(searchParams.get("page") || 1)
    const search = searchParams.get("search") || undefined
    const images = await getWordPressMediaImages({ perPage, page, search, noStore: true })

    return NextResponse.json({ images })
  } catch (error) {
    console.error("[CMS Media Error]", error)
    return NextResponse.json({ error: "Unable to load WordPress media." }, { status: 502 })
  }
}
