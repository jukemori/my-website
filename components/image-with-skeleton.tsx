'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export function ImageWithSkeleton({
  src,
  alt,
  ...props
}: React.ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton className="absolute inset-0 h-48 rounded-t-lg md:h-60" />
      )}
      <Image
        src={src}
        alt={alt}
        {...props}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
