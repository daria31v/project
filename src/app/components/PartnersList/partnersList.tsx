import Link from 'next/link'
import Image from 'next/image'
// import partners from './partnersData.json'

const partners = [
  {
    "id": 1,
    "name": "Lenovo",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  },
  {
    "id": 2,
    "name": "Cannon",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  },
  {
    "id": 3,
    "name": "Apple",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  },
  {
    "id": 4,
    "name": "Samsung",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  },
  {
    "id": 5,
    "name": "Sony",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"

  },
  {
    "id": 6,
    "name": "Nikon",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  },
  {
    "id": 7,
    "name": "Leica",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  },
  {
    "id": 8,
    "name": "Olympus",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  },
  {
    "id": 9,
    "name": "Fujifilm",
    "logo": "https://asset.brandfetch.io/iddtMrgJvA/id9L7W04ae.png?updated=1667571544285",
    "web": "https://www.lenovo.com/cz/cs/?orgRef=https%253A%252F%252Fwww.google.com%252F"
  }
]


interface Partner {
  id: number
  name: string
  logo: string
  web: string
  src: string
}

export const PartnersList = () => {
  return (
    <div className="mb-20">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 xl:gap-16 md:gap-10">
        {partners.map((partner) => (
          <li key={partner.id} className="transition transform hover:-translate-y-3 motion-reduce:transition-none">
            <div className="w-72 h-60 bg-blue_light  text-center rounded-md py-5 hover:bg-orange_light hover:text-white ">
              <Link href={partner.web} className="cursor-pointer">
              <div className="w-40 h-40 rounded-full bg-white mx-auto text-center ">
                <Image src={partner.logo} alt='name company' width={160} height={160} className="mx-auto pt-4"></Image>
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
