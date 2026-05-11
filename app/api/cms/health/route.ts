import { NextResponse } from "next/server"
import { getWordPressSiteInfo, wordpressConfig } from "@/lib/wordpress"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const site = await getWordPressSiteInfo()

    return NextResponse.json({
      ok: true,
      wordpressUrl: wordpressConfig.baseUrl,
      site,
    })
  } catch (error) {
    console.error("[CMS Health Error]", error)

    return NextResponse.json(
      {
        ok: false,
        wordpressUrl: wordpressConfig.baseUrl,
        error: "Unable to reach WordPress.",
      },
      { status: 502 }
    )
  }
}
