'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../Button/Buttons'
import DoneSVG from '../../../../public/icon/DoneSVG'
import ProfileNav from './ProfileNav'
import avatar from '../../../../public/images/user.webp'

const ProfileCard = ({ user }: any) => {
  return (
    <>
      <div className="w-[240px] grid">
        <div className="flex justify-center items-center mb-7">

        {user?.image ? (
          <Image
          className="rounded-full"
          src={user?.image}
          alt="user"
          width={200}
          height={200}
          />
          ) : (
            <Image
            className="mb-6 rounded-full"
            src={avatar}
            alt="default photo user"
            width={200}
            height={200}
            />
            )}
        </div>

        <div className="flex justify-end gap-3 mb-3 rounded-md">
          <Button className=" h-7 shadow-md bg-peach border border-duna px-5 py-1 flex justify-center items-center rounded-[20px]">
            <DoneSVG className=""/>
          </Button>
          <Button className=" h-7 shadow-md bg-peach border text-duna text-md border-duna px-5 py-1 flex justify-center items-center rounded-[20px]">
            <span>+</span>
          </Button>
        </div>
      </div>
      <ProfileNav/>
    </>
  )
}

export default ProfileCard
