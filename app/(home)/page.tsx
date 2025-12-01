import { OptimizedImage } from '@/components/optimized-image'
import profileImage from '@/public/images/profile.webp'
import {
  InstagramIcon,
  LinkedInIcon,
  BlueskyIcon,
} from '@/components/icons/social-icons'
import { GithubIcon } from '@/components/icons/github-icon'

interface SocialLink {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  ariaLabel: string
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.instagram.com/tinyjap/',
    icon: InstagramIcon,
    label: 'Instagram',
    ariaLabel: 'Follow on Instagram',
  },
  {
    href: 'https://github.com/jukemori',
    icon: GithubIcon,
    label: 'GitHub',
    ariaLabel: 'View GitHub profile',
  },
  {
    href: 'https://www.linkedin.com/in/jun-ukemori/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
    ariaLabel: 'Connect on LinkedIn',
  },
  {
    href: 'https://bsky.app/profile/jukemori.bsky.social',
    icon: BlueskyIcon,
    label: 'Bluesky',
    ariaLabel: 'Follow on Bluesky',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-20 flex flex-col items-center text-center md:mt-24">
        <OptimizedImage
          width={288}
          height={288}
          src={profileImage}
          alt="Profile Picture"
          className="profile-glow mb-8 h-60 w-60 rounded-full object-cover md:h-72 md:w-72"
          priority
          imageType="profile"
        />

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Jun Ukemori</h1>
        <h3 className="text-muted mb-8 text-base md:text-lg">
          Software Engineer in Tokyo
        </h3>

        <div className="mb-24 flex justify-center gap-8">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label, ariaLabel }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="text-primary transition-colors hover:opacity-70"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
