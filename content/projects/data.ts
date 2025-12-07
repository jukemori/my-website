import { Project, IconType } from '@/app/projects/_lib/types'
import prepGenieImage from '@/public/images/projects/prep-genie/main.webp'
import mingleTimeImage from '@/public/images/projects/mingletime/main.webp'
import goalPilotImage from '@/public/images/projects/goal-pilot/main.webp'

const projectData = [
  {
    title: 'PrepGenie',
    description:
      'PrepGenie is a smart meal prep and nutrition planner that helps users generate personalized meal plans from a curated recipe database, track macronutrients, and create automated grocery lists.',
    image: {
      src: prepGenieImage,
      alt: 'PrepGenie dashboard showing meal plan and nutrition tracking',
    },
    techStack: [
      'nextjs',
      'react',
      'typescript',
      'tailwindcss',
      'supabase',
      'postgresql',
      'vitest',
      'playwright',
    ],
    links: [
      {
        href: 'https://prep-genie-eight.vercel.app',
        label: 'Demo',
        icon: IconType.ExternalLink,
      },
      {
        href: 'https://github.com/jukemori/prep-genie',
        label: 'GitHub',
        icon: IconType.GithubIcon,
      },
    ],
  },
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
] satisfies Project[]

export default projectData
