import React from 'react'
import { authConfig } from '../../lib/authConfig'
import { getServerSession } from 'next-auth/next'
import UserCard from '@/app/components/UserCard/userCard'
import Image from 'next/image'
import { Container } from '../components/Container/container'
import { redirect } from 'next/navigation'


export default async function Profile() {
  // await loginIsRequiredClient();
  const session = await getServerSession(authConfig);
  console.log(session);
  if (!session) {
    redirect('/profile')
  }


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
