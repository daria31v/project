import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="flex flex-col xl:flex-row gap-8 font-extra_bold text-medium text-nude">
      <Link href="/" className="hover:text-white focus:text-white active:visited:text-white">Welcome</Link>
      <Link href="/gallery" className="hover:text-white focus:text-white active:visited:text-white">Gallery</Link>
      <Link href="/blog" className="hover:text-white focus:text-white active:visited:text-white">Blog & Tips</Link>
      <Link href="/partners" className="hover:text-white focus:text-white active:visited:text-white">Our partners</Link>
    </nav>
  )
}
