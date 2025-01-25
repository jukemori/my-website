import { Skeleton } from '@/components/ui/skeleton'

export default function WorksPageLoading() {
  return (
    <div className="pb-24 md:pb-10">
      <Skeleton className="mb-8 h-12 w-48" />

      <div className="space-y-8">
        {[1, 2, 3].map((index) => (
          <div key={index} className="grid gap-8 md:grid-cols-2">
            <Skeleton className="aspect-[590/350] w-full rounded-lg" />

            <div className="flex flex-col space-y-6">
              <div>
                <Skeleton className="mb-4 h-8 w-48" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-6 w-6" />
                ))}
              </div>

              <div className="mt-auto flex gap-4">
                {[1, 2].map((i) => (
                  <Skeleton key={i} className="h-5 w-24" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
