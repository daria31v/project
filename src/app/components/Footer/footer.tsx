import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";

// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container py-6 md:grid md:grid-flow-col sm:block xl:gap-96 sm:gap-2 justify-center items-center">
      <div className="grid gap-2 font-text font-semibold sm:items-center">
        <Link href="/about" className="hover:text-secondary">
          About us
        </Link>
        <Link href="/partners" className="hover:text-secondary">
          Our parners
        </Link>
      </div>
      <div className="font-bold md:w-80">
        <div className="flex md:justify-end sm:justify-center w-60 h-20">
          <Logo src="" alt="logo" />
        </div>
        <p className="md:text-end sm:text-center">
          The world is wonderful if you notice it!{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
