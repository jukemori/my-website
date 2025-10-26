import { cn } from '@/lib/utils'

interface PageHeaderProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function PageHeader({
  children,
  className,
  as: Component = 'h1',
}: PageHeaderProps) {
  const baseStyles = {
    h1: 'mb-8 text-3xl font-bold md:text-4xl',
    h2: 'mb-5 text-xl font-semibold',
    h3: 'mb-4 text-lg font-semibold',
  }

  return (
    <Component className={cn(baseStyles[Component], className)}>
      {children}
    </Component>
  )
}
