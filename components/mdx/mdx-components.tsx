import { ReactNode } from 'react'
import { MdxImage } from './mdx-image'
import { PortraitImage } from './mdx-portrait-image'

// Custom components for MDX elements
function MdxHeading2({ children }: { children: ReactNode }) {
  return <h2 className="mt-8 mb-4 text-2xl font-bold">{children}</h2>
}

function MdxHeading3({ children }: { children: ReactNode }) {
  return <h3 className="mt-6 mb-3 text-xl font-semibold">{children}</h3>
}

function MdxParagraph({ children }: { children: ReactNode }) {
  return <p className="text-muted mb-4 leading-relaxed">{children}</p>
}

function MdxLink({ href, children }: { href: string; children: ReactNode }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      className="text-foreground hover:text-primary underline underline-offset-4"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

function MdxList({ children }: { children: ReactNode }) {
  return (
    <ul className="text-muted mb-4 ml-6 list-disc space-y-2">{children}</ul>
  )
}

function MdxListItem({ children }: { children: ReactNode }) {
  return <li className="leading-relaxed">{children}</li>
}

function MdxBlockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-border bg-muted/30 my-6 border-l-4 py-4 pl-6">
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
