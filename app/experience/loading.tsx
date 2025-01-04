import { Skeleton } from '@/components/ui/skeleton'

export default function ExperiencePageLoading() {
  return (
    <div className="pb-24 md:pb-10">
      <section className="mb-16">
        <Skeleton className="mb-8 h-10 w-48" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-8">
            <Skeleton className="mb-4 h-6 w-64" />
            <Skeleton className="mb-2 h-4 w-32" />
            <Skeleton className="mb-4 h-4 w-48" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </section>

      <section className="mb-16">
        <Skeleton className="mb-8 h-10 w-36" />
        {[1, 2].map((i) => (
          <div key={i} className="mb-8">
            <Skeleton className="mb-4 h-6 w-64" />
            <Skeleton className="mb-2 h-4 w-32" />
            <Skeleton className="h-16 w-full" />
          </div>
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <Skeleton className="mb-8 h-10 w-36" />
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="mb-2 h-4 w-32" />
          ))}
        </div>

        <div>
          <Skeleton className="mb-8 h-10 w-36" />
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="mb-2 h-4 w-48" />
          ))}
        </div>
      </section>
    </div>
  )
}
