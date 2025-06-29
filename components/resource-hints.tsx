export function ResourceHints({ imageUrls }: { imageUrls: string[] }) {
  return (
    <>
      {imageUrls.map((url) => (
        <link
          key={url}
          rel="preload"
          as="image"
          href={url}
          type="image/webp"
        />
      ))}
    </>
  )
}