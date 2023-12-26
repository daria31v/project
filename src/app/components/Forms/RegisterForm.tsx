'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { RegisterButton } from '../Button/authButton'

export default function RegisterForm() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()
  const formData = new FormData();
  const handleSubmit = async (e: { preventDefault: () => void
    currentTarget: HTMLFormElement | undefined }) => {
    e.preventDefault()

    if (!first || !last || !email || !password) {
      setError('All fields are required!')
      return
    }
    try {
      const response = await fetch('/api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const { userExists } = await response.json()

      if (userExists) {
        setError('User already exists!')
        console.log('User already exists!')
        return
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first,
          last,
          email,
          password,
        }),
      })
      if (res.ok) {
        const form = e.currentTarget
        form?.reset()
        console.log('Successesful!')
        // signIn('', {
        //   first: formData.get('first'),
        //   last: formData.get('last'),
        //   email: formData.get('email'),
        //   password: formData.get('password'),
        //   redirect: false
        //  })
        //  console.log(form);
        router.push('/profile')
      } else {
        console.log('User registrated failed')
      }
    } catch (error) {
      console.log('Error during registration', error)
    }
  }
    //   const data = new FormData(e.currentTarget)
    //   const signInResponse = await signIn('credentials', {
    //     email: data.get('email'),
    //     password: data.get('password'),
    //     redirect: false,
    //   })
    //   if (signInResponse && !signInResponse.error) {
    //     router.push('/profile')
    //   } else {
    //     console.log('Error', signInResponse)
    //     setError('Your email or password is wrong!')
    //   }
    // }

    // }

    return (
      <>
        <form className="text-blue_text text-end" autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex gap-8">
            <label className="flex w-full h-9 mb-4">
              <input
                onChange={(e) => setFirst(e.target.value)}
                type="text"
                name="first"
                placeholder="First Name"
                className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text  hover:border-orange hover:text-orange"
              />
            </label>
            <label className="flex w-full h-9 mb-4">
              <input
                onChange={(e) => setLast(e.target.value)}
                type="text"
                name="last"
                placeholder="Last Name"
                className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text  hover:border-orange hover:text-orange"
              />
            </label>
          </div>
          <label className="flex w-full h-9 mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text  hover:border-orange hover:text-orange"
            />
          </label>
          <label className="flex w-full h-9">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent text-medium font-normal placeholder:text-blue_text outline-none border-b border-blue_text  hover:border-orange hover:text-orange"
            />
          </label>
          <div className="flex justify-center items-center mt-2">
            <RegisterButton/>
          </div>
          {error ? (
            <div className="text-error text-xs font-bold text-start">{error}</div>
          ) : (
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
          )}
        </form>
      </>
    )
  }

