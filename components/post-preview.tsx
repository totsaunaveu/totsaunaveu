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
      <h3 className="text-2xl mb-2 leading-snug">
        <Link href={`/${slug}`}>
          <span
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></span>
        </Link>
      </h3>
      <div className="text-xs mb-2">
      <Categories categories={categories} />
            <Date dateString={date} />
            <Avatar author={author} />.
      </div>
      <div
        className="text-md leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </div>
  );
}
