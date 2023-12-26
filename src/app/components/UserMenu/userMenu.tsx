import { signOut } from 'next-auth/react'
import Link from 'next/link'

export const UserMenu = () => {
  return (
    <>
      <Link href="/profile" className="hover:text-orange_light">
        My profile
      </Link>
      <Link
        href="#"
        onClick={() =>
          signOut({
            callbackUrl: '/',
          })
        }
        className="hover:text-orange_light"
      >
        LogOut
      </Link>
    </>
  )
}
