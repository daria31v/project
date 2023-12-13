import Logo from '../Logo/logo'
import Link from 'next/link'
import { Container } from '../Container/container'

// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="">
      <Container>
        <div className="md:flex justify-between block gap-2 items-start py-10 h-auto">
          <div className="">
            <div className=" w-48">
              <Logo src="" alt="logo" width={150} height={100}/>
            </div>
            <p className="mt-4 text-medium font-semibold ">
              The World is Wonderful: Catch the Moment!
            </p>
          </div>
          <div className="grid gap-2 text-medium font-extra sm:items-center md:mt-0 mt-4">
            <h4 className="text-sm text-secondary">OUR COMPANY</h4>
            <Link href="/about" className="hover:text-orange_light ">
              About us
            </Link>
            <Link href="/partners" className="hover:text-orange_light">
              Our parners
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-secondary mb-2 rounded-sm">SUBSCRIBE</h4>
            <p className="text-medium mb-2">Subscribe to our recent newsletter.</p>

            <form className="" name="signup_form" autoComplete="on" noValidate>
              <input className="px-3 py-2" type="email" name="email" placeholder="e-mail" />
              <button className="" type="submit">
                {/* <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.09432 2.19696L17.2552 14.9976L9.97362 18.595L2.69199 22.1925L1.09432 2.19696Z"
                    fill="white"
                  />
                  <path
                    d="M1.09432 2.19696L17.2552 14.9976L9.97362 18.595M1.09432 2.19696L2.69199 22.1925L9.97362 18.595M1.09432 2.19696L9.97362 18.595"
                    stroke="#3C64B1"
                    stroke-width="1.5"
                  />
                </svg> */}
                
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
