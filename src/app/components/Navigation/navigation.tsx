import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="flex flex-col xl:flex-row gap-8 font-bold text-base xl:ml-28">
      <Link href="/" className="hover:text-orange_light">Welcome</Link>
      <Link href="/gallery" className="hover:text-orange_light">Gallery</Link>
      <Link href="/blog" className="hover:text-orange_light">Blog & Tips</Link>
      <Link href="/partners" className="hover:text-orange_light">Our partners</Link>
    </nav>
  )
}
