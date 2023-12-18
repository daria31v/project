import React from 'react'
import { authConfig } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import UserCard from '@/app/components/UserCard/userCard'
import Image from 'next/image'
import { Container } from '../components/Container/container'

export default async function Profile() {
  const session = await getServerSession(authConfig)

  return (
    <Container>
      <section className="mt-16 font-bold">
        <h2 className="mb-9">Profile {session?.user?.name}</h2>
        {session?.user?.image && (
          <Image className="mb-6" src={session.user.image} alt="user" width={50} height={50} />
        )}
        {session ? <UserCard /> : <h1>Registrate please!</h1>}
      </section>
    </Container>
  )
}
