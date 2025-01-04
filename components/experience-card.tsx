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
        <p className="text-muted text-sm leading-relaxed">{period}</p>
        <p className="text-muted text-sm leading-relaxed">{location}</p>
        <p className="text-muted mt-2 leading-relaxed">{description}</p>

        {technologies && (
          <div className="text-muted mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <i key={tech} className={`devicon-${tech}-plain`}></i>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
