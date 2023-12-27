import GoogleSvgComponent from '../../../../public/icon/GoogleSVG'
import { signIn } from 'next-auth/react'

type Props = {
  title: string
}

export function GoogleSignInButton({ title }: Props) {
  const handleClick = () => {
    signIn('google')
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-white p-4 h-8 rounded-xl flex justify-center items-center shadow-xl"
    >
      <GoogleSvgComponent />
      <span className="ml-2 text-base text-secondary font-bold">{title}</span>
    </button>
  )
}

export function LoginInButton() {
  // const handleClick = () => {
  //   signIn()
  // }
  return (
    <button
      type="button"
      // onClick={handleClick}
      className="w-[280px] h-[33px] shadow-xl rounded-[50px] bg-gradient-to-r to-[#2e5fba] via-transparent from-[#E2EAF9] my-3 text-white text-medium font-normal hover:font-bold"
    >
      <span>Log In</span>
    </button>
  )
}

export function RegisterButton() {
  // const handleClick = () => {
  //   signIn()
  // }

  return (
    <button
      // onClick={handleClick}
      type="submit"
      className="w-[280px] h-[33px] shadow-xl rounded-[50px] bg-gradient-to-r to-[#2e5fba] via-transparent from-[#E2EAF9] my-3 text-white text-medium font-normal hover:font-bold"
    >
      Join Us
    </button>
  )
}
