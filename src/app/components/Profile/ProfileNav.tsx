import Link from 'next/link'

import LogOutBtn from '../Button/LogOutBtn'
import PostSVG from '../../../../public/icon/NewPostSVG'
import LogoutSVG from '../../../../public/icon/LogoutSVG'
import AccountSVG from '../../../../public/icon/AccountSVG'
import GallerySVG from '../../../../public/icon/GallerySVG'
const ProfileNav = () => {
  return (
    <>
      <nav className="grid grid-cols-1 font-medium text-medium text-secondary shadow-md">
        <Link
          href="/profile"
          className="px-6 h-[52px] flex gap-5 items-center py-2 border border-r-secondary border-b-0 bg-white hover:text-white focus:text-white hover:bg-secondary focus:bg-secondary active:text-white active:bg-secondary"
        >
          <AccountSVG />
          Account details
        </Link>
        <Link
          href="/profile/posts"
          className="px-6 h-[52px] flex gap-5 items-center py-2 border border-r-secondary border-b-0 bg-white hover:text-white focus:text-white hover:bg-secondary focus:bg-secondary active:text-white active:bg-secondary"
        >
          <PostSVG className="hover:stroke-white" />
          Posts
        </Link>
        <Link
          href="/profile/gallery"
          className="px-6 h-[52px] flex gap-5 items-center py-2 border border-r-secondary bg-white hover:text-white focus:text-white hover:bg-secondary focus:bg-secondary active:text-white active:bg-secondary"
        >
          <GallerySVG  />
          Gallery
        </Link>
        <LogOutBtn className=" px-6 h-[52px] text-secondary border-t-0 flex gap-5 items-center py-2 border border-r-secondary bg-white hover:text-white focus:text-white hover:bg-secondary focus:bg-secondary font-medium text-medium">
          <LogoutSVG />
          Log Out
        </LogOutBtn>
      </nav>
    </>
  )
}

export default ProfileNav
