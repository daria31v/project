'use client'
import { Container } from '../components/Container/container'
import Link from 'next/link'
import RegisterForm from '../components/Forms/RegisterForm'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function RegisterPage() {
  const { data: session } = useSession()
  if (session) redirect('/login')

  return (
    <section className="flex justify-center items-center md:py-36 py-20 xl:px-[100px] md:px-12 px-4 bg-section-texture bg-cover bg-center bg-no-repeat">
      <div className="shadow-xl bg-gradient-to-br from-[#ECAE8177] via-transparent to-[#F38605] w-[620px] h-[450px] grid justify-center py-5 rounded-md">
        <div className="text-center">
          <h3 className=" text-white font-extra_bold text-md uppercase">Join us</h3>
          <p className="text-secondary text-small font-bold text-center tracking-widest">
            Create an account and join our journey
          </p>
        </div>

        <RegisterForm />

        <div className="flex gap-3 justify-center items-center">
          <p className="text-secondary text-small font-normal">Do you have an already account? </p>
          <Link href="/login">
            <span className="font-bold text-secondary text-small hover:text-white">Log In Now</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
