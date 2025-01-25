import { TechIcon } from '../../../components/tech-icon'

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
      <p className="text-sm leading-relaxed text-muted">{period}</p>
      <p className="mb-2 text-sm leading-relaxed text-muted">{location}</p>
      <p className="leading-relaxed text-muted">{degree}</p>
      {activities && <p className="leading-relaxed text-muted">{activities}</p>}

      {technologies && (
        <div className="mt-4 flex flex-wrap gap-2 text-muted">
          {technologies.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </div>
      )}

      {projectDemo && (
        <div className="mt-4">
          <p className="mb-2 leading-relaxed text-muted">
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
