import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-3xl md:text-3xl font-bold text-center uppercase leading-none mb-20 mt-4">
      <Link href="/">
        <a>
        <span className="text-xl">Dels</span> <br />Valencians
        </a>
      </Link>
    </h2>
  )
}