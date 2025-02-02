import { Skeleton } from '@/components/skeleton'

export default function AboutPageLoading() {
  return (
    <div className="pb-24 md:pb-10">
      <Skeleton className="mb-8 h-10 w-48" />

      <section className="mb-8">
        <Skeleton className="mb-5 h-7 w-32" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mx-auto my-12 h-[250px] w-[350px] md:h-[350px] md:w-[590px]" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mx-auto my-12 h-[250px] w-[350px] md:h-[350px] md:w-[590px]" />
      </section>

      <section className="mb-8">
        <Skeleton className="mb-5 h-7 w-44" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mx-auto my-12 h-[250px] w-[350px] md:h-[350px] md:w-[590px]" />
      </section>

      <section className="mb-8">
        <Skeleton className="mb-5 h-7 w-28" />
        <Skeleton className="mb-5 h-24" />
        <Skeleton className="mb-5 h-16" />
      </section>
    </div>
  )
}
