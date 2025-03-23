import { getBlogPosts } from '@/lib/blog'
import { BlogImage } from './_components/blog-image'
import Link from 'next/link'
import { formatDate } from '@/lib/blog'

export const revalidate = 3600

export default async function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="pb-24 md:pb-10">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Blog Posts</h1>
      <ul className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:place-items-start">
        {posts.map((post, index) => (
          <li
            key={post.slug}
            className="w-full max-w-96 rounded-lg border border-border shadow md:max-w-full"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block transition-opacity hover:opacity-90"
            >
              {post.image && (
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  priority={index < 2}
                />
              )}
              <div className="p-4">
                {post.tags && post.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-sm text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                <time className="text-sm text-muted">
                  {formatDate(post.date)} &nbsp;·&nbsp; {post.readingTime}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
