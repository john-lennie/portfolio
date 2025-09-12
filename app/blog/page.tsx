// app/blog/page.tsx
import { getAllArticles } from "@/lib/api"
import { draftMode } from 'next/headers';
import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document, BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"

export default async function Blog() {
  const { isEnabled } = draftMode(); 
  const posts = await getAllArticles(3, isEnabled)

  return (
    <main className="animate-fade-in-slow flex py-16 min-h-[100svh]">
      <section className="w-full mt-12">
        <div className="mx-auto container">
          <h1 className="display-2 mb-4">
            Blog
          </h1>
          <h2 className="text-xs">
            Deep & shallow dives on various topics.
          </h2>
          <div className="pt-20 grid gap-20 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.sys.id}
                className="h-full w-5/6 lg:w-full flex flex-col overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="display-2 mb-4 w-5/6">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-xs italic lg:w-5/6">
                  {post.summary}
                </p>
                <Link
                  className="text-xs link-primary"
                  href={`/blog/${post.slug}`}
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
