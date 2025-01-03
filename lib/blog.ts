import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  content: string
}

export function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'content/blogs')
  const years = fs.readdirSync(postsDirectory)

  const posts = years.flatMap((year) => {
    const yearPath = path.join(postsDirectory, year)
    const files = fs.readdirSync(yearPath)

    return files.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(yearPath, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        content,
      }
    })
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}
