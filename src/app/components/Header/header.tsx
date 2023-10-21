import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";
import { AuthNav } from "../Auth/authNav";
import { UserMenu } from "../Registrate/userMenu";

const Header = () => {
  return (
    <header className="container flex py-8 items-center h-20 ">
      
      <Link href="/">
        <Logo src="" alt="logo" />
      </Link>
      
      <nav className="flex gap-8 justify-evenly font-semibold text-base mx-40">
        <Link href="/">Welcome</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/blog">Blog & Tips</Link>
        <Link href="/partners">Our partners</Link>       
      </nav>
    <AuthNav/>
    {/* <UserMenu/> */}
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      
    </header>
  );
};

export default Header;






