import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import Image from 'next/image'

// SEO
export const metadata: Metadata = {
  title: 'About us | A World in My Lens',
  description: 'Get acquainted with the project`s creation history from its creators.',
}

export default function About() {
  return (
    <Container>
      <section className="py-16 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <div className="grid justify-around">
          <div>
            <h1 className="text-md font-bold text-center uppercase mb-4 mt-4 text-secondary">
              Our story
            </h1>
          </div>
          <div className="flex justify-center items-center mb-4">
            <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
          </div>
          <p className="max-w-[469px] font-normal text-primary text-center text-medium">
            Through visual storytelling, we invite you to embark on a journey with
            us a celebration of moments, cultures, and the art of sharing experiences.
          </p>
        </div>

        <div className="xl:grid xl:grid-cols-2 xl:gap-20 xl:my-16">
          <div className="max-w-full">
            <h2 className="font-extra font-normal text-ml text-secondary mb-7 text-center xl:text-start mt-4 xl:mt-0 indent-8">
              What we believe
            </h2>
            <p className="text-justify font-normal text-medium text-primary indent-8">
              Developed by{' '}
              <a
                href="https://www.linkedin.com/in/daria-vdovichenko/"
                className="decoration-sky-500 font-bold italic"
              >
                Daria Vdovichenko
              </a>{' '}
              and designed by{' '}
              <a
                href="https://www.linkedin.com/in/cherin-kim-blanton/"
                className="decoration-sky-500 font-bold italic"
              >
                Cherin Kim Blanton
              </a>
              , our project is a culmination of our passion for photography, travel, and the earnest
              desire to share these ences. Driven by our fervor for capturing moments and
              exploring the world through our lens, we envisioned this project as a means to
              encapsulate the beauty and stories we encounter. Through our combined efforts, we
              aspire to inspire and connect with others who share our love for photography and
              wanderlust. Join us on this journey as we celebrate the art of storytelling through
              images and narratives, embracing the belief that experiences are meant to be shared
              and cherished.{' '}
            </p>
          </div>
          <div className=" my-9 xl:my-0 flex justify-center items-center">
            <Image
              src="./images/about.webp"
              alt="montaine holidays"
              width={565}
              height={420}
              className=" shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Container>
  )
}
// box-shadow: 4px 4px 4px 0px #00000012;
