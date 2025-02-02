import React from 'react'
import { ProjectCard } from '@/app/projects/_components/project-card'
import projectData from '@/content/projects/projects.json'
import { Project } from './_lib/types'

const typedProjectData = projectData as Project[]

const ProjectsPage = () => {
  return (
    <div className="pb-24 md:pb-10">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Projects</h1>
      <div className="space-y-8">
        {typedProjectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
