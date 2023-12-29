'use client'
import { Container } from '../components/Container/container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import Link from 'next/link'
import LogInForm from '../components/Forms/LogInForm'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/utils/authConfig'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'


export default function LogInPage() {
  const { data: session, status: sessionStatus } = useSession()

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      redirect('/profile')
    }
  }, [sessionStatus]);

  if (sessionStatus === 'loading') {
    return <h1>Loading....</h1>
  }


  return (
    sessionStatus !== 'authenticated' && (
    <Container>
      <div className="flex justify-center items-center my-10 p-[100px]">
        <div className="bg-gradient-to-r to-[#b0c7f3] via-transparent from-[#E2EAF9] w-[620px] grid justify-center py-6 rounded-md">
          <div className="text-center">
            <Image src={logo} alt="logo" width={100} height={40} className="mx-auto" />
            <h3 className="my-6 text-blue">Log in your account</h3>
          </div>

          <LogInForm />
          <div className="flex gap-3 justify-center items-center">
            <p className="text-blue_text text-small font-normal">Don’t have account? </p>
            <Link href="/register">
              <span className="font-semibold text-blue text-small">Register Now</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
  )
}
