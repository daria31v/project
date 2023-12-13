import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../../public/images/photo.jpg'
import image_two from '../../../public/images/photo_2.jpg'
import image_three from '../../../public/images/photo_4.jpg'
import budda from '../../../public/images/photo_6.jpg'
import photo from '../../../public/images/photo_7.jpg'
import photo_v from '../../../public/images/fly.jpg'
import { Container } from '../components/Container/container'

// SEO
export const metadata: Metadata = {
  title: 'Blog&Tips | A World in My Lens',
  description: '',
}

// async function getData() {
//   const data = await fetch("http://.../post", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return data.json();
// }

const posts = [
  {
    id: 1,
    photo: image,
    title: 'Title of Blog',
    nikname: 'Fox',
    avatar: 'http://',
    date: '27.09.2023',
  },
  {
    id: 2,
    photo: image_two,
    title: 'Title of Blog',
    nikname: 'Fox',
    avatar: 'http://',
    date: '24.08.2023',
  },
  {
    id: 3,
    photo: photo,
    title: 'Title of Blog',
    nikname: 'Fox',
    avatar: 'http://',
    date: '01.10.2023',
  },
  {
    id: 4,
    photo: image_three,
    title: 'Title of Blog',
    nikname: 'Fox',
    avatar: 'http://',
    date: '27.10.2023',
  },
  {
    id: 5,
    photo: photo_v,
    title: 'Title of Blog',
    nikname: 'Fox',
    avatar: 'http://',
    date: '17.10.2023',
  },
  {
    id: 6,
    photo: budda,
    title: 'Title of Blog',
    nikname: 'Fox',
    avatar: 'http://',
    date: '15.11.2023',
  },
]

interface BlogProps {
  params: {
    id: string
    photo: string
    title: string
    nikname: string
    avatar: string
    date: string
  }
}

export default function Blog({ params: { id, photo, title, nikname, avatar, date } }: BlogProps) {
  return (
    <Container>
      <div className="mt-16">
        <h1 className="text-ml font-semibold text-start uppercase mb-4 mt-4">Blog & Tips</h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <div className="mb-10">
          <p className="text-medium text-secondary font-semibold mb-3">Choose category</p>
          <div className="md:flex gap-3 columns-2 text-base">
            <div>
              <span>All</span>
              <input id="" type="radio"></input>
            </div>
            <div>
              <span>Rivers</span>
              <input id="" type="radio"></input>
            </div>
            <div>
              <span>Mountains</span>
              <input id="" type="radio"></input>
            </div>
            <div>
              <span>Oceans</span>
              <input id="" type="radio"></input>
            </div>
            <div>
              <span>Waterfall</span>
              <input id="" type="radio"></input>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <ul className="md:grid md:grid-cols-2 xl:grid-cols-3 justify-between md:gap-10 mb-10">
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-white shadow-lg hover:shadow-orange_light focus:shadow-orange_light rounded-3xl py-3 px-3 md:mb-0 mb-5 transition transform hover:-translate-y-3 motion-reduce:transition-none"
              >
                <Link href={`/blog/post/${post.id}`}>
                  <div className=" h-[200px] overflow-hidden rounded-3xl ">
                    <Image src={post.photo} alt="..."></Image>
                  </div>
                  <div className="flex items-center">
                    <div className="py-2">
                      <h3 className="text-ml font-bold text-secondary hover:text-orange_light">
                        {post.title}
                      </h3>
                      <p className="text-base mt-2">{post.date}</p>
                    </div>
                    <div className="ml-auto">
                      <button type="button" className="cursor-pointer">
                        <svg
                          className="hover:fill-orange_light"
                          width="34"
                          height="30"
                          viewBox="0 0 34 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.8914 3.1945C9.15773 -1.21423 -2.58917 7.44006 3.91925 15.1502L14.9953 27.4105C15.7719 28.2702 17.1142 28.2922 17.9186 27.4585L29.7943 15.1502C31.3817 13.3669 33.474 7.91213 29.7943 4.45041C26.0987 0.973774 20.5872 1.77545 16.7774 5.7092L8.0179 13.8944"
                            stroke="#3C64B1"
                            strokeWidth="3"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="24.0263"
                            cy="10.1053"
                            r="3.97368"
                            stroke="#3C64B1"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* loading more*/}
        <div className="flex justify-center items-center py-4">
          <button className="cursor-pointer animate-bounce">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="30"
                fill="url(#paint0_radial_101_183)"
                fillOpacity="0.3"
              />
              <circle cx="30" cy="30" r="24" fill="#3C64B1" />
              <path d="M23 24L29.8205 36L37 24" stroke="#EBF2FF" strokeWidth="3" />
              <defs>
                <radialGradient
                  id="paint0_radial_101_183"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(30 30) rotate(72.8973) scale(40.8044)"
                >
                  <stop offset="0.0902774" stopColor="#FAFAFA" stopOpacity="0" />
                  <stop offset="0.543402" stopColor="#BAD1FF" />
                  <stop offset="1" stopColor="#275ABD" />
                </radialGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </Container>
  )
}
