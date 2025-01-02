export default function Blog() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold">Blog</h1>
      <div className="space-y-8">
        {/* Example blog post */}
        <article className="border-b pb-8">
          <h2 className="mb-2 text-2xl font-bold">My First Blog Post</h2>
          <p className="mb-4 text-gray-600">Posted on [date]</p>
          <p>This is where your blog post content will go.</p>
        </article>
      </div>
    </>
  )
}
