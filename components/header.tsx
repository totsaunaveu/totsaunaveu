import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-3xl md:text-3xl font-bold text-center uppercase tracking-tight md:tracking-tighter leading-none mb-20 mt-8">
      <Link href="/">
        <a>
        <span className="text-lg">Dels</span> <br />Valencians
        </a>
      </Link>
    </h2>
  )
}
