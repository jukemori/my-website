import { ProjectCard } from '@/app/projects/_components/project-card'
import projectData from '@/content/projects/data'
import { PageContainer } from '@/components/page-container'
import { PageHeader } from '@/components/page-header'

export const revalidate = 3600 // 1 hour

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
