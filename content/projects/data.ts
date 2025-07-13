import { Project, IconType } from '@/app/projects/_lib/types'
import mingleTimeImage from '@/public/images/projects/mingletime/main.webp'
import goalPilotImage from '@/public/images/projects/goal-pilot/main.webp'

const projectData: Project[] = [
  {
    title: 'Goal Pilot',
    description:
      'Goal Pilot is an AI-powered goal management app that transforms long-term goals into daily actionable tasks with intelligent roadmap generation and progress tracking.',
    image: {
      src: goalPilotImage,
      alt: 'Goal Pilot dashboard showing goal overview and progress tracking',
    },
    techStack: [
      'nextjs',
      'react',
      'typescript',
      'tailwindcss',
      'supabase',
      'postgresql',
      'openai',
      'vitest',
    ],
    links: [
      {
        href: 'https://goal-pilot-ai.vercel.app/',
        label: 'Demo',
        icon: IconType.ExternalLink,
      },
      {
        href: '/blog/i-developed-an-app-in-a-week',
        label: 'Blog',
        icon: IconType.BookOpen,
      },
      {
        href: 'https://github.com/jukemori/goal-pilot',
        label: 'GitHub',
        icon: IconType.GithubIcon,
      },
    ],
  },
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
