import { getBlogPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { OptimizedImage } from '@/components/optimized-image'
import { formatDate } from '@/lib/blog'
import { mdxComponents } from '@/components/mdx'
import { TagList } from '@/components/tag-list'
import { cache } from 'react'
import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { MDX_OPTIONS } from '@/lib/mdx-config'

type Props = {
  params: Promise<{
    slug: string
  }>
}

// Memoize to prevent duplicate calls between generateMetadata and page
const getPost = cache((slug: string) => {
  const posts = getBlogPosts()
  return posts.find((post) => post.slug === slug)
})

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const post = getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`
  const imageUrl = post.image
    ? `${SITE_CONFIG.url}${post.image}`
    : `${SITE_CONFIG.url}/images/profile.webp`

  // Extract first 160 characters for description
  const description =
    post.content
      .replace(/#{1,6}\s/g, '')
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/`{1,3}.*?`{1,3}/g, '')
      .slice(0, 160) + '...'

  return {
    title: post.title,
    description,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
    keywords: post.tags,
    openGraph: {
      type: 'article',
      title: post.title,
      description,
      url: postUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 900,
          height: 500,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [SITE_CONFIG.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [imageUrl],
      creator: SITE_CONFIG.author.twitter,
    },
    alternates: {
      canonical: postUrl,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const slug = (await params).slug
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`
  const imageUrl = post.image
    ? `${SITE_CONFIG.url}${post.image}`
    : `${SITE_CONFIG.url}/images/profile.webp`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_CONFIG.author.name,
    },
    description: post.content.slice(0, 160) + '...',
    keywords: post.tags?.join(', '),
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  }

  return (
    <article className="mx-auto max-w-3xl pb-24 md:pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TagList tags={post.tags} className="mb-4" tagClassName="text-lg" />
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
          options={MDX_OPTIONS}
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
