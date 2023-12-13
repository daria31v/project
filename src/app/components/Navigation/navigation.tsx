import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="flex flex-col xl:flex-row gap-8 font-bold text-base ">
      <Link href="/" className="hover:text-blue">Welcome</Link>
      <Link href="/gallery" className="hover:text-blue">Gallery</Link>
      <Link href="/blog" className="hover:text-blue">Blog & Tips</Link>
      <Link href="/partners" className="hover:text-blue">Our partners</Link>
    </nav>
  )
}
