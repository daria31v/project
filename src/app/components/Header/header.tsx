import React from 'react'
import Logo from '../Logo/logo'
import Link from 'next/link'
import { AuthNav } from '../Auth/authNav'
// import { UserMenu } from "../Registrate/userMenu";
// import camera from "../../../../public/icon/camera.svg";
// import Image from "next/image";
import MobileMenu from '../MobileMenu/MobileMenu'
import { Navigation } from '../Navigation/navigation'
import { ContainerComponent } from '../ContainerComponent/containerComponent'

const Header = () => {
  return (
    <header>
      <ContainerComponent>
        <div className="flex items-center h-20 md:px-24 md:py-8 px-5 py-5">
          <div className="w-48 h-20 ">
            <Link href="/">
              <Logo src="" alt="logo" />
            </Link>
          </div>

          <div className="hidden xl:flex">
            <Navigation />
            <AuthNav />
            {/* <UserMenu/> */}
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          </div>
          <MobileMenu />
        </div>
      </ContainerComponent>
    </header>
  )
}

export default Header
