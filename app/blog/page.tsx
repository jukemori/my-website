import { getBlogPosts } from '@/lib/blog'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="mx-auto max-w-2xl py-16">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block transition-opacity hover:opacity-70"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <time className="text-muted-text-sm">
                {new Date(post.date).toLocaleDateString()}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
