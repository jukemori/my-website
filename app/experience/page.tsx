import { experiences } from '@/content/experience/workExperience'
import { education } from '@/content/experience/education'
import { skills } from '@/content/experience/skills'
import { ExperienceCard } from '@/app/experience/_components/experience-card'
import { EducationCard } from '@/app/experience/_components/education-card'
import { PageContainer } from '@/components/page-container'
import { PageHeader } from '@/components/page-header'

export const revalidate = 86400 // 24 hours

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Jun Ukemori',
  description:
    'My professional work experience as a Software Engineer specializing in Next.js, React, TypeScript, and Ruby on Rails.',
  openGraph: {
    title: 'Experience | Jun Ukemori',
    description:
      'My professional work experience and technical skills as a Software Engineer.',
    url: 'https://www.jun-ukemori.com/experience',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Jun Ukemori',
    description: 'My professional work experience and technical skills.',
  },
}

export default function ExperiencePage() {
  return (
    <PageContainer>
      <section className="mb-16">
        <PageHeader>Work Experience</PageHeader>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </section>

      <section className="mb-16">
        <PageHeader>Education</PageHeader>
        {education.map((edu) => (
          <EducationCard key={edu.school} {...edu} />
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <PageHeader>Top Skills</PageHeader>
          <ul className="ml-6 list-disc text-muted">
            {skills.topSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <PageHeader>Languages</PageHeader>
          <ul className="ml-6 list-disc text-muted">
            {skills.languages.map(({ language, level }) => (
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
