
import { Container } from '../components/Container/container'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import Link from 'next/link'
import { MySVGImage } from '../components/MySvg/MySVG'

export default function Login() {
  // const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const form = e.currentTarget
  // dispatch(
  //   logIn({
  //     email: form.elements.email.value,
  //     password: form.elements.password.value,
  //   }),
  // )

  //   form.reset()
  // }

  return (
    <Container>
      <div  className="flex justify-center items-center my-36">
      <div  className="bg-gradient-to-r to-[#b0c7f3] via-transparent from-[#E2EAF9] w-[620px] grid justify-center py-6 rounded-md">
        <div className="text-center">
          <Image src={logo} alt="logo" width={150} height={50} className="mx-auto" />
          <h3 className="my-6 text-blue">Log in your account</h3>
        </div>

        <form className="text-blue_text text-end" autoComplete="off">
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
            <button
              type="submit"
              className="w-[280px] h-[33px] rounded-[50px] bg-gradient-to-r to-[#2e5fba] via-transparent from-[#E2EAF9] my-3 text-white text-medium font-normal hover:font-bold"
            >
              Log In
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
                <MySVGImage xlinkHref="icon/google.svg" x={0} y={0} width={28} height={28} />
              </Link>
            </li>
            <li className="bg-white w-10 h-10 rounded-md flex justify-center items-center">
              <Link href="/" className="">
                <MySVGImage xlinkHref="icon/facebook-color.svg" x={0} y={0} width={28} height={28} />
              </Link>
            </li>
            <li className="bg-white w-10 h-10 rounded-md flex justify-center items-center">
              <Link href="/" className="">
                <MySVGImage xlinkHref="icon/apple.svg" x={0} y={0} width={28} height={28} />
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 justify-center items-center">
            <p className="text-blue_text text-small font-normal">Don’t have account? </p>
            <Link href="/registration"><span className="font-semibold text-blue text-small">Register Now</span></Link>
          </div>
      </div>
      </div>
    </Container>
  )
}
