'use client'
import Logo from '../Logo/logo'
import Link from 'next/link'
import { Container } from '../Container/container'
import SentSVG from '../../../../public/icon/SentSVG'
import toast, { Toaster } from 'react-hot-toast'

const Footer = () => {
  return (
    <Container>
      <Toaster/>
      <footer className="bg-secondary text-white xl:px-[100px] md:px-12 px-6">
        <div className="md:grid xl:grid-cols-2 xl:gap-7 block gap-2 items-center py-10 h-auto ">
          <div className="">
            <div className="flex justify-center items-center xl:justify-start">
              <Logo src="" alt="logo" width={114} height={48} />
            </div>
            <p className="mt-3 text-medium font-semibold italic text-center xl:text-start">
              Discover your next wonderful journey through others&apos; eyes and <br /> catch the
              moment in the wonderful world of photography!
            </p>
          </div>

          <div className="grid gap-5 xl:gap-2 md:grid-cols-2 mt-6 xl:mt-0">
            <div className="grid gap-3 text-medium items-center xl:items-start md:mt-0 mt-4">
              <h4 className="text-sm text-orange font-semibold">OUR COMPANY</h4>
              <Link href="/about" className="hover:text-orange_light ">
                About us
              </Link>
              <Link href="/partners" className="hover:text-orange_light">
                Our parners
              </Link>
            </div>
            <div className="grid item-center mt-6 md:mt-0">
              <h4 className="font-semibold text-sm text-orange mb-2 rounded-sm">SUBSCRIBE</h4>
              <p className="text-medium mb-1">Subscribe to our recent newsletter</p>

              <form className="flex items-center" name="signup_form" autoComplete="on" noValidate>
                <div className="relative">

                <input
                  className="pr-2 py-3 h-6 w-[200px] outline-none outline-transparent border-b border-orange placeholder:text-nude text-base"
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  />
                <button
                onClick={() => toast.success('We send you email, please check :)')}
                  className="absolute right-0 top-[-10px]  text-white ml-2  hover:rounded-md p-2 flex items-center justify-center"
                  type="reset"
                  >
                  {' '}
                  <SentSVG />
                </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-3">
          <p className="text-base text-white">
            © 2024 World in my lens | All rights reserved. 
          </p>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
