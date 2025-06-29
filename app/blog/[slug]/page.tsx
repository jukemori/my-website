import { getBlogPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { OptimizedImage } from '@/components/optimized-image'
import { formatDate } from '@/lib/blog'
import { mdxComponents } from './_components/mdx-components'
import rehypeHighlight from 'rehype-highlight'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const posts = getBlogPosts()
  const slug = (await params).slug
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl pb-24 md:pb-10">
      {post.tags && post.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-lg text-muted">
              {tag}
            </span>
          ))}
        </div>
      )}
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>
      <time className="mb-10 block text-sm text-muted">
        {formatDate(post.date)} &nbsp;·&nbsp; {post.readingTime}
      </time>
      <div className="mb-8 w-full">
        <OptimizedImage
          src={post.image}
          alt={post.title}
          className="h-auto w-full rounded-lg"
          width={900}
          height={500}
          priority
          imageType="hero"
        />
      </div>
      <div className="prose max-w-none dark:prose-invert prose-p:text-muted">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypeHighlight]],
            },
          }}
        />
      </div>

      <div className="mt-16 border-t border-border pt-6">
        <p className="text-muted">
          Subscribe to my blog posts via{' '}
          <a
            href="/feed.xml"
            className="text-foreground hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSS Feed
          </a>
        </p>
      </div>
    </article>
  )
}
