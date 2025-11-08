import { ProjectCard } from '@/app/projects/_components/project-card'
import projectData from '@/content/projects/data'
import { PageContainer } from '@/components/page-container'
import { PageHeader } from '@/components/page-header'

export const revalidate = 3600 // 1 hour

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Jun Ukemori',
  description:
    'Explore my portfolio of web development projects built with Next.js, React, TypeScript, and Ruby on Rails.',
  openGraph: {
    title: 'Projects | Jun Ukemori',
    description:
      'Explore my portfolio of web development projects built with Next.js, React, TypeScript, and Ruby on Rails.',
    url: 'https://www.jun-ukemori.com/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Jun Ukemori',
    description:
      'Explore my portfolio of web development projects built with Next.js and React.',
  },
}

export default function ProjectsPage() {
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>
      <div className="space-y-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </PageContainer>
  )
}
