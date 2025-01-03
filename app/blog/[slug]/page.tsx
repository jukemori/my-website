import { getBlogPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const posts = getBlogPosts()
  const post = posts.find((post) => post.slug === (params?.slug || ''))

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-2xl py-16">
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <time className="text-muted mb-8 block text-sm">
        {new Date(post.date).toLocaleDateString()}
      </time>
      <div className="prose dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
