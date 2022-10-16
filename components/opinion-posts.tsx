import PostPreview from './post-preview'

export default function OpinionPosts({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-12 mb-12">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            categories={node.categories}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
