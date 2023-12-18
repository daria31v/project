'use client'
import Logo from '../Logo/logo'
import Link from 'next/link'
import { AuthNav } from '../AuthNav/authNav'
import { UserMenu } from '../UserMenu/userMenu'
import MobileMenu from '../MobileMenu/MobileMenu'
import { Navigation } from '../Navigation/navigation'
import { Container } from '../Container/container'
import { useSession } from 'next-auth/react'

const Header = () => {
  const session = useSession()


  return (
    <header>
      <Container>
        <div className="flex items-center h-20 pt-12 ">
          <div className="w-48 mr-auto">
            <Link href="/">
              <Logo src="" alt="logo" width={100} height={40} />
            </Link>
          </div>

          <div className="hidden xl:flex xl:items-center">
            <Navigation />
            <div className="xl:ml-48 xl:flex gap-8 text-secondary font-bold text-base grid mt-8 xl:mt-0">
              {session.data ? <UserMenu /> : <AuthNav />}
            </div>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}

export default Header
