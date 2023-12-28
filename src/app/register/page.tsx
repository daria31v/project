'use client'
import { Container } from '../components/Container/container'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '../components/Forms/RegisterForm'
import { authConfig } from '../../utils/authConfig'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function RegisterPage(){

  const { data: session, status: sessionStatus } = useSession()

  useEffect(() => {
    if (sessionStatus === 'authenticated') {
      redirect('/login')
    }
  }, [sessionStatus])

  if (sessionStatus === 'loading') {
    return <h1>Loading....</h1>
  }

  return (
    sessionStatus !== 'authenticated' && (
      <Container>
        <div className="flex justify-center items-center my-6">
          <div className="shadow-xl bg-gradient-to-r to-[#FFB800] via-transparent from-[#E2EAF9] w-[620px] grid justify-center py-6 rounded-md">
            <div className="text-center mb-3">
              <Image src={logo} alt="logo" width={100} height={40} className="mx-auto" />
              <h3 className="my-6 text-secondary font-bold uppercase">Join us</h3>
              <p className="text-secondary text-base font-bold text-start">
                Create own account and share wonderful photo and thoughts
              </p>
            </div>

            <RegisterForm />

            <div className="flex gap-3 justify-center items-center">
              <p className="text-blue_text text-small font-normal">
                Do you have an already account?{' '}
              </p>
              <Link href="/login">
                <span className="font-bold text-blue text-small ">Log In Now</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    )
  )
}
