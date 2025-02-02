import { TechIcon } from '@/components/icons/tech-icon'

interface WorkExperience {
  company: string
  position: string
  period: string
  location: string
  description: string
  technologies?: string[]
}

export function ExperienceCard({
  company,
  position,
  period,
  location,
  description,
  technologies,
}: WorkExperience) {
  return (
    <div className="mb-8">
      <h3 className="mb-2 text-xl font-bold">{company}</h3>
      <div className="mb-8">
        <p className="font-bold leading-relaxed">{position}</p>
        <p className="text-sm leading-relaxed text-muted">{period}</p>
        <p className="text-sm leading-relaxed text-muted">{location}</p>
        <p className="mt-2 leading-relaxed text-muted">{description}</p>

        {technologies && (
          <div className="mt-4 flex flex-wrap gap-2 text-muted">
            {technologies.map((tech) => (
              <TechIcon key={tech} name={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
