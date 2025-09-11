// app/blog/page.tsx
import { getAllBlogPosts } from "@/lib/api"
import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document, BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"

type BlogPost = {
  sys: { id: string }
  title: string
  slug: string
  subTitle: string
  content: { json: Document }
}

export default async function Blog() {
  const posts: BlogPost[] = await getAllBlogPosts(3)

  return (
    <main className="animate-fade-in-slow flex min-h-screen py-32 bg-white">
      <section className="w-full">
        <div className="mx-auto container">
          <div className="space-y-1">
            <h1 className="text-base">
              Blog
            </h1>
            <h2 className="text-xs">
              Deep & shallow dives on various topics.
            </h2>
          </div>
          <div className="pt-20 grid gap-20 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.sys.id}
                className="h-full w-5/6 lg:w-full flex flex-col overflow-hidden space-y-2"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-base">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs italic lg:w-2/3">
                  {post.subTitle}
                </p>

                <div className="flex">
                  <Link
                    className="text-xs link-primary mt-2"
                    href={`/blog/${post.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
