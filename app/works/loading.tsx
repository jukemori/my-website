import { Skeleton } from '@/components/ui/skeleton'

export default function WorksPageLoading() {
  return (
    <div className="pb-24 md:pb-10">
      <Skeleton className="mb-8 h-10 w-32" />

      <div className="space-y-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  )
}
