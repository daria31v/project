import { Container } from '../components/Container/container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import Link from 'next/link'
import { CredentialsForm } from '../components/CredentialsForm/CredentialsForm'
import { getServerSession } from 'next-auth'
import { authConfig } from '../../lib/authConfig'
import { redirect } from 'next/navigation'


export default async function Login() {
  const session = await getServerSession(authConfig);
  console.log('session', session);

  if (session) return redirect('/profile');

  return (
    <Container>
      <div className="flex justify-center items-center my-10">
        <div className="bg-gradient-to-r to-[#b0c7f3] via-transparent from-[#E2EAF9] w-[620px] grid justify-center py-6 rounded-md">
          <div className="text-center">
            <Image src={logo} alt="logo" width={100} height={40} className="mx-auto" />
            <h3 className="my-6 text-blue">Log in your account</h3>
          </div>

          <CredentialsForm />
          <div className="flex gap-3 justify-center items-center">
            <p className="text-blue_text text-small font-normal">Don’t have account? </p>
            <Link href="/registration">
              <span className="font-semibold text-blue text-small">Register Now</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
