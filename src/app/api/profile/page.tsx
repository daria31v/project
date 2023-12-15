import React from 'react'
import { options } from '../auth/[...nextauth]/options';
import { getServerSession } from "next-auth/next";
import UserCard from '@/app/components/UserCard/userCard';




export default async function Profile(){
const session = await getServerSession(options);

  return (
    <>
      <h2>Profile</h2>
      {session ? (
      <UserCard pagetype={"Profile"}/>) : (
        <h1>You are not user</h1>
      )}
    </>
  )
}

