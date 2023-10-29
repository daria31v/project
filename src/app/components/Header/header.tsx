import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";
import { AuthNav } from "../Auth/authNav";
// import { UserMenu } from "../Registrate/userMenu";
import camera from "../../../../public/icon/camera.svg";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Navigation } from "../Navigation/navigation";

const Header = () => {
  return (
    <header className="container flex py-12 items-center h-20 bg-yellow px-4 mx-auto">
      <div className="w-48 h-20 mr-auto">
        <Link href="/">
        <Logo src="" alt="logo" />
      </Link>
      </div>
      
      <div className="hidden xl:flex">
       <Navigation/>
        <AuthNav />
        {/* <UserMenu/> */}
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </div>
{/* 
      <button
        type="button"
        className="inline-block xl:hidden ml-auto"
      >
        <Image src={camera} alt="" />
      </button> */}
 
      <MobileMenu />
    </header>
  );
};

export default Header;
