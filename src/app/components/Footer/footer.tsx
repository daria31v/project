import Logo from '../Logo/logo'
import Link from 'next/link'
import { Container } from '../Container/container'
import SentSVG from '../../../../public/icon/SentSVG'

const Footer = () => {
  return (
    <footer className="">
      <Container>
        <div className="md:flex justify-between block gap-2 items-start py-10 h-auto">
          <div className="">
            <div className=" w-48">
              <Logo src="" alt="logo" width={100} height={40} />
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
              <input
                className="px-3 py-2 h-6 outline-none outline-transparent border-b border-blue_text placeholder:text-blue_text"
                type="email"
                name="email"
                placeholder="e-mail"
              />
              <button
                className="text-white ml-2 hover:border p-1 hover:text-orange hover:rounded-md"
                type="submit"
              >
                {' '}
                <SentSVG />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
