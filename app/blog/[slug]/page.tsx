import { getBlogPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { formatDate } from '@/lib/blog'
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
            <span key={tag} className="text-muted text-lg">
              {tag}
            </span>
          ))}
        </div>
      )}
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>
      <time className="text-muted mb-10 block text-sm">
        {formatDate(post.date)} &nbsp;·&nbsp; {post.readingTime}
      </time>
      <Image
        src={post.image}
        alt={post.title}
        className="mb-8 h-auto w-full object-cover md:h-96"
        width={700}
        height={700}
        priority
        loading="eager"
        placeholder="blur"
        blurDataURL={post.image}
      />
      <div className="prose dark:prose-invert prose-p:text-muted max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypeHighlight]],
            },
          }}
        />
      </div>

      <div className="border-border mt-16 border-t pt-6">
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
