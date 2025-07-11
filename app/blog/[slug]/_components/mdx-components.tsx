import { LazyImage } from '@/components/lazy-image'
import { ReactNode } from 'react'

// Custom Image component for MDX content
function MdxImage({
  src,
  alt,
  priority,
}: {
  src: string
  alt?: string
  priority?: boolean
}) {
  // Handle relative image paths
  const imageSrc = src.startsWith('/') ? src : `/${src}`

  return (
    <span className="my-8 block w-full">
      <LazyImage
        src={imageSrc}
        alt={alt || 'Blog image'}
        width={700}
        height={400}
        className="h-auto w-full rounded-lg shadow-md"
        imageType="hero"
        priority={priority}
      />
    </span>
  )
}

// Custom Portrait Image component for images where height > width
function PortraitImage({
  src,
  alt,
  priority,
}: {
  src: string
  alt?: string
  priority?: boolean
}) {
  // Handle relative image paths
  const imageSrc = src.startsWith('/') ? src : `/${src}`

  return (
    <span className="my-8 flex justify-center">
      <span className="block max-w-md">
        <LazyImage
          src={imageSrc}
          alt={alt || 'Blog image'}
          width={400}
          height={600}
          className="h-auto w-full rounded-lg shadow-md"
          imageType="content"
          priority={priority}
        />
      </span>
    </span>
  )
}

// Custom components for other MDX elements
function MdxHeading2({ children }: { children: ReactNode }) {
  return <h2 className="mb-4 mt-8 text-2xl font-bold">{children}</h2>
}

function MdxHeading3({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 mt-6 text-xl font-semibold">{children}</h3>
}

function MdxParagraph({ children }: { children: ReactNode }) {
  return <p className="mb-4 leading-relaxed text-muted">{children}</p>
}

function MdxLink({ href, children }: { href: string; children: ReactNode }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      className="text-foreground underline underline-offset-4 hover:text-primary"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

function MdxList({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-muted">{children}</ul>
  )
}

function MdxListItem({ children }: { children: ReactNode }) {
  return <li className="leading-relaxed">{children}</li>
}

function MdxBlockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-border bg-muted/30 py-4 pl-6">
      {children}
    </blockquote>
  )
}

function MdxCode({ children }: { children: ReactNode }) {
  return <code className="rounded px-2 py-1 font-mono text-sm">{children}</code>
}

// Export all custom components
export const mdxComponents = {
  // Replace default img with optimized version
  img: MdxImage,
  PortraitImage,

  // Enhanced typography
  h2: MdxHeading2,
  h3: MdxHeading3,
  p: MdxParagraph,
  a: MdxLink,
  ul: MdxList,
  li: MdxListItem,
  blockquote: MdxBlockquote,
  code: MdxCode,
}
