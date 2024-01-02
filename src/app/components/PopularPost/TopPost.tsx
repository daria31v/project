import motorhome from '../../../../public/images/motorhome.webp'
import Image from 'next/image'



export default function TopPost() {
  const post = {
    id: 1,
    photo: motorhome,
    title: 'Wonderful Blog',
    nikname: 'Fox',
    post: 'Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.Gallia est omnis divisa in partes tres, quarum. Fabio vel iudice vincam, sunt in culpa qui officia. Salutantibus vitae elit libero, a pharetra augue. Hi omnes lingua, institutis, legibus inter se differunt. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.',
  }

  return (
    <div className="font-normal text-medium pb-14 ">
      <h2 className="text-ml text-center xl:text-center font-extra uppercase font-normal mb-7 text-secondary">
        people love to visit
      </h2>
      <div className="xl:flex md:block font-normal text-medium ">
        <div className="flex justify-center h-[347px] max-w-[706px] shadow-xl rounded-2xl xl:mr-auto">
          <Image
            src={post.photo}
            alt="..."
            width={706}
            height={347}
            className="rounded-2xl object-cover overflow-hidden"
            priority
          ></Image>
        </div>

        <div className="mt-6 md:mt-8 xl:mt-0 xl:w-[338px] 2xl:w-[550px] ">
          <p className="text-justify font-extra">{post.post}</p>
        </div>
      </div>
    </div>
  )
}
