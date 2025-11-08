import { Skeleton } from '@/components/skeleton'

export default function BlogPageLoading() {
  return (
    <div className="pb-24 md:pb-10">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Blog Posts</h1>
      <ul className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:place-items-start">
        {Array.from({ length: 4 }).map((_, i) => (
          <li
            key={i}
            className="w-full max-w-96 rounded-lg shadow-sm md:max-w-full"
          >
            <Skeleton className="h-48 rounded-t-lg md:h-60" />

            <div className="p-4">
              <Skeleton className="mb-2 h-6 w-3/4" />

              <Skeleton className="h-4 w-1/4" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
