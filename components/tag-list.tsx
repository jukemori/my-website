import { cn } from '@/lib/utils'

interface TagListProps {
  tags?: string[]
  className?: string
  tagClassName?: string
}

export function TagList({ tags, className, tagClassName }: TagListProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag) => (
        <span key={tag} className={cn('text-muted text-sm', tagClassName)}>
          {tag}
        </span>
      ))}
    </div>
  )
}
