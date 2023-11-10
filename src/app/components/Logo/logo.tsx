import logo from '../../../../public/images/logo-old.png'

import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height }: LogoProps) => {
  return <Image src={logo} alt={alt} width={width} height={height} />
}

export default Logo
