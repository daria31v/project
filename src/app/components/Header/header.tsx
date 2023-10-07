import React from "react";

import Link from "next/link";
const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Welcome</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/blog">Blog&Tips</Link>
        <Link href="/partners">Our Partners</Link>       
      </nav>
    </header>
  );
};

export default Header;
