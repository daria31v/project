import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import { MySVGImage } from '../components/MySvg/MySVG'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import AppleSvgComponent from '../../../public/icon/AppleSVG';
import FacebookSvgComponent from '../../../public/icon/FacebookSVG';
import GoogleSvgComponent from '../../../public/icon/GoogleSVG';

export default function Registration() {
  return (
    <Container>
      <div  className="flex justify-center items-center my-36">
      <div  className="bg-gradient-to-r to-[#b0c7f3] via-transparent from-[#E2EAF9] w-[620px] grid justify-center py-6 rounded-md">
        <div className="text-center">
          <Image src={logo} alt="logo" width={150} height={50} className="mx-auto" />
          <h3 className="my-6 text-blue">Create your account</h3>
        </div>

        <form className="text-blue_text text-end" autoComplete="off">
        <label className="flex w-full h-9 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text  hover:border-orange hover:text-orange"
            />
          </label>
          <label className="flex w-full h-9 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full text-medium font-normal placeholder:text-blue_text outline-none outline-transparent border-b border-blue_text  hover:border-orange hover:text-orange"
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
          <div className="flex justify-center items-center mt-2">
            <button
              type="submit"
              className="w-[280px] h-[33px] rounded-[50px] bg-gradient-to-r to-[#2e5fba] via-transparent from-[#E2EAF9] my-3 text-white text-medium font-normal hover:font-bold"
            >
              Join Us
            </button>
          </div>
          <div className="flex justify-between items-center gap-3 w-full">
            <div className="h-px bg-blue_text w-full"></div>
            <span className="text-xs">OR</span>
            <div className="h-px bg-blue_text w-full"></div>
          </div>
        </form>
        
          <ul className="flex justify-center items-center my-3 gap-6">
            <li className="bg-white w-10 h-10 rounded-md flex justify-center items-center">
              <Link href="/" className="">
                <GoogleSvgComponent />
              </Link>
            </li>
            <li className="bg-white w-10 h-10 rounded-md flex justify-center items-center">
              <Link href="/" className="">
                <FacebookSvgComponent  />
              </Link>
            </li>
            <li className="bg-white w-10 h-10 rounded-md flex justify-center items-center">
              <Link href="/" className="">
                <AppleSvgComponent  />
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 justify-center items-center">
            <p className="text-blue_text text-small font-normal">Don’t have account? </p>
            <Link href="/login"><span className="font-semibold text-blue text-small">LogIn Now</span></Link>
          </div>
      </div>
      </div>
    </Container>
  )
}
