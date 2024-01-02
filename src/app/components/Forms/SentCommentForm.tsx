'use client'
import Image from 'next/image'
import user from '../../../../public/images/user.webp'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/utils/authConfig'
import Button from '../Button/Buttons'

export default function SentCommentForm() {
  // const session = getServerSession(authConfig)
  return (
    <div>
      <form className="md:flex items-center md:gap-6 xl:pl-[55px]">
        <div className="">
          <Image src={user} alt="user photo" width={80} height={80} className="mx-auto" />
          <span className="mt-4 inline-block text-base ">Lisa Manobal </span>
        </div>
        <div className="">
          <textarea placeholder='What are your thoughts?' className="xl:w-[767px] w-44 xl:h-[150px] bg-peach_light rounded-md text-white p-4 placeholder:text-grey_text"></textarea>
          <div className=" flex gap-3 justify-end items-end w-[767px] mt-2">
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
