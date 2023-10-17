import React from "react";
import logo from "../../../../public/images/logo.png";

import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
 
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width = 70,
  height = 32,
 
}: LogoProps) => {
  return <Image src={logo} alt={alt} width={width} height={height} />;
};

export default Logo;
