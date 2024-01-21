'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Button from '../Button/Buttons'
import DoneSVG from '../../../../public/icon/DoneSVG'
import ProfileNav from './ProfileNav'
import avatar from '../../../../public/images/user.webp'
import PlusSVG from '../../../../public/icon/PlusSVG'

const ProfileCard = ({ user }: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
   //POST req
    // console.log('File', selectedFile);
  };
  return (
    <>
      <div className="grid">
        <div className="flex justify-center items-center">
        {user?.image ? (
          <>
        <input
          type="file"
          accept="users/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          />
          <Image
          className="rounded-full"
          src={user?.image}
          alt="user"
          width={200}
          height={200}
          />
          </>
          ) : (
            <>
            <input
          type="file"
          accept="users/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          />
            <Image
            className="mb-6 rounded-full"
            src={avatar}
            alt="default photo user"
            width={200}
            height={200}
            />
            </>
            )}
        </div>

        {/* <div className="flex justify-end gap-3 my-3 rounded-md">
          <Button className=" h-7 shadow-md bg-peach border border-duna px-5 py-1 flex justify-center items-center rounded-[20px]">
          <PlusSVG/>
          </Button>
          <Button className=" h-7 shadow-md bg-peach border text-duna text-md border-duna px-5 py-1 flex justify-center items-center rounded-[20px]">
            <DoneSVG className=""/>
          </Button>
        </div> */}
      </div>
      <ProfileNav/>
    </>
  )
}

export default ProfileCard
