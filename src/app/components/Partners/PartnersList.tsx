import Link from 'next/link'
import Image from 'next/image'
import partners from './partnersData.json'

// console.log(partners);
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
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-16 md:gap-10">
        {partners.map((partner) => (
          <li key={partner.id} className="shadow-xl bg-peach hover:shadow-nude transition transform hover:-translate-y-1 motion-reduce:transition-none rounded-2xl">
            <div className="text-center rounded-md text-secondary hover:text-white  py-5 px-11">
              <Link href={partner.web} className="cursor-pointer">
              <div className=" rounded-full bg-white mx-auto text-center overflow-hidden ">
                <Image src={partner.logo} alt='name company' width={109} height={109} className="mx-auto w-full" priority></Image>
              </div>
                <p className="mt-4 font-normal text-sm text-primary ">{partner.name}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
