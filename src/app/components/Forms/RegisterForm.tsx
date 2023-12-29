'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { RegisterButton } from '../Button/authButton'

export default function RegisterForm() {
  const [error, setError] = useState('')
  const router = useRouter()

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$/i
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    // console.log(name, email, password)

    if (!isValidEmail(email)) {
      setError('Email is invalid!')
      return
    }
    if (!password || password.length < 8) {
      setError('Password in invalid!')
      return
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      console.log('res', res)

      if (res.status === 400) {
        setError('This email is already registrate!')
      }
      if (res.status === 200) {
        setError('')
        console.log('Go to profile')
        router.replace('/login')
      }
      if (res.status === 500) {
        setError('Technical problems')
      }

    } catch (error) {
      setError('Somthing is wrong')
      console.log(error)
      router.push('/errors')
    }
  }

  return (
    <>
      <form className="text-blue_text text-end" autoComplete="off" onSubmit={handleSubmit}>
        <div className="flex gap-8">
          <label className="flex w-full h-9 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text  hover:border-orange hover:text-orange"
            />
          </label>
        </div>
        <label className="flex w-full h-9 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text  hover:border-orange hover:text-orange"
          />
        </label>
        <label className="flex w-full h-9">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full bg-transparent text-medium font-normal placeholder:text-blue_text outline-none border-b border-blue_text  hover:border-orange hover:text-orange"
          />
        </label>
        <div className="flex justify-center items-center mt-2">
          <RegisterButton />
        </div>
        <div className="text-error text-xs font-bold text-start">{error && error}</div>

        <div className="text-xs flex gap-1 my-2 justify-center">
          <input type="checkbox" />
          <Link href="/" className="decoration-solid ">
            <span className="underline">Please Check our Terms and Conditions</span>
          </Link>{' '}
          <span className="">and</span>
          <Link href="/">
            <span className="underline">Privacy Policy.</span>
          </Link>
        </div>
      </form>
    </>
  )
}
