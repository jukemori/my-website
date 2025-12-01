export interface WorkExperience {
  company: string
  position: string
  period: string
  location: string
  description: string
  technologies?: string[]
  employmentType: 'permanent' | 'freelance'
}

export const experiences: WorkExperience[] = [
  {
    company: 'SoftBank Corp.',
    position: 'Frontend Engineer',
    period: 'October 2025 - Present',
    location: 'Tokyo, Japan',
    description:
      'Designed and developed a cost estimation application for the sales team to calculate fiber optic network line costs between locations. Implemented new features, fixed bugs, and improved application performance. Wrote comprehensive unit and E2E tests to ensure code quality and reliability.',
    technologies: [
      'nextjs',
      'react',
      'typescript',
      'tailwindcss',
      'storybook',
      'jest',
      'playwright',
      'docker',
      'git',
    ],
    employmentType: 'freelance',
  },
  {
    company: 'Willbox Inc.',
    position: 'Software Engineer',
    period: 'January 2025 - October 2025',
    location: 'Kanagawa, Japan',
    description:
      'Contributed to the renewal development of a logistics SaaS platform, focusing on user interface design and implementation using React (Next.js) and TypeScript. Created comprehensive unit tests with Vitest to ensure code quality. Collaborated closely with product managers to define detailed feature specifications and documentation. Implemented E2E testing environments using Playwright, improving quality assurance. Developed and maintained a reusable UI component using Storybook, improving team productivity and UI consistency. Utilized GraphQL + urql for efficient data fetching and caching.',
    technologies: [
      'nextjs',
      'react',
      'typescript',
      'tailwindcss',
      'storybook',
      'graphql',
      'nodejs',
      'vitest',
      'playwright',
      'go',
      'docker',
      'git',
    ],
    employmentType: 'permanent',
  },
  {
    company: 'Sutrix Solutions Japan',
    position: 'Full Stack Engineer',
    period: 'September 2023 - December 2024',
    location: 'Tokyo, Japan',
    description:
      'Worked at a fast-paced digital consulting company specializing in client-driven projects. Contributed to the development of new features for web applications, enhancing functionality to meet client expectations. Built mobile applications using React Native and Single Page Applications with Vue.js. Developed CMS solutions leveraging WordPress, MySQL, PHP, and Docker. Resolved bugs and issues promptly, improving software quality and user experience. Adapted quickly to diverse tech stacks, demonstrating versatility in a dynamic environment. Collaborated with global teams across three different time zones, ensuring efficient project development and successful delivery.',
    technologies: [
      'react',
      'vuejs',
      'typescript',
      'javascript',
      'php',
      'docker',
      'mysql',
      'css3',
      'git',
    ],
    employmentType: 'permanent',
  },
  {
    company: 'Casio México',
    position: 'Sales Planning Executive',
    period: 'August 2022 - December 2022',
    location: 'Mexico City, Mexico',
    description:
      'Optimized inventory allocation, driving increased sales and customer satisfaction. Implemented cost-saving purchasing strategies, enhancing supply chain efficiency.',
    employmentType: 'permanent',
  },
  {
    company: 'Vantec Logistics Mexico, S.A. de C.V.',
    position: 'Assistant Manager',
    period: 'January 2020 - August 2022',
    location: 'Aguascalientes, Mexico',
    description:
      'Led all aspects of warehousing, transportation, and project management, ensuring client satisfaction. Analyzed expenses and proposed cost-saving measures, optimizing budget and service quality. Tracked project deliverables and managed working hours, ensuring timely completion and accurate billing.',
    employmentType: 'permanent',
  },
]
