import { NextResponse } from "next/server"
import { getWordPressPostBySlug } from "@/lib/wordpress"

export const dynamic = "force-dynamic"

interface RouteParams {
  params: {
    slug: string
  }
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const post = await getWordPressPostBySlug(params.slug)

    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 })
    }

    return NextResponse.json({ post })
  } catch (error) {
    console.error("[CMS Post Error]", error)
    return NextResponse.json({ error: "Unable to load WordPress post." }, { status: 502 })
  }
}
