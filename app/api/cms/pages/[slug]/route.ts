import { NextResponse } from "next/server"
import { getWordPressPageBySlug } from "@/lib/wordpress"

export const dynamic = "force-dynamic"

interface RouteParams {
  params: {
    slug: string
  }
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const page = await getWordPressPageBySlug(params.slug)

    if (!page) {
      return NextResponse.json({ error: "Page not found." }, { status: 404 })
    }

    return NextResponse.json({ page })
  } catch (error) {
    console.error("[CMS Page Error]", error)
    return NextResponse.json({ error: "Unable to load WordPress page." }, { status: 502 })
  }
}
