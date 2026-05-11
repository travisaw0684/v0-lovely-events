import { getOptionalNumberEnv, getRequiredEnv } from "@/lib/env"

const DEFAULT_WORDPRESS_API_URL = "http://44.216.7.118"

export const wordpressConfig = {
  baseUrl: getRequiredEnv("WORDPRESS_API_URL", DEFAULT_WORDPRESS_API_URL).replace(/\/$/, ""),
  revalidate: getOptionalNumberEnv("WORDPRESS_REVALIDATE_SECONDS", 300),
}

export interface WordPressRenderedField {
  rendered: string
  protected?: boolean
}

export interface WordPressMedia {
  id: number
  source_url?: string
  alt_text?: string
  title?: WordPressRenderedField
  caption?: WordPressRenderedField
  media_details?: {
    sizes?: Record<string, { source_url?: string }>
  }
}

export interface CmsMediaImage {
  id: number
  title: string
  caption: string
  alt: string
  url: string
}

export interface WordPressAuthor {
  id: number
  name: string
  slug: string
  avatar_urls?: Record<string, string>
}

export interface WordPressPost {
  id: number
  date: string
  modified: string
  slug: string
  status: string
  type: "post" | "page"
  link: string
  title: WordPressRenderedField
  content: WordPressRenderedField
  excerpt: WordPressRenderedField
  featured_media: number
  _embedded?: {
    author?: WordPressAuthor[]
    "wp:featuredmedia"?: WordPressMedia[]
  }
}

export interface CmsPost {
  id: number
  date: string
  modified: string
  slug: string
  type: "post" | "page"
  link: string
  title: string
  excerpt: string
  content: string
  authorName?: string
  featuredImage?: {
    url: string
    alt: string
  }
}

export interface WordPressSiteInfo {
  name: string
  description: string
  url: string
  home: string
  timezone_string: string
}

interface ListContentOptions {
  perPage?: number
  page?: number
  search?: string
  noStore?: boolean
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&hellip;/g, "...")
}

function toCmsPost(post: WordPressPost): CmsPost {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]
  const author = post._embedded?.author?.[0]
  const imageUrl =
    featuredMedia?.media_details?.sizes?.large?.source_url ||
    featuredMedia?.media_details?.sizes?.medium_large?.source_url ||
    featuredMedia?.source_url

  return {
    id: post.id,
    date: post.date,
    modified: post.modified,
    slug: post.slug,
    type: post.type,
    link: post.link,
    title: decodeHtmlEntities(stripHtml(post.title.rendered)),
    excerpt: decodeHtmlEntities(stripHtml(post.excerpt.rendered)),
    content: post.content.rendered,
    authorName: author?.name,
    featuredImage: imageUrl
      ? {
          url: imageUrl,
          alt: featuredMedia?.alt_text || decodeHtmlEntities(stripHtml(post.title.rendered)),
        }
      : undefined,
  }
}

function getMediaImageUrl(media: WordPressMedia) {
  return (
    media.media_details?.sizes?.large?.source_url ||
    media.media_details?.sizes?.medium_large?.source_url ||
    media.media_details?.sizes?.full?.source_url ||
    media.source_url ||
    ""
  )
}

function toCmsMediaImage(media: WordPressMedia): CmsMediaImage | null {
  const url = getMediaImageUrl(media)

  if (!url) {
    return null
  }

  const title = decodeHtmlEntities(stripHtml(media.title?.rendered || "Event Highlight"))
  const caption = decodeHtmlEntities(stripHtml(media.caption?.rendered || ""))

  return {
    id: media.id,
    title,
    caption,
    alt: media.alt_text || title,
    url,
  }
}

function toSiteInfo(site: WordPressSiteInfo): WordPressSiteInfo {
  return {
    name: decodeHtmlEntities(site.name),
    description: decodeHtmlEntities(site.description),
    url: site.url,
    home: site.home,
    timezone_string: site.timezone_string,
  }
}

function buildUrl(path: string, params?: Record<string, string | number | undefined>) {
  const url = new URL(`${wordpressConfig.baseUrl}/wp-json${path}`)

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      url.searchParams.set(key, String(value))
    }
  })

  return url.toString()
}

async function wordpressFetch<T>(
  path: string,
  params?: Record<string, string | number | undefined>,
  options: { noStore?: boolean } = {}
) {
  const response = await fetch(buildUrl(path, params), {
    headers: {
      Accept: "application/json",
    },
    ...(options.noStore
      ? { cache: "no-store" as const }
      : {
          next: {
            revalidate: wordpressConfig.revalidate,
          },
        }),
  })

  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export async function getWordPressSiteInfo() {
  const site = await wordpressFetch<WordPressSiteInfo>("/")
  return toSiteInfo(site)
}

export async function getWordPressPosts(options: ListContentOptions = {}) {
  const posts = await wordpressFetch<WordPressPost[]>("/wp/v2/posts", {
    _embed: 1,
    per_page: options.perPage || 10,
    page: options.page || 1,
    search: options.search,
  }, { noStore: options.noStore })

  return posts.map(toCmsPost)
}

export async function getWordPressMediaImages(options: ListContentOptions = {}) {
  const media = await wordpressFetch<WordPressMedia[]>("/wp/v2/media", {
    media_type: "image",
    per_page: options.perPage || 12,
    page: options.page || 1,
    search: options.search,
  }, { noStore: options.noStore })

  return media.map(toCmsMediaImage).filter((image): image is CmsMediaImage => Boolean(image))
}

export async function getWordPressPostBySlug(slug: string) {
  const posts = await wordpressFetch<WordPressPost[]>("/wp/v2/posts", {
    _embed: 1,
    slug,
    per_page: 1,
  })

  return posts[0] ? toCmsPost(posts[0]) : null
}

export async function getWordPressPages(options: ListContentOptions = {}) {
  const pages = await wordpressFetch<WordPressPost[]>("/wp/v2/pages", {
    _embed: 1,
    per_page: options.perPage || 10,
    page: options.page || 1,
    search: options.search,
  }, { noStore: options.noStore })

  return pages.map(toCmsPost)
}

export async function getWordPressPageBySlug(slug: string) {
  const pages = await wordpressFetch<WordPressPost[]>("/wp/v2/pages", {
    _embed: 1,
    slug,
    per_page: 1,
  })

  return pages[0] ? toCmsPost(pages[0]) : null
}
