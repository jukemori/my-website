import footballImage from '@/public/images/about/about-football.webp'
import mexicoImage from '@/public/images/about/about-mexico.webp'
import boxingImage from '@/public/images/about/about-boxing.webp'
import { PageContainer } from '@/components/page-container'
import { ContentImage } from '@/components/content-image'
import { PageHeader } from '@/components/page-header'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Jun Ukemori',
  description:
    'Learn more about Jun Ukemori - Software Engineer, former collegiate football player, and tech enthusiast based in Tokyo, Japan.',
  openGraph: {
    title: 'About | Jun Ukemori',
    description:
      'Learn more about Jun Ukemori - Software Engineer and tech enthusiast based in Tokyo.',
    url: 'https://www.jun-ukemori.com/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Jun Ukemori',
    description: 'Software Engineer and tech enthusiast based in Tokyo, Japan.',
  },
}

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader>About Me</PageHeader>

      <section className="mb-8">
        <PageHeader as="h2">Background</PageHeader>
        <p className="mb-5 leading-relaxed text-muted">
          I grew up in Tokyo with a deep fascination for American movies and TV
          shows, which inspired a dream to explore the United States. At 15, I
          took a leap and became an international exchange student in Georgia,
          experiencing American culture firsthand.
        </p>
        <p className="mb-5 leading-relaxed text-muted">
          After graduating high school, my college journey took me across the
          U.S.—from the sunny vibes of Bay Area of California to the plains of
          Wyoming and even the quiet rural areas of upstate New York. While
          playing collegiate football, I explored various career paths but
          struggled to find a clear direction.
        </p>
        <ContentImage
          src={footballImage}
          alt="Jun Ukemori playing collegiate football"
          priority
        />
        <p className="mb-5 leading-relaxed text-muted">
          In 2019, I unexpectedly developed a passion for learning Spanish.
          Despite struggling with the language in high school and college, I
          embraced self-study, using tools like Duolingo to improve. Motivated
          by my progress, I began my career in Mexico, working as an Assistant
          Manager at a logistics company for nearly three years.
        </p>
        <p className="mb-5 leading-relaxed text-muted">
          I later transitioned to a role at Casio as a Sales Planning Executive,
          but it became clear that my interests lay elsewhere. That realization
          led me to pursue a career in tech. I returned to Japan in 2023,
          completed an intensive web development bootcamp at Le Wagon, and began
          my journey as a frontend developer in Tokyo.
        </p>

        <ContentImage src={mexicoImage} alt="Jun Ukemori in Mexico City" />
      </section>

      <section className="mb-8">
        <PageHeader as="h2">Path to Programming</PageHeader>
        <p className="mb-5 leading-relaxed text-muted">
          My transition into programming wasn&apos;t a straight path. Working in
          corporate roles made me reflect on the significance of meaningful
          work. During my time in Mexico City, I encountered digital nomads
          whose lifestyles inspired me to explore coding.
        </p>
        <p className="mb-5 leading-relaxed text-muted">
          At first, programming felt like learning an entirely new language, but
          I quickly found it thrilling. I immersed myself in learning, attended
          a bootcamp, and connected with tech enthusiasts at meetups, which
          expanded my perspective and reshaped my career path.
        </p>
        <p className="mb-5 leading-relaxed text-muted">
          My first role as a full-stack engineer at a digital consulting firm
          exposed me to a variety of technologies and industries. The fast-paced
          nature of client work honed my adaptability and problem-solving
          skills. Seeking a more focused environment, I transitioned to a
          product-driven company specializing in logistics digital services.
        </p>
        <p className="mb-5 leading-relaxed text-muted">
          Currently, I work as a software engineer, collaborating with
          cross-functional teams to develop scalable systems and improve user
          experiences. My role enables me to apply my technical expertise while
          continuously growing and tackling new challenges.
        </p>
        <ContentImage
          src={boxingImage}
          alt="Jun Ukemori training in boxing gym"
        />
      </section>

      <section className="mb-8">
        <PageHeader as="h2">Interests</PageHeader>
        <p className="mb-5 leading-relaxed text-muted">
          Beyond programming, I&apos;m passionate about exploring different
          cultures and languages. My experiences living in multiple countries
          have shaped my perspective and fueled my curiosity for understanding
          diverse viewpoints and approaches to problem-solving.
        </p>
        <p className="mb-5 leading-relaxed text-muted">
          I enjoy staying active through boxing and other sports, which helps me
          maintain focus and discipline in both my personal and professional
          life. I also love traveling and discovering new places, which often
          provides fresh inspiration for my work.
        </p>
      </section>
    </PageContainer>
  )
}
