import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div> */}
      <div className="mb-2 md:mb-4 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div> */}
        <div className="mb-2 text-sm">
          Publicado el <Date dateString={date} />
          <Categories categories={categories} /> {''}
          por <Avatar author={author} />.
        </div>
      </div>
    </>
  )
}
