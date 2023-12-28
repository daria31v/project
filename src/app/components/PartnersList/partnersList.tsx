import Link from 'next/link'
import Image from 'next/image'
// import partners from './partnersData.json'
import lenovo from '../../../../public/images/lenovo.png'
import canon from '../../../../public/images/canon.png'
import nikon from '../../../../public/images/nikon.png'
import leica from '../../../../public/images/leica.png'
import apple from '../../../../public/images/apple.jpeg'
import samsung from '../../../../public/images/samsung.webp'
import sony from '../../../../public/images/sony.jpeg'
import olympus from '../../../../public/images/olympus.png'
import fujifilm from '../../../../public/images/fujifilm.jpeg'
import partners from '../PartnersList/partnersData.json'
import { FC } from 'react'

console.log(partners);
interface Partner {
  id: number
  name: string
  logo: string
  web: string
  image_path: string
  src: string
}

export const PartnersList = () => {
  return (
    <div className="mb-20">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 xl:gap-16 md:gap-10">
        {partners.map((partner: any) => (
          <li key={partner.id} className="transition transform hover:-translate-y-3 motion-reduce:transition-none">
            <div className=" bg-blue_light  text-center rounded-3xl  hover:bg-orange_light hover:text-white py-5">
              <Link href={partner.web} className="cursor-pointer">
              <div className="w-44 h-44 rounded-full bg-white mx-auto text-center overflow-hidden ">
                <Image src={partner.logo} alt='name company' width={176} height={176} className="mx-auto w-full"></Image>
              </div>
                <p className="mt-4 font-normal text-sm">{partner.name}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
