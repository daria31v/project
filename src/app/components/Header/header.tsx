import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";
import { AuthNav } from "../Auth/authNav";
import { UserMenu } from "../Registrate/userMenu";
import camera from "../../../../public/icon/camera.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container flex py-12 items-center h-20 ">
      <div className="w-60 h-20">
        <Link href="/">
        <Logo src="" alt="logo" />
      </Link>
      </div>
      
      <div className="hidden xl:flex">
        <nav className="xl:flex gap-8 justify-evenly font-bold text-base ml-28">
          <Link href="/">Welcome</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog & Tips</Link>
          <Link href="/partners">Our partners</Link>
        </nav>
        <AuthNav />
        {/* <UserMenu/> */}
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </div>

      <button
        type="button"
        className="inline-block xl:hidden ml-auto"
      >
        <Image src={camera} alt="" />
      </button>
    </header>
  );
};

export default Header;
