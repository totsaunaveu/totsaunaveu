import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      layout="responsive"
      width={50}
      height={35}
      priority
      objectFit="contain"
      alt={`Imagen destacada de ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  const altText = coverImage?.node.altText;
  
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
      <div className="max-w-2xl mx-auto text-xs text-neutral-400 md:text-sm">{altText}</div>
    </div>
    
  );
}
