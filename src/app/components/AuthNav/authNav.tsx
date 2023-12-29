import Link from 'next/link'

export const AuthNav = () => {
  return (
    <>
      <Link href="/login" className="text-orange hover:text-white focus:text-white active:visited:text-white">Log In</Link>
      <Link href="/register" className="text-orange hover:text-white focus:text-white active:visited:text-white">Join us</Link>
    </>
  )
}
