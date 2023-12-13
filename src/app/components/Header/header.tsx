import Logo from '../Logo/logo'
import Link from 'next/link'
import { AuthNav } from '../AuthNav/authNav'
// import { UserMenu } from "../Registrate/userMenu";
import MobileMenu from '../MobileMenu/MobileMenu'
import { Navigation } from '../Navigation/navigation'
import { Container } from '../Container/container'

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center h-20 pt-12 ">
          <div className="w-48 mr-auto">
            <Link href="/">
              <Logo src="" alt="logo" width={150} height={100}/>
            </Link>
          </div>

          <div className="hidden xl:flex xl:items-center">
            <Navigation />
            <AuthNav />
            {/* <UserMenu/> */}
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}

export default Header
