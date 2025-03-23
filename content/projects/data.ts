import { Project, IconType } from '@/app/projects/_lib/types'
import mingleTimeImage from '@/public/images/projects/mingletime/main.webp'

const projectData: Project[] = [
  {
    title: 'MingleTime',
    description:
      'MingleTime is a group calendar scheduling application that allows users to manage calendars, events, and collaborate with friends and family.',
    image: {
      src: mingleTimeImage,
      alt: 'MingleTime application screenshot',
    },
    techStack: [
      'nextjs',
      'react',
      'typescript',
      'tailwindcss',
      'rails',
      'ruby',
      'postgresql',
      'docker',
    ],
    links: [
      {
        href: 'https://mingletime.vercel.app/',
        label: 'Demo',
        icon: IconType.ExternalLink,
      },
      {
        href: '/blog/i-created-a-calendar-app',
        label: 'Blog',
        icon: IconType.BookOpen,
      },
      {
        href: 'https://github.com/jukemori/group-scheduler',
        label: 'Frontend',
        icon: IconType.GithubIcon,
      },
      {
        href: 'https://github.com/jukemori/group_scheduler_api',
        label: 'Backend',
        icon: IconType.GithubIcon,
      },
    ],
  },
]

export default projectData
