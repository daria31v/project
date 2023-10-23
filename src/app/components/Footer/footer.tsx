import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";

// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container py-6 md:flex sm:block sm:gap-2  items-center bg-secondary">
      <div className="grid gap-2 font-extra font-semibold sm:items-center">
        <Link href="/about" className="hover:text-secondary">
          About us
        </Link>
        <Link href="/partners" className="hover:text-secondary">
          Our parners
        </Link>
        <p className="text-secondary mt-4">
        The World is Wonderful: Catch the Moment!
        </p>
      </div>
      <div className="font-bold md:ml-auto">
        <div className=" w-56 h-20 flex justify-end">
          <Logo src="" alt="logo" />
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
