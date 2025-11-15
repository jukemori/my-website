import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { preconnect } from 'react-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { WebVitals } from '@/components/web-vitals'
import { SkipLink } from '@/components/skip-link'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Jun Ukemori',
  description:
    'Software Engineer based in Tokyo, Japan. I like to build things with Next.js and Ruby on Rails.',
  metadataBase: new URL('https://www.jun-ukemori.com/'),
  openGraph: {
    title: 'Jun Ukemori',
    description:
      'Software Engineer based in Tokyo, Japan. I like to build things with Next.js and Ruby on Rails.',
    images: [
      {
        url: '/images/profile.webp',
        width: 1200,
        height: 630,
        alt: 'Jun Ukemori',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jun Ukemori',
    description:
      'Software Engineer based in Tokyo, Japan. I like to build things with Next.js and Ruby on Rails.',
    images: ['/images/profile.webp'],
  },
  other: {
    'line:image': '/images/profile.webp',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://www.jun-ukemori.com/feed.xml',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Use React 19 resource preloading APIs for better performance
  preconnect('https://fonts.googleapis.com')
  preconnect('https://fonts.gstatic.com')

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen p-8">
            <main id="main-content" className="mx-auto max-w-4xl pt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
        <WebVitals />
      </body>
    </html>
  )
}
