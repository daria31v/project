import Link from 'next/link'

export const AuthNav = () => {
  return (
    <div className="xl:ml-48 xl:flex gap-8 text-secondary font-bold text-base grid mt-8 xl:mt-0">
      <Link href="/login" className="hover:text-orange_light">Log In</Link>
      <Link href="/registration" className="hover:text-orange_light">Join us</Link>
    </div>
  )
}
