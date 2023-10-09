import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container flex justify-around gap-4 p-2 border-b border-black mb-4 items-center mr-auto ml-auto">
      <Logo src={""} alt={""} />
      <nav className="flex gap-4 justify-evenly">
        <Link href="/">Welcome</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/blog">Blog&Tips</Link>
        <Link href="/partners">Our Partners</Link>       
      </nav>
      {/* Auth / User */}
    </header>
  );
};

export default Header;






