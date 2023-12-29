'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../Button/Buttons'


const ProfileCard = ({user} :any, userA: string ) => {

  return (
    <>
    {user?.image ? (
  <Image className="mb-6 rounded-full" src={user?.image} alt="user" width={160} height={160} />
) : (
  <Image className="mb-6 rounded-full" src='/images/user.png' alt="default photo user" width={160} height={160} />
)}
  <Button className="border p-2">Edit</Button>
    <p>Name: {user?.name}</p>
    <p>Email: {user?.email}</p>
    </>

  )
}

export default ProfileCard;