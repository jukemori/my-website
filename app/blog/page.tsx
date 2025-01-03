import { getBlogPosts } from '@/lib/blog'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Blog Posts</h1>
      <ul className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:place-items-start">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border-border w-full max-w-96 rounded-lg border shadow md:max-w-full"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block transition-opacity hover:opacity-90"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  className="mb-4 h-48 rounded-t-lg object-cover md:h-60"
                  width={700}
                  height={700}
                />
              )}
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                <time className="text-muted text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
