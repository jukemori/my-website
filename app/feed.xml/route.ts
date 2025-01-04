import { Feed } from 'feed'
import { getBlogPosts } from '@/lib/blog'

export async function GET() {
  const posts = getBlogPosts()
  const siteURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.jun-ukemori.com'

  const feed = new Feed({
    title: "Jun Ukemori's Blog",
    description:
      'Software Engineer based in Tokyo, Japan. Writing about tech, lifestyle, and more.',
    id: siteURL,
    link: siteURL,
    language: 'en',
    image: `${siteURL}/images/profile.webp`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Jun Ukemori`,
    author: {
      name: 'Jun Ukemori',
      link: siteURL,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteURL}/blog/${post.slug}`,
      link: `${siteURL}/blog/${post.slug}`,
      description: post.content.slice(0, 200) + '...',
      date: new Date(post.date),
      image: post.image ? `${siteURL}${post.image}` : undefined,
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
