import Image from 'next/image'
import buddha from '../../../../public/images/buddha.jpg'
import fly from '../../../../public/images/sun.jpg'
import photo from '../../../../public/images/photo_5.jpg'

const posts = [
  {
    id: 1,
    photo: buddha,
  },
  {
    id: 2,
    photo: fly,
  },
  {
    id: 3,
    photo: photo,
  },
]

interface PhotoProps {
  id: string
  photo: string
}

export default function RandomPhotoRender() {
  return (
    <div className="">
      <h1 className="text-ml xl:text-start text-center uppercase font-normal font-extra">Share your journey</h1>
      <div className="sm:text-center md:text-justify max-w-auto mx-auto mt-7 pb-14">
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 xl:gap-16 md:gap-10">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="rounded-3xl sm:mb-16 md:mb-0">
                <Image
                  src={post.photo}
                  alt="random photo"
                  className="w-full h-full overflow-hidden object-cover max-h-[410px] rounded-2xl"
                ></Image>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
