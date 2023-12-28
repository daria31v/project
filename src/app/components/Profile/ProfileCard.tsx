'use client'
import Image from 'next/image'
import React from 'react'


const ProfileCard = ({user} :any ) => {
  // console.log({user});
  return (
    <>
    {user?.image && (
          <Image className="mb-6 rounded-full" src={user?.image} alt="user" width={160} height={160} />
        )}
    <p>Name: {user?.name}</p>
    <p>Email: {user?.email}</p>
    <p>Role: {user?.role}</p>
    <p>Provider: {user?.provider}</p>
    </>

  )
}

export default ProfileCard;