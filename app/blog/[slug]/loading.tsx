import { Skeleton } from '@/components/ui/skeleton'

export default function BlogPostLoading() {
  return (
    <article className="mx-auto max-w-3xl pb-24 md:pb-10">
      <Skeleton className="mb-4 h-8 w-3/4" />

      <Skeleton className="mb-12 h-4 w-24" />

      <Skeleton className="mb-8 h-[300px] w-full md:h-96" />

      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-[95%]" />
      </div>
    </article>
  )
}
