import Link from 'next/link'
import Image from 'next/image'
import posts from '../../components/Blog/BlogList/posts.json'


export default function TopPost() {
  
  const topPost = posts[4]
  
  return (
    <div className="font-normal text-medium pb-14 ">
      <h2 className="text-ml text-center xl:text-center font-extra uppercase font-normal mb-7 text-secondary">
        people love to visit
      </h2>


      <div className="xl:flex md:block font-normal text-medium ">
        <div className="flex justify-center md:h-[320px] max-w-[706px] shadow-xl rounded-2xl xl:mr-auto">
          <Link href='/blog/post/5'>

          <Image
            src={topPost.photo}
            alt="..."
            width={706}
            height={347}
            className="rounded-2xl object-cover overflow-hidden shadow-lg hover:shadow-duna"
            priority
            ></Image>
          </Link>
        </div>

        <div className="mt-6 md:mt-8 xl:mt-0 xl:w-[338px] 2xl:w-[550px] ">
          <p className="uppercase text-center text-secondary font-semibold mb-2">{topPost.title}</p>
          <p className="text-justify font-extra indent-5 overflow-ellipsis overflow-hidden ... xl:w-[338px] 2xl:w-full xl:h-52">{topPost.tip}</p>
          <div className="flex justify-end">
          <Link href='/blog/post/5' className="text-small uppercase mt-1 font-bold text-secondary">... more</Link>

          </div>
        </div>
      </div>
    </div>
  )
}
