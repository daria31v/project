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
      className="bg-white p-4 h-[38px] w-full rounded-[20px] flex justify-center items-center shadow-xl"
    >
      <GoogleSvgComponent />
      <span className="ml-2 text-base text-secondary font-bold">{title}</span>
    </button>
  )
}

export function LoginInButton({ onClick }: any) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-[280px] h-[38px] shadow-xl rounded-[20px] bg-gradient-to-l to-[#FFF2E8] via-transparent from-[#ECAE81] my-3 text-secondary text-medium font-bold hover:text-white hover:from-secondary hover:to-secondary"
    >
    <span>Log In</span>
    </button>
  )
}

export function RegisterButton() {
  return (
    <button
      type="submit"
      className="w-[280px] h-[38px] shadow-xl rounded-[50px] bg-gradient-to-r from-[#f3f5f8] via-transparent to-[orange] text-secondary text-medium font-bold hover:from-secondary hover:to-secondary hover:text-white"
    >
      Join Us
    </button>
  )
}
