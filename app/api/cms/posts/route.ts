import { NextRequest, NextResponse } from "next/server"
import { getWordPressPosts } from "@/lib/wordpress"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const perPage = Number(searchParams.get("perPage") || 10)
    const page = Number(searchParams.get("page") || 1)
    const search = searchParams.get("search") || undefined
    const posts = await getWordPressPosts({ perPage, page, search, noStore: true })

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("[CMS Posts Error]", error)
    return NextResponse.json({ error: "Unable to load WordPress posts." }, { status: 502 })
  }
}
