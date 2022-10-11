import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Categories from "./categories";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <div>
      <div className="mb-2">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-sm mb-4">
        <Date dateString={date} />. Escrito por{' '}
        <Avatar author={author} />.
        {/* <Categories categories={categories} />. */}
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </div>
  );
}
