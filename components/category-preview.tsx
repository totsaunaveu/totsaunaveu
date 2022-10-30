import CoverImage from "./cover-image";
import Link from "next/link";

export default function CategoryPreview({
  name,
  description,
  slug,
}) {
  return (
    <div>
      <h2 className="text-2xl mb-3 leading-snug">
        <Link href={`/${slug}`}>
          <span
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: name }}
          ></span>
        </Link>
      </h2>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div>Aquí deben aparecer los post de cada categoría.</div>
    </div>
  );
}
