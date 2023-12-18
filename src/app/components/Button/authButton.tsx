
import GoogleSvgComponent from '../../../../public/icon/GoogleSVG'
import FacebookSvgComponent from '../../../../public/icon/FacebookSVG'
import AppleSvgComponent from '../../../../public/icon/AppleSVG'
import { signIn } from 'next-auth/react'

export function GoogleSignInButton (){
  const handleClick = () => {
    signIn('google');
  }
  return (
    <button
    onClick={handleClick}
    className="bg-white w-10 h-10 rounded-md flex justify-center items-center"
    >
      <GoogleSvgComponent/>
    </button>
  )
}

export function CredentialsSignInButton (){
  const handleClick = () => {
    signIn();
  }
  return (
    <button
    onClick={handleClick}
    className="w-[280px] h-[33px] rounded-[50px] bg-gradient-to-r to-[#2e5fba] via-transparent from-[#E2EAF9] my-3 text-white text-medium font-normal hover:font-bold"
    >
      <span>LogIn</span>
    </button>
  )
}


export function FacebookSignInButton (){
  const handleClick = () => {
    signIn('facebook');
  }
  return (
    <button
    onClick={handleClick}
    className="bg-white w-10 h-10 rounded-md flex justify-center items-center"
    >
      <FacebookSvgComponent/>
    </button>
  )
}

export function AppleSignInButton (){
  const handleClick = () => {
    signIn('apple');
  }
  return (
    <button
    onClick={handleClick}
    className="bg-white w-10 h-10 rounded-md flex justify-center items-center"
    >
      <AppleSvgComponent/>
    </button>
  )
}
