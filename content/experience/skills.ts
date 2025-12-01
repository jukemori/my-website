export interface Language {
  language: string
  level: string
}

export interface Skills {
  topSkills: string[]
  languages: Language[]
}

export const skills: Skills = {
  topSkills: ['React.js', 'TypeScript', 'Ruby on Rails'],
  languages: [
    {
      language: 'Japanese',
      level: 'Native',
    },
    {
      language: 'English',
      level: 'Bilingual',
    },
    {
      language: 'Spanish',
      level: 'Full Professional',
    },
  ],
}
