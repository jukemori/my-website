import { getBlogPosts } from '@/lib/blog'
import { BlogImage } from './_components/blog-image'
import Link from 'next/link'
import { formatDate } from '@/lib/blog'
import { PRIORITY_IMAGE_COUNT } from '@/lib/constants'
import { TagList } from '@/components/tag-list'
import { PageContainer } from '@/components/page-container'
import { PageHeader } from '@/components/page-header'

export const revalidate = 3600 // 1 hour

export default async function BlogPage() {
  const posts = getBlogPosts()

  return (
    <PageContainer>
      <PageHeader>Blog Posts</PageHeader>
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
                  priority={index < PRIORITY_IMAGE_COUNT}
                />
              )}
              <div className="p-4">
                <TagList tags={post.tags} className="mb-3" />
                <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                <time className="text-sm text-muted">
                  {formatDate(post.date)} &nbsp;·&nbsp; {post.readingTime}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
