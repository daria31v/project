import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";
import { AuthNav } from "../Auth/authNav";
import { UserMenu } from "../Registrate/userMenu";

const Header = () => {
  return (
    <header className="container flex justify-around gap-4 pr-[100px] pl-[100px] pt-7 pb-7 items-center mr-auto ml-auto h-[88px] ">
      <Link href="/">
        <Logo src={""} alt={""} />
      </Link>
      
      <nav className="flex gap-8 justify-evenly font-semibold text-base">
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






