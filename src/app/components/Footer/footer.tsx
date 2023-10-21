import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";

// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container py-6 md:flex sm:block sm:gap-2  items-center">
      <div className="grid gap-2 font-extra font-semibold sm:items-center">
        <Link href="/about" className="hover:text-secondary">
          About us
        </Link>
        <Link href="/partners" className="hover:text-secondary">
          Our parners
        </Link>
      </div>
      <div className="font-bold md:ml-auto">
        {/* <div className="flex md:justify-end sm:justify-center w-60 h-20">
          <Logo src="" alt="logo" />
        </div> */}
        <p className="md:text-start sm:text-center">
        The World is Wonderful: Catch the Moment!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
