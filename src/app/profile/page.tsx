
import { authConfig } from '../../utils/authConfig'
import { getServerSession } from 'next-auth/next'
import { Container } from '../components/Container/container'
import { redirect } from 'next/navigation'
import ProfileComponent from '../components/Profile/ProfileComponent'

export default async function ProfilePage() {
  const session = await getServerSession(authConfig)
  console.log('Profile session:',session);
  if (!session) {
    redirect('/login')
  }

  return (
    <Container>
      <section className="mt-16 font-bold">
      <h2 className="mb-9 font-bold text-md tracking-wider uppercase">My profile</h2>
       <ProfileComponent user={session?.user}/>
      </section>
    </Container>
  )
}
