import Link from 'next/link'

export const AuthNav = () => {
  return (
    <>
      <Link href="/login" className="hover:text-orange_light">Log In</Link>
      <Link href="/registration" className="hover:text-orange_light">Join us</Link>
    </>
  )
}
