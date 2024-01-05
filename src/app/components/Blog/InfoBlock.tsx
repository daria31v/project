import Image from 'next/image'
import Button from '../Button/Buttons'
import CounterInfoBlock from './CounterInfoBlock'
import HeartSVG from '../../../../public/icon/HeartSVG'
import user from '../../../../public/images/user.webp'

export default function InfoBlock({ post }: any) {
  return (
    <>
      <div className="my-8  justify-between items-center">
        <div className="flex gap-9">
          <div>
            <Image
              src={post.avatar || user}
              alt="user photo"
              width={100}
              height={100}
              className="mx-auto rounded-full h-[100px] w-[100px] object-cover "
            />
          </div>

          <div className="grid content-center">
            <span className=" text-primary text-medium font-normal uppercase">{post.name}</span>
            <span className=" text-base text-grey_text mt-2">Posted {post.date}</span>
          </div>
        </div>
      <CounterInfoBlock />
        {/* Likes */}
        <div className="flex justify-end items-center">
          <div className=" text-base rounded-md px-3 py-3 text-primary ">
            <Button className="flex justify-center items-center h-6 border border-orange text-orange bg-white px-4 py-4 rounded-2xl cursor-pointer  hover:bg-gradient-to-l hover:shadow-orange active:shadow-orange shadow-md">
              <HeartSVG className="stroke-orange path h-5 active:fill-orange"/>
              <span>Like</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
