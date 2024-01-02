import logo from '../../../../public/images/logo.png'

import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height }: LogoProps) => {
  return <Image src={logo} alt={alt} width={width} height={height} className="aspect-auto"/>
}

export default Logo
