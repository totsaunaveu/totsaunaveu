import Avatar from "./avatar";
import CategoriesHome from "./categories-home";
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
          <h3 className="mb-4 text-2xl lg:text-3xl leading-tight">
            <Link href={`/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-sm">
            <Date dateString={date} />. Escrito por <Avatar author={author} />.
            {/* <CategoriesHome category={category} /> */}
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
