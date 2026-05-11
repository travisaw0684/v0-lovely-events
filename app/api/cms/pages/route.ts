import { NextRequest, NextResponse } from "next/server"
import { getWordPressPages } from "@/lib/wordpress"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const perPage = Number(searchParams.get("perPage") || 10)
    const page = Number(searchParams.get("page") || 1)
    const search = searchParams.get("search") || undefined
    const pages = await getWordPressPages({ perPage, page, search })

    return NextResponse.json({ pages })
  } catch (error) {
    console.error("[CMS Pages Error]", error)
    return NextResponse.json({ error: "Unable to load WordPress pages." }, { status: 502 })
  }
}
