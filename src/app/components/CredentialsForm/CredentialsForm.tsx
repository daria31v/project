'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { AppleSignInButton, CredentialsSignInButton, FacebookSignInButton, GoogleSignInButton } from '../Button/authButton'

interface CredentialsFormProps {
  csrfToken?: string
}

export function CredentialsForm(props: CredentialsFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleSabmit = async (e: {
    preventDefault: () => void
    currentTarget: HTMLFormElement | undefined
  }) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const signInResponse = await signIn('credentials', {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    })
    if (signInResponse && !signInResponse.error) {
      router.push('/profile')
    } else {
      console.log('Error', signInResponse)
      setError('Your email or password is wrong!')
    }
  }

  return (
    <>
      <form className="text-blue_text text-end" autoComplete="off" onSubmit={handleSabmit}>
        {error && <span className="p-4 mb-2 text-orange font-bold">{error}</span>}
        <label className="flex w-full h-9 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text hover:border-orange hover:text-orange"
          />
        </label>
        <label className="flex w-full h-9">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-medium font-normal placeholder:text-blue_text outline-none border-b border-blue_text  hover:border-orange hover:text-orange"
          />
        </label>
        <span className="text-xs font-light text-grey_text text-end">Forgot password?</span>
        <div className="flex justify-center items-center">
          <CredentialsSignInButton />
        </div>
        <div className="flex justify-between items-center gap-3 w-full">
          <div className="h-px bg-blue_text w-full"></div>
          <span className="text-xs">OR</span>
          <div className="h-px bg-blue_text w-full"></div>
        </div>
      </form>
      <div className="flex justify-center items-center my-3 gap-6">
        <GoogleSignInButton />
        <FacebookSignInButton/>
        <AppleSignInButton/>
      </div>
    </>
  )
}
