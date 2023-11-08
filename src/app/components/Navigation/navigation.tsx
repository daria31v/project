import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="flex flex-col xl:flex-row gap-8 font-bold text-base xl:ml-28">
      <Link href="/">Welcome</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/blog">Blog & Tips</Link>
      <Link href="/partners">Our partners</Link>
    </nav>
  )
}
