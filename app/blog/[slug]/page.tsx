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
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          <div className="w-[90vw] md:w-full mb-6">
            <SyntaxHighlighter
              language="html"
              style={vs}
              wrapLongLines
              customStyle={{
                fontSize: '0.75rem',
                borderRadius: '0.5rem',     // 👈 8 px rounded corners
                paddingRight: '20px',
                width: '100%',
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflowWrap: "break-word"
              }}
            >
              {codeText}
            </SyntaxHighlighter>
          </div>
        );
      }

      // 3. Default paragraph
      return <p>{children}</p>;
    },
    // Heading 1 handling
    [BLOCKS.HEADING_1]: (_node: any, children: ReactNode): ReactNode => {
      return <h1 className="heading-1 w-5/6">{children}</h1>
    },
    // Heading 2 handling
    [BLOCKS.HEADING_2]: (_node: any, children: ReactNode): ReactNode => {
      return <h2 className="heading-2 w-5/6">{children}</h2>
    },
    // Heading 3 handling
    [BLOCKS.HEADING_3]: (_node: any, children: ReactNode): ReactNode => {
      return <h3 className="heading-3 w-5/6">{children}</h3>
    },
    // Heading 4 handling
    [BLOCKS.HEADING_4]: (_node: any, children: ReactNode): ReactNode => {
      return <h4 className="heading-4 w-5/6">{children}</h4>
    },
    // Heading 5 handling
    [BLOCKS.HEADING_5]: (_node: any, children: ReactNode): ReactNode => {
      return <h5 className="heading-5 w-5/6">{children}</h5>
    },
    // Heading 6 handling
    [BLOCKS.HEADING_6]: (_node: any, children: ReactNode): ReactNode => {
      return <h6 className="heading-6 w-5/6">{children}</h6>
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
    <main className="container grid lg:grid-cols-[50%_50%] animate-fade-in-slow py-16 min-h-[10svh]">
      <section className="mt-12">
        <h1 className="display-2 mb-4 w-5/6">
          {post.title}
        </h1>
        <h2 className="text-xs italic lg:w-4/6">
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
