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
    <main className="flex min-h-screen py-32 bg-white">
      <section className="w-full">
        <div className="mx-auto container space-y-16">
          {/* <h1 className="text-base text-center">
            Blog Entries
          </h1> */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.sys.id}
                className="h-full flex flex-col overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-base mb-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs w-3/4 italic">
                  {post.subTitle}
                </p>

                <div className="flex mr-6">
                  <Link
                    className="text-xs uppercase link-primary"
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
