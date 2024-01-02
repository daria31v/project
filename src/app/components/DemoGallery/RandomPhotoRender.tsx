import Image from 'next/image'
import cave from '../../../../public/images/cave.webp'
import girl from '../../../../public/images/girl.webp'
import house from '../../../../public/images/house.webp'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    photo: cave,
  },
  {
    id: 2,
    photo: girl,
  },
  {
    id: 3,
    photo: house,
  },
]

interface PhotoProps {
  id: string
  photo: string
}

export default function RandomPhotoRender() {
  return (
    <div className="">
      <h1 className="text-ml xl:text-start text-center uppercase font-normal font-extra text-white">
        Share your journey
      </h1>
      <div className="text-center md:text-justify max-w-auto mx-auto mt-7 pb-14">
        <ul className="grid gap-4 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 xl:gap-16 md:gap-10">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="rounded-2xl mb-16 md:mb-0  hover:shadow-xl hover:shadow-nude focus:shadow-nude">
                <Link href="/gallery">
                  <Image
                    src={post.photo}
                    alt="random photo"
                    className="w-full overflow-hidden object-cover h-[410px] rounded-2xl"
                    priority
                  ></Image>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
