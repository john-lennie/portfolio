import { getAllArticles, getArticle } from "@/lib/api"
import { draftMode } from 'next/headers';
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES, BLOCKS, MARKS, Document, type Hyperlink } from "@contentful/rich-text-types"
import Link from "next/link"
import type { ReactNode } from "react"
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { notFound } from "next/navigation"
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode): ReactNode => {
      // 1. Check if paragraph is completely empty
      const isEmpty = node.content.every(
        (c: any): c is Text =>
          c.nodeType === "text" && c.value.trim().length === 0
      );

      if (isEmpty) return <br />;

      // 2. Detect if all child text nodes are marked as `code`
      const allCode = node.content.every(
        (c: any) =>
          c.nodeType === "text" &&
          c.marks?.some((m: any) => m.type === MARKS.CODE)
      );

      if (allCode) {
        // Extract the raw string so we don't double-wrap marks
        const codeText = node.content.map((c: any) => c.value).join("");
        return (
          <p>
            <SyntaxHighlighter
            language="text"
            style={oneDark}
            >
              {codeText}
            </SyntaxHighlighter>
          </p>
        );
      }

      // 3. Default paragraph
      return <p>{children}</p>;
    },
    // Heading 1 handling
    [BLOCKS.HEADING_1]: (_node: any, children: ReactNode): ReactNode => {
      return <h1 className="text-sm uppercase mt-8 lg:mt-16 mb-2 lg:mb-4">{children}</h1>
    },
    // Heading 2 handling
    [BLOCKS.HEADING_2]: (_node: any, children: ReactNode): ReactNode => {
      return <h2 className="text-sm uppercase mt-8 lg:mt-16 mb-2 lg:mb-4">{children}</h2>
    },
  },
}

// Generate static params for all blog slugs
export async function generateStaticParams() {
  const allPosts = await getAllArticles()
  return allPosts.map((post) => ({ slug: post.slug }))
}

// Blog detail page
export default async function BlogPostPage({
  params,
}) {

  const { isEnabled } = draftMode(); 
  const post = await getArticle(params.slug, isEnabled)

  if (!post) {
    notFound()
  }

  return (
    <main className="container grid lg:grid-cols-[50%_50%] animate-fade-in-slow py-16 min-h-[92vh]">
      <section className="mt-12">
        <h1 className="text-base uppercase mb-4 w-2/3">
          {post.title}
        </h1>
        <h2 className="text-xs italic lg:w-2/3">
          {post.summary}
        </h2>
        {post.articleImage &&
          <Image
            alt="Article Image"
            className="aspect-video w-full overflow-hidden rounded-xl object-cover"
            height="365"
            src={post.articleImage.url}
            width="650"
          />
        }
        <div className="pt-20 space-y-8 lg:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <div className="prose">
                {documentToReactComponents(post.details.json, options)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
