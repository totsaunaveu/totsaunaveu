import Avatar from "./avatar";
import Categories from "./categories";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <section>
      <div className="mb-2 md:mb-2">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-8 mb-8 md:mb-12">
        <div>
          <h3 className="mb-2 text-2xl lg:text-3xl leading-tight">
            <Link href={`/${slug}`}>
              <span
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-xs">
            <Categories categories={categories} />
            <Date dateString={date} />
            <Avatar author={author} />.
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  );
}
