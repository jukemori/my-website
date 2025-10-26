import workExperiencesData from '@/content/experience/workExperience.json'
import educationData from '@/content/experience/education.json'
import skillsData from '@/content/experience/skills.json'
import { ExperienceCard } from '@/app/experience/_components/experience-card'
import { EducationCard } from '@/app/experience/_components/education-card'

export const revalidate = 86400 // 24 hours

export default function ExperiencePage() {
  return (
    <div className="pb-24 md:pb-10">
      <section className="mb-16">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Work Experience</h1>
        {workExperiencesData.experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </section>

      <section className="mb-16">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Education</h1>
        {educationData.education.map((edu) => (
          <EducationCard key={edu.school} {...edu} />
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Top Skills</h2>
          <ul className="ml-6 list-disc text-muted">
            {skillsData.topSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Languages</h2>
          <ul className="ml-6 list-disc text-muted">
            {skillsData.languages.map(({ language, level }) => (
              <li key={language}>
                {language} ({level})
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
