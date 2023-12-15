'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '@/app/components/UserCard/userCard'

export default async function Profile() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/quth/singin?callbackURL=/client')
    },
  })


  return (
    <>
      <h2>Profile</h2>
       <UserCard user={session?.user} pagetype={'Profile'} />
    </>
  )
}
