import { signOut } from 'next-auth/react'
import Link from 'next/link'

export const UserMenu = () => {
  return (
    <>
      <Link href="/profile" className="text-orange  hover:text-white focus:text-white active:visited:text-white">
        My profile
      </Link>
      <Link
        href="#"
        onClick={() =>
          signOut({
            callbackUrl: '/',
          })
        }
        className=" text-orange hover:text-white focus:text-white active:visited:text-white"
      >
        LogOut
      </Link>
    </>
  )
}
