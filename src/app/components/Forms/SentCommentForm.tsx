'use client'
import Image from 'next/image'
import user from '../../../../public/images/user.webp'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/utils/authConfig'
import Button from '../Button/Buttons'

export default function SentCommentForm () {
    // const session = getServerSession(authConfig)
  return (
    <div>
        <form className="flex gap-14 pl-[55px]">
            <div className="text-center">
            <Image src={user} alt='user photo' width={60} height={60} className="ml-6"/> 
            <span>Lisa Manobal </span>
            </div>
            <div className="">
                <textarea className="w-[700px] h-[150px] relative bg-green_light rounded-md text-white p-2"></textarea>
                <div className="absolute flex gap-3 justify-end items-center">
                    <Button className="w-16 px-3 py-1 border justify-center items-center flex">Cancel</Button>
                    <Button className="w-16 px-3 py-1 border justify-center items-center flex">Sent</Button>

                </div>
            </div>
        </form>
    </div>
  )
}

