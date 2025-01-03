import { getBlogPosts } from '@/lib/blog'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="py-16">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block transition-opacity hover:opacity-90"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                  width={1000}
                  height={1000}
                />
              )}
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
