'use client'
import { Container } from '../components/Container/container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import Link from 'next/link'
import LogInForm from '../components/Forms/LogInForm'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { useEffect } from 'react'

export default function LogInPage() {
  const router = useRouter()

  const { data: session, status } = useSession()
  console.log(status)

  useEffect(() => {
    if (status === 'loading') {
      return
    }

    if (session) {
      router.replace('/profile')
    }
  }, [router, session, status])

  return (
    status !== 'authenticated' && (
      <Container>
        <section  className="flex justify-center items-center md:py-36 py-20 xl:px-[100px] md:px-12 px-4 bg-section-texture bg-cover bg-center bg-no-repeat">
          <div className="bg-gradient-to-r to-[#265539D2] via-transparent from-[#2655397C] w-[620px] h-[450px] grid justify-center py-6 px-6 rounded-md">
            <div className="text-center">
              <Image src={logo} alt="logo" width={100} height={40} className="mx-auto" />
              <h3 className="mb-2 mt-2 text-white">Log in your account</h3>
            </div>

            <LogInForm />
            <div className="flex gap-3 justify-center items-center">
              <p className="text-white text-small font-normal">Don’t have account? </p>
              <Link href="/register">
                <span className="font-semibold text-orange text-small">Register Now</span>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    )
  )
}
