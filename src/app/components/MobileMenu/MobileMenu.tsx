'use client'
import Link from "next/link";
import { AuthNav } from "../Auth/authNav";
import { UserMenu } from "../Registrate/userMenu";
import { Navigation } from "../Navigation/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import camera from "../../../../public/icon/camera.svg";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
// console.log(isOpen);
  return (
    <div onClick={handleClose} className=" py-4 w-60 h-auto md:flex">
      <button
        onClick={handleOpen}
        type="button"
        className="inline-block xl:hidden ml-auto"
      >
        <Image src={camera} alt="" />
      </button>
      <div className="block"  onClick={handleClose}>
        <Navigation />
        <AuthNav />
        {/* <UserMenu/> */}
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav>} */}
      </div>
    </div>
  );
}

