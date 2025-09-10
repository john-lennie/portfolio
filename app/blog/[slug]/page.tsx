import { getAllBlogPosts, getBlogPost } from "@/lib/api"
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES, BLOCKS, type Hyperlink } from "@contentful/rich-text-types"
import Link from "next/link"
import type { ReactNode } from "react"
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Document } from "@contentful/rich-text-types"
import { notFound } from "next/navigation"

type BlogPost = {
  sys: { id: string }
  title: string
  slug: string
  subTitle: string
  content: { json: Document }
}

export const options: Options = {
  renderNode: {
    // Hyperlink handling
    [INLINES.HYPERLINK]: (node: any, children: ReactNode): ReactNode => {
      const url: string = node.data.uri ?? ""

      return url.startsWith("/") ? (
        <Link href={url} className="link-primary">
          {children}
        </Link>
      ) : (
        <span className='inline-flex items-center link-primary'>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            {children}
          </a>
          <ExternalLinkIcon className='w-[1em] h-[1em] ml-[1px]' />
        </span>
      )
    },
    // Paragraph handling
    [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode): ReactNode => {
      return <p className="text-sm">{children}</p>
    },
  },
}

// Generate static params for all blog slugs
export async function generateStaticParams() {
  const allPosts: BlogPost[] = await getAllBlogPosts()
  return allPosts.map((post) => ({ slug: post.slug }))
}

// Blog detail page
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post: BlogPost | undefined = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex items-center justify-center min-h-screen py-32">
      <section className="w-full md:w-3/4 lg:w-3/5">
        <div className="container space-y-20 px-4 md:px-6">
          <div className="space-y-2 flex flex-col items-center">
            <h1 className="text-base text-center font-bold tracking-tighter sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-xs text-center w-3/4 italic">
              {post.subTitle}
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <div className="prose">
                  {documentToReactComponents(post.content.json, options)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
