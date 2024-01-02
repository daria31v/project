
import user from '../../../../public/images/user.webp'
import Image from 'next/image'
import Button from '../Button/Buttons'
import CounterInfoBlock from './CounterInfoBlock'

export default function InfoBlock ({post} : any) {


  return (
    <>
    <div className="my-8 flex justify-between items-center">
      
          <div className="flex gap-9">
            <div>
            <Image src={post.avatar} alt="user photo" width={100} height={100} className="mx-auto" />
            </div>

            <div className="grid content-center">
              <span className=" text-primary text-medium font-normal uppercase">{post.name}</span>
              <span className=" text-base text-grey_text mt-2">Posted {post.date}</span>
            </div>
          </div>
        {/* Likes */}
          <div>
            <div className=" text-base rounded-md px-5 py-3 text-primary ">
              <Button className="h-7 border border-orange text-orange bg-white px-4 py-1 rounded-2xl cursor-pointer hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">Like</Button>
            </div>
          </div>
    </div>
        <CounterInfoBlock/>
        </>
  )
}
