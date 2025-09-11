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
      return <p className="text-xs">{children}</p>
    },
    // Heading 2 handling
    [BLOCKS.HEADING_2]: (_node: any, children: ReactNode): ReactNode => {
      return <h2 className="text-sm uppercase mt-8 lg:mt-12 mb-2 lg:mb-4">{children}</h2>
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
    <main className="container animate-fade-in-slow flex py-16 min-h-[92vh]">
      <section className="w-full lg:w-1/2 2xl:w-2/5 mx-auto mt-12">
        <h1 className="text-base text-center uppercase mb-4">
          {post.title}
        </h1>
        <h2 className="text-xs text-center italic">
          {post.subTitle}
        </h2>
        <div className="pt-20 space-y-8 lg:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <div className="prose">
                {documentToReactComponents(post.content.json, options)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
