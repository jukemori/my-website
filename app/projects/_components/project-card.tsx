import { TechIcon } from '@/components/icons/tech-icon'
import { ProjectLink } from './project-link'
import { ProjectImage } from './project-image'
import { ProjectCardProps } from '../_lib/types'
import { PRIORITY_IMAGE_COUNT } from '@/lib/constants'

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <div className="grid gap-8 md:grid-cols-2">
    <ProjectImage
      src={project.image.src}
      alt={project.image.alt}
      priority={index < PRIORITY_IMAGE_COUNT}
    />

    <div className="flex flex-col space-y-6">
      <div>
        <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
        <p className="leading-relaxed text-muted">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-3 text-muted">
        {project.techStack.map((tech, index) => (
          <TechIcon key={index} name={tech} />
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        {project.links.map((link, index) => (
          <ProjectLink
            key={index}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  </div>
)
