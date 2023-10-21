import React from "react";
import Logo from "../Logo/logo";
import Link from "next/link";

// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container py-6 grid grid-flow-col gap-96 justify-center items-center">
      <div className="grid gap-2 font-text font-semibold">
        <Link href='/about' className="hover:text-secondary">About us</Link>
        <Link href='/partners' className="hover:text-secondary">Our parners</Link>
      </div>
      <div className="font-bold w-80">
        <div className="flex justify-end">
         <Logo src="" alt="logo" />
         </div>
        <p className="text-end">The world is wonderful if you notice it! </p>
      

       
      </div>
    </footer>
  );
};

export default Footer;
