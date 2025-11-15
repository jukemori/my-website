import Link from 'next/link'
import { formatDate } from '@/lib/blog'
import { TagList } from '@/components/tag-list'
import { BlogImage } from './blog-image'

interface BlogPostCardProps {
  post: {
    slug: string
    title: string
    date: string
    image?: string
    tags?: string[]
    readingTime: string
  }
  priority?: boolean
}

export function BlogPostCard({ post, priority = false }: BlogPostCardProps) {
  return (
    <li className="w-full max-w-96 rounded-lg border border-border shadow-sm md:max-w-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group block transition-opacity hover:opacity-90"
        prefetch={false}
      >
        {post.image && (
          <BlogImage src={post.image} alt={post.title} priority={priority} />
        )}
        <div className="p-4">
          <TagList tags={post.tags} className="mb-3" />
          <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <time className="text-sm text-muted">
            {formatDate(post.date)} &nbsp;·&nbsp; {post.readingTime}
          </time>
        </div>
      </Link>
    </li>
  )
}
