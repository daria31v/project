import Image from 'next/image'
import buda from '../../../../public/images/buda.jpg'
import fly from '../../../../public/images/fly.jpg'
import photo from '../../../../public/images/photo.jpg'

const posts = [
  {
    id: 1,
    photo: buda
  },
  {
    id: 2,
    photo: fly
  },
  {
    id: 3,
    photo: photo
  }
]

interface PhotoProps {
  id: string
  photo: string
}

export default function RandomPhotoRender() {
  return (
    <div className="md:mb-20 mb-6">
      <h1 className="text-ml xl:text-start text-center uppercase font-bold">Share your journey</h1>
      <div className="mt-12 sm:text-center md:text-justify max-w-auto mx-auto py-10">
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 xl:gap-16 md:gap-10">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="rounded-3xl sm:mb-16 md:mb-0">
                <Image
                  src={post.photo}
                  alt="random photo"
                  className="w-full h-full overflow-hidden  object-cover max-h-[350px] rounded-2xl"
                ></Image>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
