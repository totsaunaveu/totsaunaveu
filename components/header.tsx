import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-3xl md:text-3xl font-bold text-center uppercase leading-none mb-20 mt-4">
      <Link href="/">
        
        <span className="text-xl">Tots</span> <br />a una veu
       
      </Link>
    </h2>
  )
}