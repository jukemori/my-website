import { cache } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { READING_SPEED_WPM } from './constants'

export interface BlogPost {
  slug: string
  title: string
  date: string
  image: string
  content: string
  tags?: string[]
  readingTime: string
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / READING_SPEED_WPM)
  return `${minutes} min read`
}

// Cache the expensive file system operations for better build performance
export const getBlogPosts = cache((): BlogPost[] => {
  const postsDirectory = path.join(process.cwd(), 'content/blogs')
  const years = fs.readdirSync(postsDirectory)

  const posts = years.flatMap((year) => {
    const yearPath = path.join(postsDirectory, year)
    const files = fs.readdirSync(yearPath)

    return files.map((fileName) => {
      const fullPath = path.join(yearPath, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const slug = data.slug || fileName.replace(/\.mdx$/, '')

      return {
        slug,
        title: data.title,
        date: data.date,
        image: data.image,
        content,
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
      }
    })
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
})

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
