import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-20 flex flex-col items-center text-center md:mt-24">
        <Skeleton className="mb-8 h-60 w-60 rounded-full md:h-72 md:w-72" />

        <Skeleton className="mb-6 h-10 w-64" />

        <Skeleton className="mb-8 h-6 w-48" />

        <div className="mb-24 flex justify-center gap-12">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-5 w-5" />
          ))}
        </div>
      </div>
    </div>
  )
}
