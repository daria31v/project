'use client'
import Image from 'next/image'
import user from '../../../../public/images/user.webp'
import Button from '../Button/Buttons'
import { useSession } from 'next-auth/react'

export default function SentCommentForm() {
  const {data:session} = useSession()


  return (
    <div>
      <form className="md:flex items-center md:gap-6 ">
        <div className="text-center">
          <Image src={session?.user?.image} alt="user photo" width={80} height={80} className="mx-auto rounded-full" />
          <span className="mt-4 inline-block text-base text-primary">{session?.user?.name}</span>
        </div>
        <div className="w-full relative">
          <textarea placeholder='What are your thoughts?' className=" w-full h-[200px] bg-peach_light rounded-md text-primary p-4 placeholder:text-grey_text"></textarea>
          
          <div className=" flex gap-3 justify-end items-end xl:w-[600px] md:w-[400px] mt-2 absolute top-[65%] right-4">
            <Button className="flex h-[30px] justify-center items-center bg-white border border-orange py-2 px-4 text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">
              Cancel
            </Button>
            <Button className="flex h-[30px] justify-center items-center bg-white border border-orange py-2 px-4 text-orange rounded-3xl hover:text-white hover:bg-gradient-to-l hover:from-[#F38605] hover:via-transparent hover:to-[#F3860542] shadow-md">
              Sent
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
