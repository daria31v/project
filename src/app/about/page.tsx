import { Metadata } from 'next'
import { Container } from '../components/Container/container'
import Image from 'next/image'

// SEO
export const metadata: Metadata = {
  title: 'About us | A World in My Lens',
  description: '',
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
        <p className="max-w-[469px] font-normal text-primary text-justify text-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
      </div>
      
      <div className="xl:grid xl:grid-cols-2 xl:gap-20 xl:my-16">
        <div className="max-w-full">
          <h2 className="font-extra font-normal text-ml text-secondary mb-7 text-center xl:text-start">What we believe</h2>
          <p className="text-justify font-normal text-medium text-primary">Gallia est omnis divisa in partes tres, quarum. <a href='https://www.linkedin.com/in/daria-vdovichenko/' className="decoration-sky-500 font-bold">NAME</a> & <a href='https://www.linkedin.com/in/cherin-kim-blanton/' className="decoration-sky-500 font-bold">NAME</a> Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit </p>
        </div>
        <div className=" my-9 xl:my-0 flex justify-center items-center">
          <Image src='./images/about.webp' alt='montaine holidays' width={565} height={420} className=" shadow-xl rounded-2xl"/>
        </div>
      </div>
      </section>
    </Container>
  )
}
// box-shadow: 4px 4px 4px 0px #00000012;
