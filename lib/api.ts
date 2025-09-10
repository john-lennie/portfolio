// lib/api.ts
import type { Document } from "@contentful/rich-text-types"

const BLOG_POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  subTitle
  content {
    json
    links {
      assets {
        block {
          sys { id }
          url
          description
        }
      }
    }
  }
`

// Types
export type BlogPost = {
  sys: { id: string }
  title: string
  slug: string
  subTitle: string
  content: {
    json: Document
    links: {
      assets: {
        block: {
          sys: { id: string }
          url: string
          description: string
        }
      }[]
    }
  }
}

type ContentfulResponse<T> = {
  data?: {
    blogPostCollection?: {
      items: T[]
    }
  }
}

// Fetch wrapper
async function fetchGraphQL<T>(
  query: string,
  preview = false
): Promise<ContentfulResponse<T>> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!
            : process.env.CONTENTFUL_ACCESS_TOKEN!
        }`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60, tags: ["blogPosts"] }, // useful for Next.js revalidation
    }
  )

  return (await response.json()) as ContentfulResponse<T>
}

function extractBlogPostEntries<T>(
  fetchResponse: ContentfulResponse<T>
): T[] {
  return fetchResponse?.data?.blogPostCollection?.items ?? []
}

export async function getAllBlogPosts(
  limit = 5,
  isDraftMode = false
): Promise<BlogPost[]> {
  const posts = await fetchGraphQL<BlogPost>(
    `query {
      blogPostCollection(order: sys_publishedAt_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  )

  return extractBlogPostEntries(posts)
}

export async function getBlogPost(
  slug: string,
  isDraftMode = false
): Promise<BlogPost | undefined> {
  const post = await fetchGraphQL<BlogPost>(
    `query {
      blogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  )

  return extractBlogPostEntries(post)[0]
}
