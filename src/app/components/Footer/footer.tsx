import Logo from '../Logo/logo'
import Link from 'next/link'
import { Container } from '../Container/container'
import SentSVG from '../../../../public/icon/SentSVG'

const Footer = () => {
  return (
    <Container>
      <footer className="bg-secondary text-white xl:px-[100px] md:px-12 px-6">
        <div className="md:grid xl:grid-cols-2 xl:gap-7 block gap-2 items-center py-10 h-auto ">
          <div className="">
            <div className="flex justify-center items-center xl:justify-start">
              <Logo src="" alt="logo" width={114} height={48} />
            </div>
            <p className="mt-[22px] text-medium font-semibold text-center xl:text-start">
              The World is Wonderful: Catch the Moment!
            </p>
            <p className=" text-medium font-semibold text-center xl:text-start">Let’s discover your next journey from others.</p>
          </div>

          
          <div className="grid gap-5 xl:gap-2 md:grid-cols-2 mt-6 xl:mt-0">
          <div className="grid text-medium items-center xl:items-start md:mt-0 mt-4">
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
            <p className="text-medium mb-1">Subscribe to our recent newsletter.</p>

            <form className="" name="signup_form" autoComplete="on" noValidate>
              <input
                className="px-3 py-2 h-6 w-[200px] outline-none outline-transparent border-b border-nude placeholder:text-nude"
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
        </div>
      </footer>
    </Container>
  )
}

export default Footer
