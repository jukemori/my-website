import { getBlogPosts } from '@/lib/blog'
import { PRIORITY_IMAGE_COUNT } from '@/lib/constants'
import { PageContainer } from '@/components/page-container'
import { PageHeader } from '@/components/page-header'
import { BlogPostCard } from './_components/blog-post-card'

export const revalidate = 3600 // 1 hour

export default async function BlogPage() {
  const posts = getBlogPosts()

  return (
    <PageContainer>
      <PageHeader>Blog Posts</PageHeader>
      <ul className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:place-items-start">
        {posts.map((post, index) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            priority={index < PRIORITY_IMAGE_COUNT}
          />
        ))}
      </ul>
    </PageContainer>
  )
}
