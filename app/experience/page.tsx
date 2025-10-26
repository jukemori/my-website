import workExperiencesData from '@/content/experience/workExperience.json'
import educationData from '@/content/experience/education.json'
import skillsData from '@/content/experience/skills.json'
import { ExperienceCard } from '@/app/experience/_components/experience-card'
import { EducationCard } from '@/app/experience/_components/education-card'
import { PageContainer } from '@/components/page-container'
import { PageHeader } from '@/components/page-header'

export const revalidate = 86400 // 24 hours

export default function ExperiencePage() {
  return (
    <PageContainer>
      <section className="mb-16">
        <PageHeader>Work Experience</PageHeader>
        {workExperiencesData.experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </section>

      <section className="mb-16">
        <PageHeader>Education</PageHeader>
        {educationData.education.map((edu) => (
          <EducationCard key={edu.school} {...edu} />
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <PageHeader>Top Skills</PageHeader>
          <ul className="ml-6 list-disc text-muted">
            {skillsData.topSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <PageHeader>Languages</PageHeader>
          <ul className="ml-6 list-disc text-muted">
            {skillsData.languages.map(({ language, level }) => (
              <li key={language}>
                {language} ({level})
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageContainer>
  )
}
