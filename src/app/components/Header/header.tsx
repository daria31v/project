'use client'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { AuthNav } from '../AuthNav/authNav'
import { UserMenu } from '../User/userMenu'
import MobileMenu from '../MobileMenu/MobileMenu'
import { Navigation } from '../Navigation/Navigation'
import { Container } from '../Container/container'
import { useSession } from 'next-auth/react'

const Header = () => {
  const session = useSession()

  return (
    <Container>
      <header className="bg-secondary h-[88px] py-3 xl:px-[100px] md:px-12 px-6">
        <div className="flex">
          <div className="w-48 mr-auto">
            <Link href="/">
              <Logo src="" alt="logo" width={114} height={48} />
            </Link>
          </div>

          <div className="hidden xl:flex xl:items-center">
            <div className=" mr-36">
              <Navigation />
            </div>

            <div className="xl:flex gap-8 text-secondary font-extra_bold text-medium grid mt-8 xl:mt-0">
              {session.data ? <UserMenu /> : <AuthNav />}
            </div>
          </div>
          <MobileMenu />
        </div>
      </header>
    </Container>
  )
}

export default Header
