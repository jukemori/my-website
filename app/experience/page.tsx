import workExperiencesData from '@/content/experience/workExperience.json'
import educationData from '@/content/experience/education.json'
import skillsData from '@/content/experience/skills.json'
import { ExperienceCard } from '@/components/experience-card'
import { EducationCard } from '@/components/education-card'

export default function Experience() {
  return (
    <div className="pb-24 md:pb-10">
      <h1 className="mb-12 text-3xl font-bold md:text-4xl">Experience</h1>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
        {workExperiencesData.experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Education</h2>
        {educationData.education.map((edu) => (
          <EducationCard key={edu.school} {...edu} />
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Top Skills</h2>
          <ul className="text-muted ml-6 list-disc">
            {skillsData.topSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Languages</h2>
          <ul className="text-muted ml-6 list-disc">
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
