import { TechIcon } from './tech-icon'

interface Education {
  school: string
  period: string
  location: string
  degree: string
  activities?: string
  projectDemo?: string
  technologies?: string[]
}

export function EducationCard({
  school,
  period,
  location,
  degree,
  activities,
  projectDemo,
  technologies,
}: Education) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold">{school}</h3>
      <p className="text-muted text-sm leading-relaxed">{period}</p>
      <p className="text-muted mb-2 text-sm leading-relaxed">{location}</p>
      <p className="text-muted leading-relaxed">{degree}</p>
      {activities && <p className="text-muted leading-relaxed">{activities}</p>}

      {technologies && (
        <div className="text-muted mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </div>
      )}

      {projectDemo && (
        <div className="mt-4">
          <p className="text-muted mb-2 leading-relaxed">
            Final Group Project:
          </p>
          <iframe
            width="560"
            height="315"
            src={projectDemo}
            title="Project Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mb-2 h-[200px] w-full rounded-lg shadow-md md:h-[315px] md:w-[560px]"
          />
        </div>
      )}
    </div>
  )
}
