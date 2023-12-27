
import { authConfig } from '../../lib/authConfig'
import { getServerSession } from 'next-auth/next'
import { Container } from '../components/Container/container'
import { redirect } from 'next/navigation'
import ProfileComponent from '../components/Profile/ProfileComponent'

export default async function ProfilePage() {
  const session = await getServerSession(authConfig)
  console.log(session);
  // if (!session) {
  //   redirect('/auth/login')
  // }

  return (
    <Container>
      <section className="mt-16 font-bold">
      <h2 className="mb-9 font-bold text-md tracking-wider uppercase">My profile</h2>
       <ProfileComponent user={session?.user}/>
      </section>
    </Container>
  )
}
